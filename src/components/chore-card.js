import styled from 'styled-components'
import Image from 'next/image'

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

const ChoreCard = ({picture, name, agreement, recurrence}) => (
  <ChoreCardContainer>
    <div>
      <div>
        <Image src={picture} width={64} height={64}></Image>
      </div>
    </div>
  </ChoreCardContainer>
)

export default ChoreCard;
