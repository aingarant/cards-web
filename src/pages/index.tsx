import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bank } from "@/types"

import { useGetBanksQuery } from "@/services/bank"
import BankItem from "@/components/bank/BankItem"

const Home = () => {
  const { data, error, isLoading } = useGetBanksQuery()

  return (
    <div>

      {/* // Search Bar */}
      <div className="flex justify-center my-4">
        <div className="w-1/2">
          <input
            type="text"
            className="w-full border-2 border-gray-300 bg-white  text-red-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 my-4 text-center font-extrabold text-2xl">
        {isLoading && <p>Loading...</p>}
        {data && data.map((bank: Bank) => <BankItem key={bank.id} {...bank} />)}
      </div>
    </div>
  )
}

export default Home
