"use client"
import { useRouter } from "next/router"
import { useGetCardQuery } from "@/services/card"
import Link from "next/link"

export type Slug = string
const CardsSlug = () => {
  const router = useRouter()
  const { slug } = router.query
  const {id}  = router.query


  const { data, error, isLoading } = useGetCardQuery(slug as Slug)

  console.log("data", data, error, isLoading)
  return (
    <div>
      <h1>{slug}</h1>
      <div className="bg-purple-400">
        {isLoading && <p>Loading...</p>}
        {data && (
          <div
            key={data.id}
            className="bg-red-50 text-black text-center p-4 rounded-lg hover:bg-slate-50"
          >
            <h1>{data.name} - {id}</h1>
            <h3>Fee: $
              {data.annual_fee
                ? `${data.annual_fee}/yr`
                : `${data.monthly_fee}/mo`}
            </h3>

            <h3>Purchase Interest:
              {data.purchase_interest} %
            </h3>

            <h3>Cash Advance Interest:
              {data.advance_interest} %
            </h3>
            <p></p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardsSlug
