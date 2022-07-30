import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

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

const FooterActionBottom = ({ onClick }) => {
  return (
    <FooterAction>
        <a className='plus-link' onClick={onClick} >
        <div className="plus">
          <Image src='/plus.svg' width='41' height='41'/>
        </div>
        New agreement
        </a>
      </FooterAction>
  )
}

export default FooterActionBottom
