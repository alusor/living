import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../src/components/header'
import Link from 'next/link'
import Image from 'next/image'
import ChoreCard from '../src/components/chore-card';
import { Input } from '@geist-ui/core'

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
    padding: 0rem 2rem;
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



export default function Home () {
 return (
  <HomeContainer>
    <Header>EVEN LIVING</Header>
    <section className='page-content'>

    </section>
    <footer>
     
    </footer>
  </HomeContainer>
 )
}