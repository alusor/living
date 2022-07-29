import Head from 'next/head'
import { Text, Input, FormControl, Slider, Select, Button } from '@geist-ui/core'
import dbConnect from '../../lib/db'
import Agreement from '../../models/agreement'
import Header from '../../src/components/header'
import styled from 'styled-components'


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
        <Text>{`This is where the conversation happens! take into account things that are important to you: effort, pet peeves, it is your life, we are just helping you visualizing it :)`}</Text>
        <Text>Remember: Be cordial</Text>
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