"use client"
import { useRouter } from "next/router"
import { cardApi, useGetCardsQuery } from "@/services/card"
import Link from "next/link"

export type Slug = string
const CardsSlug = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, error, isLoading } = useGetCardsQuery(slug as Slug)

  console.log("data", data, error, isLoading)
  return (
    <div>
      <h1>{slug}</h1>
      <div className="grid grid-cols-3 gap-2 my-4">
        {isLoading && <p>Loading...</p>}
        {data &&
          data.map((card) => (
            <div
              key={card.id}
              className="bg-red-50 text-black text-center p-4 rounded-lg hover:bg-slate-50"
            >
              {/* <Link href={`/card/${card.slug}`}><h2>{card.name}</h2></Link> */}
              <Link
                href={{
                  pathname: `/card/[slug]`,
                  query: { slug: card.slug, id: card.cards },
                }} as = {`/card/${card.cards}/${card.slug}`}
              >
               {card.name}
              </Link>

              
            </div>
          ))}
      </div>
    </div>
  )
}

export default CardsSlug
