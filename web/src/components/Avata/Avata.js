import styled from 'styled-components'
const AvataStyle = styled.div`
  .avata {
    width: 48px;
    span {
      border-radius: 100%;
      overflow: hidden;
      display: block;
    }
  }
`

const Avata = ({Background}) => {
  return (
    <AvataStyle>
      <div className="avata">
          <span className="aspectRatio aspectRatio--100" style={{ backgroundImage: `url(${Background})`}}></span>
      </div>
    </AvataStyle>

  )
}

export default Avata
