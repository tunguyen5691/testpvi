import styled from 'styled-components'

const PaymentItemStyle = styled.div`
.paymentItem {
  position: relative;
  &:before {
    width: 28px;
    height 28px;
    display: block;
    content: "";
    background: url('src/assets/images/checkgreen.svg') center no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(30%,-30%);
    z-index: 4;
    display: none;
  }
  &.active {
    &:before {
      display: block;
    }
    .wrap {
      border :1px solid #19B9FB;
      .icon {
        background: ${({ theme: { colors } }) => colors.gradient};
      }
    }
  }
.wrap {
  background-color: white;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.xlg};
  margin: auto;
  border: 1px solid white;
  transition: all ease 0.3s;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 70%;
    transition: all ease 0.3s;
  }
}
span {
  font-size:12px;
  font-weight: 500;
  color: white;
  display: block;
  text-align: center;
  margin-top: 8px;
  color : ${({ theme: { colors } }) => colors.base};
}
}
`

const PaymentItem = ({iconUrl,text ,status}) => {
  return (
    <PaymentItemStyle>
      <div className={`paymentItem ${status}` } >
        <div className="wrap aspectRatio aspectRatio--100" >
            <img src={`${iconUrl}`} />
        </div>
        <span>{text}</span>
      </div>
    </PaymentItemStyle>
  )
}

export default PaymentItem
