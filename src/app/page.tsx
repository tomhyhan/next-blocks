"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useEffect } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

// const url = "http://localhost:3000/api/hello"
const url = "/api/hello"

async function get_hello() {
  const res = await fetch(url)
  const data = await res.text()
  console.log(data)
}

export default function Home() {
  const handleImage = async (event: any) => {
    // event.preventDefault()
    const file = event.target.files[0];
    // let formdata = new FormData();
    // formdata.append("image", file)
    // // formdata.append("name", "name")
    // fetch(url, {
    //   method: "POST",
    //   headers: {"Content-Type": "multipart/form-data"},
    //   body: formdata,
    // })
    const formData = new FormData();
    // formData.append("image", file)
    formData.append("caption", "caption")
    await axios.post("/api/hello", formData, { headers: {'Content-Type': 'multipart/form-data'}})
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('asdf')
    const text = {"text": "Hello!"};
    // fetch(url, {
    //   method: "POST",
    //   headers: {"Content-type": "application/json"},
    //   body: JSON.stringify(text),
    // })

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <input accept='image/*' onChange={handleImage} type="file" />
        <button onClick={handleSubmit} type='button'>submit</button>
      </div>
    </main>
  )
}
