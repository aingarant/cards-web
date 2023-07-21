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
  purchaseInterestRate?: number
  cashAdvanceInterestRate?: number
  slug?: string
}