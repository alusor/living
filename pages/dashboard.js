import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../src/components/header'
import Link from 'next/link'
import Image from 'next/image'
import ChoreCard from '../src/components/chore-card'
import Router from 'next/router'
import Agreement from '../models/agreement'
import dbConnect from '../lib/db'


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
    & .graph {
      font-size: 32px;
      font-weight: bold;
    }
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



export default function Home ({ agreements = [] }) {
  console.log(agreements)
  const renderAgreements = () => {
    return agreements.map((agreement, index) => {
      return (
        <ChoreCard
          key={agreement.responsible + index}
          name={agreement.responsible}
          picture={agreement.responsible === 'Clo' ? '/f.svg' : '/m.svg'}
          agreement={agreement.title}
          recurrence={`Importance ${agreement.importance} and ${agreement.effort} effort.`}
        />
      )
    })
  }
 return (
  <HomeContainer>
    <Header>EVEN LIVING</Header>
    <section className='page-content'>
      <div className='agreement-list'>
        <Link href='/even'>
          <a className='graph'>View graph</a>
        </Link>
        {renderAgreements()}
      </div>
      <p className='empty-state'>This is your agreement list: Click on the button <b>Add</b> below to add a new agreement.</p>  
    </section>
    <footer>
      <FooterAction>
       <Link href='/agreements/new'>
        <a className='plus-link'>
        <div className="plus">
          <Image src='/plus.svg' width='41' height='41'/>
        </div>
        New agreement
        </a>
       </Link>
      </FooterAction>
    </footer>
  </HomeContainer>
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