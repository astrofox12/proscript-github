
export const PaymentErrorType = {
  NETWORK: 'NETWORK',
  INVALID_RESPONSE: 'INVALID_RESPONSE',
  SERVER: 'SERVER',
  UNKNOWN: 'UNKNOWN',
};

export class PaymentError extends Error {
  constructor(type, message) {
    super(message);
    this.name = 'PaymentError';
    this.type = type;
  }
}

export const PaymentService = {
  async createCheckoutSession({ courseName, amount, email }) {
    const body = JSON.stringify({ courseName, amount, email });

    let response;

    try {
      response = await fetch(
        `https://checkout.proscriptacademy.com/create-payment`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        }
      );
    } catch (err) {
      throw new PaymentError(
        PaymentErrorType.NETWORK,
        'Network error: unable to reach payment gateway.'
      );
    }

    if (!response.ok) {
      throw new PaymentError(
        PaymentErrorType.SERVER,
        `Server error: payment gateway responded with ${response.status}.`
      );
    }

    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new PaymentError(
        PaymentErrorType.INVALID_RESPONSE,
        'Failed to parse payment gateway response.'
      );
    }

    if (!data.success) {
      throw new PaymentError(
        PaymentErrorType.SERVER,
        'Payment gateway rejected the request.'
      );
    }

    if (!data.redirect) {
      throw new PaymentError(
        PaymentErrorType.INVALID_RESPONSE,
        'Invalid response format: no redirect URL found.'
      );
    }

    return { redirectUrl: data.redirect };
  },
};
