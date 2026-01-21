export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
export const FRONT_END_BASE_URL =
  process.env.FRONT_END_BASE_URL || "https://localhost:5173";
export const ApiToken = process.env.API_TOKEN || "";
export const WebhookSecret = process.env.WEBHOOK_TOKEN || "";

export const PaymentBaseUrl = "https://payments.juspay.in/payment-page/order/";

export enum PaymentStatus {
  Confirmed = "confirmed",
  Failed = "failed",
  PendingPayment = "pending_payment",
}

export enum Tickets {
  Test = 0,
}

export const EventMappings: Record<number, string> = {
  [Tickets.Test]: "test",
};

export const TicketPriceToIdMap = {
  19: 0,
};

export const EventTickets = Object.values(TicketPriceToIdMap);

export const EventIdToPriceMap = {
  2: 19,
};
