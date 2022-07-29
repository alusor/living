import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Input, FormControl, Slider, Select, Button } from '@geist-ui/core'
import dbConnect from '../lib/db'
import Agreement from '../models/agreement'

import styled from 'styled-components'

const Header = styled.section`
  background-color: #8AA4AA;
  color: white;
  padding: 1rem 2rem;
  margin: 0 auto;

`
const PageContainer = styled.main`
  padding: 1rem 3rem;
  max-width: 1120px;
  display: grid;
  align-items: center;
  margin: 0 auto;
`

export default function Home({ agreements = [] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Even Living</title>
        <meta name="description" content="Startup Bus - Even Living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        AGREEMENT MAKER
      </Header>
      <PageContainer>

        <Text b p>Name of the agreement</Text>
        <Input placeholder='Doing the dishes' width="100%"></Input>
        <Text b p>Who's responsible?</Text>
        <Input placeholder='Eduardo' width="100%"></Input>
        <Text b p>Importance</Text>
        <Text>{`This is where the conversation happens! take into account things that are important to you: effort, pet peeves, it is your life, we are just helping you visualizing it :)`}</Text>
        <Text>Remember: Be cordial</Text>
        <Slider initialValue={25}></Slider>
        <Text b p>Check every...</Text>
        <Select placeholder='day' width="100%">
          <Select.Option value="Diario">Daily</Select.Option>
          <Select.Option value="Weekly">Weekly</Select.Option>
          <Select.Option value="Monthly">Montlhy</Select.Option>
        </Select>
        <Button type='success'>Create agreement</Button>
      </PageContainer>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await dbConnect()

    /* find all the data in our database */
    const result = await Agreement.find({}).lean()

    return {
      props: {
        agreements: JSON.parse(JSON.stringify(result))
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