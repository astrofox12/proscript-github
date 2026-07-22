const FALLBACK_RATE = 78.32;
const STORAGE_KEY = 'proscript_usd_rate';
const TTL_MS = 4 * 60 * 60 * 1000;

let cachedRate = null;
let fetchPromise = null;

try {
  if (typeof localStorage !== 'undefined') {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const { rate, ts } = JSON.parse(raw);
      if (Date.now() - ts < TTL_MS) {
        cachedRate = rate;
      }
    }
  }
} catch {}

function persistRate(rate) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ rate, ts: Date.now() }));
  } catch {}
}

export async function getUsdRubRate() {
  if (fetchPromise) return fetchPromise;

  fetchPromise = (async () => {
    try {
      const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');

      if (response.ok) {
        const data = await response.json();
        const usdValue = data.Valute.USD.Value;
        const rate = parseFloat(String(usdValue).replace(',', '.'));
        cachedRate = rate;
        persistRate(rate);
      } else if (cachedRate === null) {
        console.warn('Failed to fetch USD rate from CBR, using fallback');
        cachedRate = FALLBACK_RATE;
      }
    } catch (error) {
      console.error('Error fetching USD rate:', error);
      if (cachedRate === null) cachedRate = FALLBACK_RATE;
    }

    return cachedRate;
  })();

  return fetchPromise;
}

export function getCachedRate() {
  if (cachedRate !== null) return cachedRate;
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { rate, ts } = JSON.parse(raw);
        if (Date.now() - ts < TTL_MS) {
          cachedRate = rate;
          return rate;
        }
      }
    }
  } catch {}
  return null;
}
