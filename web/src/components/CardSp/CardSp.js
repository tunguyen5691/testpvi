import styled from 'styled-components'

const CardSpStyle = styled.div`
  background-color: white;
  border-radius:  ${({ theme: { borderRadius } }) => borderRadius.lg};
  display: flex;
  padding: 28px 0;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.025);
  .icon {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 320px) {
        width: 70px;
    }
    img {
      width: 45px;
      margin: auto;
      display: block;
      @media (max-width: 320px) {
        width: 35px;
      }
    }
  }
  .meta {
    width: calc(100% - 100px);
    @media (max-width: 320px) {
      width: calc(100% - 70px);
    }
    span {
      font-size: 14px;
      color:  ${({ theme: { colors } }) => colors.placeholder};
      display: block;
      width: 100%;
    }
    .value {
      font-size: 18px;
      font-weight: 500;
      color:  ${({ theme: { colors } }) => colors.secondary};
      &.black {
        color: black;
      }
    }
  }
`
const CardSp = ({title, value, iconUrl, color}) => {
  return (
    <CardSpStyle>
        <div className="icon">
            <img src={`${iconUrl}`} />
        </div>
        <div className="meta">
        <span>{ title}</span>
        <div className={`value ${color}`}>{ value}</div>
        </div>
    </CardSpStyle>
  )
}

export default CardSp
