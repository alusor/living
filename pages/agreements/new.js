import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Text, Input, FormControl, Slider, Select, Button } from '@geist-ui/core'
import Header from '../../src/components/header'
import styled from 'styled-components'
import Image from 'next/image'
import FooterAction from '../../src/components/footer-action'
import createAgreement from '../../src/service/create-agreement'
import { useToasts } from '@geist-ui/core'
import Router from 'next/router'

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

export default function NewAgreement() {
  const [title, setTitle] = useState('')
  const [responsible, setResponsible] = useState('')
  const [importance, setImportance] = useState(25)
  const [effort, setEffort] = useState(25)
  const { setToast } = useToasts()
  const onSubmit = async () => {
    const home = await localStorage.getItem('home')
    const payload = {
      responsible,
      importance,
      effort,
      title,
      home
    }
    const response = await createAgreement(payload)
    setToast({ text: 'New agreement added.', delay: 2000 })
    setTimeout(() => Router.back(), 2000);
  }
  return (
    <div >
      <Head>
        <title>Even Living - Less charge for the one in charge</title>
        <meta name="description" content="Even Living - Less charge for the one in charge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        Apartment 007
      </Header>
      <PageContainer>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Doing the dishes' width="100%">Name of the agreement</Input>
        <Input value={responsible} onChange={(e) => setResponsible(e.target.value)} placeholder='Eduardo' width="100%">{`Who's responsible?`}</Input>
        <Text b p>Importance</Text>
        <Text p>How important is it to you, <b>guys</b>, that this task gets done? Have a conversation! you both decide this one <b>together.</b></Text>
        <Image src="/Discuss.svg" width="512" height="128" alt=""></Image>
        <Slider value={importance} onChange={(value) => setImportance(value)} initialValue={25}></Slider>
        <Text b p>Effort</Text>
        <Text p>{'This one is for {responsible}, now, how much effort does this chore requires for you?'}</Text>
        <Image src="/thinkdiscuss.svg" width="512" height="128" alt=""></Image>
        <Slider value={effort} onChange={(value) => setEffort(value)} initialValue={25}></Slider>
      </PageContainer>
      <FooterAction onClick={() => onSubmit()}></FooterAction>
    </div>
  )
}
