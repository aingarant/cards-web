import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bank } from "@/types"


const BankItem = (bank: Bank) => {
  return (
    <div className="bg-green-100 p-4 text-black" key={bank.id}>
    <Link href={`/cards/${bank.slug}`}>
      <h2>{bank.name}</h2>
    </Link>
  </div>
  )
}

export default BankItem