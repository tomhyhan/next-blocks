"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Suspense, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: files => {
      setFiles(files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  })


  // let [image, setImage] = useState(null);

  // const handleChange = (event) => {
  //   console.log(event.target.files);
  //   setImage(URL.createObjectURL(event.target.files[0]));
  // }
  return (
    <main className={styles.main}>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
      {files.map(file => <img key={file.name} src={file.preview} />)}
    </main>
  )
}
