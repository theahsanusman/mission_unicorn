import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
  <Link href="/items">Items</Link>
 </>
  )
}
