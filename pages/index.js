import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text } from '@geist-ui/core'

import clientPromise from '../lib/db'

export default function Home({ isConnected }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Even Living</title>
        <meta name="description" content="Startup Bus - Even Living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text h1>{ isConnected.toString() }</Text>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise

    return {
      props: {
        isConnected: true
      }
    }
  } catch (e) {
    console.error(e)
    return {
      props: {
        isConnected: false
      }
    }
  }
}