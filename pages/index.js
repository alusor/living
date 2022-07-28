import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text } from '@geist-ui/core'
import dbConnect from '../lib/db'
import Task from '../models/Task'

export default function Home({ tasks = [] }) {
  console.log(tasks)
  return (
    <div className={styles.container}>
      <Head>
        <title>Even Living</title>
        <meta name="description" content="Startup Bus - Even Living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text h1>Hola mundo</Text>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await dbConnect()

    /* find all the data in our database */
    const result = await Task.find({}).lean()

    return {
      props: {
        tasks: JSON.parse(JSON.stringify(result))
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