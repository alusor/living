import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../src/components/header'
import Link from 'next/link'
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
    padding: 0rem 2rem
  }
`

const ChoreCardContainer = styled.div`
  border: solid 5px #D5D5D5;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  & > .add-button {
    width: 64px;
    height: 64px;
    background-color: #F7F7F7;
    border: solid #B7B7B7 1px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #C6C6C6;
    font-size: 2rem;
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
  & > .plus {
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

const ChoreCard = ({title = ''}) => (
  <ChoreCardContainer>
    <div>New chore or task</div>
    <div className='add-button' >+</div>
  </ChoreCardContainer>
)

export default function Home () {
 return (
  <HomeContainer>
    <Header>EVEN LIVING</Header>
    <section className='page-content'>
      <ChoreCard></ChoreCard>
      <p className='empty-state'>This is your agreement list: Click on the button <b>Add</b> below to add a new agreement.</p>  
    </section>
    <footer>
      <FooterAction>
       <Link href='/agreements/new'>
        <button className="plus">+</button>
       </Link>
        New agreement
      </FooterAction>
    </footer>
  </HomeContainer>
 )
}