'use client';
import Image from 'next/image';
import Head from "next/head";
import styles from './StartGame.module.css';

export default function StartGameComponent() {
    return (
        <>
            <Head>
                <title>Start Lemonade Game</title>
            </Head>
            <div className={styles.container}>
                <h1>Start New Game</h1>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/lemonade-icon.jpg" alt={"lemonade"} width={400} height={200}/>
                <input type="text"></input>
                <input type="number"></input>
                <button>Mein Button</button>
            </div>
        </>
    )
}