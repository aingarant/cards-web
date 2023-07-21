import React from "react"
import Link from "next/link"
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Card Search</h1>

          <ul className="flex justify-between gap-2">
            <li>
              <Link href="/cards">Cards</Link>
            </li>

            <li>
              <Link href="/banks">Banks</Link>
            </li>

            <li>
              <Link href="/stores">Stores</Link>
            </li>

            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
     
      </div>
      {children}
    </div>
  )
}

export default Layout
