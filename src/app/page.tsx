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
  // let res_random= await fetch("http://localhost:3000/api/hello2345")
  // console.log(await res_random.text())
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Main page works! 
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

