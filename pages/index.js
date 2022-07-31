import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../src/components/header'
import { Input, Button } from '@geist-ui/core'
import createUSer from '../src/service/create-user'
import Router from 'next/router'
import Lottie from 'react-lottie';
import * as animationData from '../models/even.json'
import cookieCutter from 'cookie-cutter'


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
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
  }

  & .agreement-list {
    display: grid;
    grid-gap: 1rem;
    margin 0 18px;
    align-self: center;
    justify-content: center;
}
`

export default function Home () {
  const [user, setUser] = useState('')
  const onSubmit = async () => {
    const payload = { username: user }
    const response = await createUSer(payload)
    console.log(response)
    localStorage.setItem('user', response.user.username)
    localStorage.setItem('id', response.user._id)
    cookieCutter.set('user', response.user.username)
    cookieCutter.set('id', response.user._id)

    Router.push('/add-home')
  }
  
 return (
  <HomeContainer>
    <Header>EVEN LIVING</Header>
    <section className='page-content'>
    <Input value={user} onChange={e => setUser(e.target.value)} width="100%" placeholder="username">Username</Input>
    <Button onClick={() => onSubmit()} classNametype='success'>Start with username</Button>
    </section>
    <footer>
    
    </footer>
  </HomeContainer>
 )
}