import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[file,setFile]=useState();
  const handleFile=(e)=>{
    setFile(e.target.files[0]);
  }
  return (
    <div>
      
    </div>
  )
}