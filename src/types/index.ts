export type Bank = {
  id: number
  name: string
  slug: string
  logo?: string
}

export type Card = {
  id: number
  bankId: number
  name: string
  image?: string
  annualFee?: number
  monthlyFee?: number
  annual_fee?: number
  monthly_fee?: number
  purchase_interest?: number
  cash_advance_interest?: number
  purchaseInterestRate?: number
  advance_interest?: number
  slug?: string
  cards?: number
}