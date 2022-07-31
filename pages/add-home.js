import { useEffect, useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Header from '../src/components/header'
import { Input, Button, Spacer } from '@geist-ui/core'
import { getHomes, createHome, updateHome } from '../src/service/home'

const HomeContainer = styled.main`
  padding: 0rem 0rem;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  & > .empty-state {
    color: #5D6768;
  }
  & > .page-content {
    padding: 2rem 2rem;
    overflow: auto;
    
  }

  & .agreement-list {
    display: grid;
    grid-gap: 1rem;
    margin 0 18px;
    align-self: center;
    justify-content: center;
}
`

const FooterAction = styled.div`
  background-color: #374487;
  color: white;
  min-height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem 1.5rem 0rem 0rem;
  padding: 1rem;
  & .plus-link {
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
  }
  & .plus {
    background-color: #FFEF14;
    border: none;
    width: 82px;
    height: 82px;
    border-radius: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  padding-bottom: 64px;
`



export default function Homes ({invite}) {
  const [homes, setHomes] = useState([])
  const requestHomes = async () => {
    const id = await localStorage.getItem('id')
    const response = await getHomes({ id })
    console.log(response.response)
    setHomes(response?.response ?? [])
  }
  const onSubmitNewHome = async () => {
    const id = await localStorage.getItem('id')
    const payload = {
      homeName: 'Even living',
      owner: id,
    }
    const response = await createHome(payload)
    await localStorage.setItem('home',response.newHome._id)
    Router.push('/dashboard')

  }
  const onSubmitInviteHome = async () => {
    const id = await localStorage.getItem('id')
    const payload = {
      invite: invite,
      member: id,
    }
    const response = await updateHome(payload)
    await localStorage.setItem('home',response.currentHome._id)
    Router.push('/dashboard')
  }
  useEffect(() =>{
    requestHomes()
  }, [])
  return (
  <HomeContainer>
    <Header>EVEN LIVING</Header>
    <section className='page-content'>
      <Input placeholder='My deparment' width='100%'>Set a name for your new home:</Input>
      <Spacer h={1}/>
      <Button onClick={() => onSubmitNewHome()} type="success">Start creating agreements</Button>
      <Spacer h={2}/>
      <Input value={invite} placeholder='Invite code' width='100%'>Invite code:</Input>
      <Spacer h={1}/>
      <Button onClick={() => onSubmitInviteHome()} type="success">Join the room</Button>
    </section>
    <footer>
      
    </footer>
  </HomeContainer>
  )
}

export async function getServerSideProps (context) {
  const { invite } = context.query
  return {
    props: {
      invite: invite || ''
    }
  }
}