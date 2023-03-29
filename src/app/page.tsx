import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Food from './food'
import { Suspense } from 'react'
import Cache from './cache'

const inter = Inter({ subsets: ['latin'] })

// this one does not work why????
export const revalidate = Infinity 

export default async function Home() {
  
  // console.log(await res.text())
  // let res_hello2 = await fetch("http://localhost:3000/api/hello2")
  // console.log(await res_hello2.text())
  let random = get_random();
  let api = await get_product();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Main page works! 
      {await random}
      <div>
      {api.product}
      </div>
      </div>
      <Suspense fallback={<>Loading in suspense...</>}>
            {/* @ts-expect-error Server Component */}
            <Food></Food>
      </Suspense>
       {/* @ts-expect-error Server Component */}
      <Cache />
    </main>
  )
}

async function get_product() {
  let res= await fetch("http://localhost:3000/api?id=5")
  let data = await res.json()
  return data
}

async function get_random() {
  let res_random= await fetch("http://localhost:3000/api/server")
  let data = await res_random.text()
  return data
}