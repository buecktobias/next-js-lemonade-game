import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavigationBar} from "@/pages/NavigationBar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar></NavigationBar>
    </main>
  )
}
