import styled from 'styled-components'
import Image from 'next/image'

const ChoreCardContainer = styled.div`
  border: solid 5px #D5D5D5;
  border-radius: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  & .content {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;
  }
  & .name {
    color: #CE3186;
    text-align: center;
    font-weight: bold;
    margin: 0;  
  }
`

const ChoreCard = ({picture, name, agreement, recurrence}) => (
  <ChoreCardContainer>
    <div className='content'>
      <div>
        <Image src={picture} width={64} height={64}></Image>
        <p className='name'>{name}</p>
      </div>
      <div>
        <p>{agreement}</p>
        <p>{recurrence}</p>
      </div>
    </div>
  </ChoreCardContainer>
)

export default ChoreCard;
