import { EmailService } from './emailService.js';
import { PaymentService } from './paymentService.js';

export async function placeOrder({ items, email, paymentInfo }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const payment = await PaymentService.processPayment({
    amount: total,
    cardNumber: paymentInfo.number,
    expiry: paymentInfo.expiry,
    cvc: paymentInfo.cvc,
  });

  const emailResult = await EmailService.sendOrderEmail({
    to: email,
    orderSummary: {
      items: items.map((item) => ({ title: item.title, price: item.price })),
      total,
      transactionId: payment.transactionId,
    },
  });

  return {
    payment,
    email: emailResult,
    total,
    items,
  };
}
