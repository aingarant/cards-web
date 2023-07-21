"use client"
import { useRouter } from "next/router"
import { useGetCardQuery } from "@/services/card"
import Link from "next/link"
import { FaGasPump } from "react-icons/fa";
import {GiForkKnifeSpoon, GiAirplaneDeparture} from "react-icons/gi"
import {FaFileInvoiceDollar} from "react-icons/fa"
import {MdMiscellaneousServices, MdLocalGroceryStore, MdOndemandVideo} from "react-icons/md"
import {TbBrandWalmart} from "react-icons/tb"

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
      <div>
        benefits details
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="p-2 bg-slate-500 text-white">
            <h2>Gas</h2>
            <FaGasPump />
            
            <h3 className="text-4xl font-bold">2%</h3>
          </div>

          <div className="p-2 bg-slate-500 text-white">
            <h1>Dining</h1>
            <GiForkKnifeSpoon />
          </div>

          <div className="p-2 bg-slate-500 text-white">
            <h1>Recurring Bills</h1>
            <FaFileInvoiceDollar />
          </div>

          
          <div className="p-2 bg-slate-500 text-white">
            <h1>Everyhing Else</h1>
            <MdMiscellaneousServices />
          </div>

          <div className="p-2 bg-slate-500 text-white">
            <h1>Travel</h1>
            <GiAirplaneDeparture />
          </div>


          <div className="p-2 bg-slate-500 text-white">
            <h1>Walmart</h1>
            <TbBrandWalmart />
          </div>

  

          <div className="p-2 bg-slate-500 text-white">
            <h1>Grocery</h1>
            <MdLocalGroceryStore />
          </div>

          <div className="p-2 bg-slate-500 text-white">
            <h1>Streaming</h1>
            <MdOndemandVideo />
          </div>



       

        </div>
      </div>
    </div>
  )
}

export default CardsSlug
