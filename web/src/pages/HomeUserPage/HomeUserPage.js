import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'
import ButtonIcon from "../../components/ButtonIcon"
import { ReactComponent as PhoneIcon } from '../../assets/images/Phone.svg';
import InsurrancePackageList from "../../components/InsurrancePackageList"
import NavigationBar from "../../components/NavigationBar"


const HomeUserPageStyle = styled.div`
padding: 24px 0 0;
`

const AgentHeadStyle= styled.div`
    padding: 0 24px;
    display: flex;
    .bl {
      width: 50%;
      &.meta {
        width: 65%;
        .agency {
          display: flex;
          align-items: center;
        }
        .phone {
          font-weight: bold;
          font-size: 22px;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          padding-left: 12px;
          text-overflow: ellipsis;
          @media (max-width: 320px){
            font-size: 18px;
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

const HomeUserPage = () => {
  return (
    <div className="mobile">
      <HomeUserPageStyle >
          <AgentHeadStyle>
            <div className="bl blLeft meta">
              <div className="agency">
                <PhoneIcon />
                <span className="phone">0968766433</span>
              </div>

            </div>
            <div className="bl blRight">
                <div className="account">
                  <Link to={""}>
                    <ButtonIcon btnText="Đăng xuất" size="sm" ButtonUrl="src/assets/images/User.svg"/>
                  </Link>
                </div>

            </div>
        </AgentHeadStyle>
        <InsurrancePackageList size="md"/>
      </HomeUserPageStyle>
      <NavigationBar status="homepage"/>
    </div>
  )
}

export default HomeUserPage
