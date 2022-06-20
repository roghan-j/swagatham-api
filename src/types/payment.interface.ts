export interface PaymentInterface {
    id: string,
    entity: string,
    amount: number,
    amount_paid: string,
    amount_due: number,
    currency: string,
    receipt: string,
    offer_id: null,
    status: string,
    attempts: number,
    notes: string[],
    created_at: number
}