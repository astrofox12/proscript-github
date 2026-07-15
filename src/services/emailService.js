const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

export const EmailService = {
  async sendOrderEmail({ to, orderSummary }) {
    await delay(1100);

    if (!to || !isValidEmail(to)) {
      throw new Error('Email address is invalid.');
    }

    return {
      success: true,
      deliveredTo: to,
      summary: orderSummary,
    };
  },
};
