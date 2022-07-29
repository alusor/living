import Head from 'next/head'
import { Text, Input, FormControl, Slider, Select, Button } from '@geist-ui/core'
import dbConnect from '../../lib/db'
import Agreement from '../../models/agreement'
import Header from '../../src/components/header'
import styled from 'styled-components'
import Image from 'next/image'

const PageContainer = styled.main`
  padding: 1rem 3rem;
  max-width: 1120px;
  display: grid;
  align-items: center;
  margin: 0 auto;
  grid-row-gap: 8px;
  & .recurrence {
    justify-self: center;
  }
`

export default function NewAgreement({ agreements = [] }) {
  return (
    <div >
      <Head>
        <title>Even Living - Less charge for the one in charge</title>
        <meta name="description" content="Even Living - Less charge for the one in charge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        Depparment 007
      </Header>
      <PageContainer>
        <Text b p>Name of the agreement</Text>
        <Input placeholder='Doing the dishes' width="100%"></Input>
        <Text b p>{`Who's responsible?`}</Text>
        <Input placeholder='Eduardo' width="100%"></Input>
        <Text b p>Importance</Text>
        <Text p>How important is it to you, <b>guys</b>, that this task gets done? Have a conversation! you both decide this one <b>together.</b></Text>
        <Image src="/Discuss.svg" width="512" height="246" alt=""></Image>
        <Slider initialValue={25}></Slider>
        <Text b p>Effort</Text>
        <Text p>{'This one is for {responsible}, now, how much effort does this chore requires for you?'}</Text>
        <Image src="/thinkdiscuss.svg" width="512" height="246" alt=""></Image>
        <Slider initialValue={25}></Slider>
        <Text b p>Check every...</Text>
        <Select className='recurrence' placeholder='day' width="90%">
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