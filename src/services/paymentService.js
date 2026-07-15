const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const PaymentService = {
  async processPayment({ amount, cardNumber, expiry, cvc }) {
    await delay(1300);

    if (!cardNumber || !expiry || !cvc) {
      throw new Error('Payment details are incomplete.');
    }

    if (cardNumber.length < 12 || cvc.length < 3) {
      throw new Error('Payment information is invalid.');
    }

    return {
      success: true,
      transactionId: `TX-${Date.now()}`,
      charged: amount,
    };
  },
};
