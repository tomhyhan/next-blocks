import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

async function get_res() {
  const res = await fetch("http://localhost:3000/api/sample");
  console.log(res.url)
  const data = await res.json()
  return data
}

export default async function Home() {
  const data = await get_res()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Hello
      </div>
    </main>
  )
}
