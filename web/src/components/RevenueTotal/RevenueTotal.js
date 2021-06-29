import { ReactComponent as MoneyIcon } from '../../assets/images/Money2.svg';
import styled from 'styled-components'

const RevenueTotalStyle = styled.div`
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
    svg {
      width:45px;
      margin: auto;
      display: block;
    }
  }
  .revenueInfo {
    width: calc(100% - 100px);
    @media (max-width: 320px) {
      width: calc(100% - 70px);
  }
    span {
      font-size: 14px;
      font-weight: 800;
      color:  ${({ theme: { colors } }) => colors.secondary};
      font-family: 'Montserrat';
    }
    .amount {
      font-size: 22px;
      font-weight: bold;
      color:  ${({ theme: { colors } }) => colors.primary};
    }
  }
`

const RevenueTotal = () => {
  return (
    <RevenueTotalStyle>
      <div className="icon">
          <MoneyIcon/>
      </div>
      <div className="revenueInfo">
        <span>TỔNG DOANH THU</span>
        <div className="amount">100.000.000 VNĐ</div>
      </div>
    </RevenueTotalStyle>
  )
}

export default RevenueTotal
