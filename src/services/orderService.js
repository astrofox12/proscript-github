import { PaymentService } from './paymentService.js';

function resolveCourseName(item) {
  if (!item || !item.title) return '';
  if (typeof item.title === 'string') return item.title;
  return item.title.en || item.title.ru || '';
}

export async function placeOrder({ items, email, locale, exchangeRate }) {
  let total = items.reduce((sum, item) => sum + item.price, 0);
  const courseName = resolveCourseName(items[0]);

  if (locale === "ru" && exchangeRate != null) {
    total = Math.round(total * exchangeRate);
  }

  const payment = await PaymentService.createCheckoutSession({
    courseName,
    amount: String(total),
    email,
  });

  return {
    redirectUrl: payment.redirectUrl,
    total,
    items,
  };
}
