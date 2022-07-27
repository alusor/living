import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text } from '@geist-ui/core'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Even Living</title>
        <meta name="description" content="Startup Bus - Even Living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text p>Hola</Text>
      </main>
    </div>
  )
}
