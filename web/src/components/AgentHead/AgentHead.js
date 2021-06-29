
import ButtonIcon from "../../components/ButtonIcon"
import styled from 'styled-components'
import { Link } from "@redwoodjs/router"
const AgentHeadStyle= styled.div`
    padding: 0 24px;
    display: flex;
    .bl {
      width: 50%;
      &.meta {
        width: 65%;
        .agency {
          font-weight: bold;
          font-size: 22px;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          @media (max-width: 320px){
            font-size: 18px;
          }
        }
        .agencyCode {
          color: #C9D8F5;
          font-size: 14px;
          margin-top: 8px;
          @media (max-width: 320px){
            font-size: 12px;
          }
          span {
            display: block;
            color: white;
            font-size: 18px;
            font-weight: 500;
            @media (max-width: 320px){
              font-size: 16px;
            }
          }
        }
      }
      &.blRight {
        text-align: right;
        width: 35%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-wrap: wrap;
        .revenue {
          color: #C9D8F5;
          font-size: 14px;
          margin-top: 12px;
          width: 100%;
          @media (max-width: 320px){
            font-size: 12px;
          }
          span {
            display: block;
            color: white;
            font-size: 18px;
            font-weight: 500;
            @media (max-width: 320px){
              font-size: 16px;
            }
          }
        }
      }
    }
`
const AgentHead = ({btnText, linkUrl}) => {
  return (
    <AgentHeadStyle>
        <div className="bl blLeft meta">
          <div className="agency">
             <span className="agencyName">NGUYỄN TRI PHƯƠNG NAM</span>
          </div>
          <div className="agencyCode">Mã đại lý: <span>2560</span></div>
        </div>
        <div className="bl blRight">
            <div className="account">
              <Link to={`${linkUrl}`}>
               <ButtonIcon btnText={`${btnText}`} size="sm" ButtonUrl="src/assets/images/User.svg"/>
              </Link>
            </div>
            <div className="revenue">
                Doanh thu tháng<span>25.550.00</span>
            </div>
        </div>
    </AgentHeadStyle>
  )
}

export default AgentHead
