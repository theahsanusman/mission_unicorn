import React from 'react'
import Link from "next/link"
export default function Items() {
  return (
    <div>
      <h1>Items</h1>
      <Link href="/items/armani">Armani</Link>
      <br /><Link href="/items/gucci">Gucci</Link>
    </div>
  )
}
