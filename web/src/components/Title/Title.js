import styled from 'styled-components'
const TitleStyle = styled.div`
    padding: 24px 0;
    text-align: center;
    &.capital {
      span {
        font-weight: bold;
        font-size: 20px;
        font-family: 'Montserrat';
      }
    }
    span {
      color: white;
      font-family: 'Roboto';
      font-weight: 500;
    }
`

const Title = ({titleText , titleType}) => {
  return (
    <TitleStyle className={`${titleType}`}>
      <span>{ titleText}</span>
    </TitleStyle>
  )
}

export default Title
