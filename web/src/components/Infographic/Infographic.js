import styled from 'styled-components'

const InfographicStyle = styled.div`
  text-align: center;
  img {
    width: 100%;
    display: block;
    max-width: 90px;
    margin: auto;
  }
`
const Infographic = ({imgUrl}) => {
  return (
    <InfographicStyle>
        <img src={`${imgUrl}`} />
    </InfographicStyle>
  )
}

export default Infographic
