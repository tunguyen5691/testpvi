import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'
import AgentHead from "../../components/AgentHead"
import React from 'react';

import NavigationBar from "../../components/NavigationBar"
import InsurranceItem from "../../components/InsurranceItem"


const HomeStyle = styled.div`
  padding: 24px 0 56px;
  .navigation {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    .MuiBottomNavigation-root {
      height: 64px;
      width: 100%;
      &.Mui-selected {
        svg {
          fill:${({ theme: { colors } }) => colors.primary};
        }
      }
      .MuiButtonBase-root {
        padding: 12px 12px;
        &.Mui-selected {
          svg, path {
            fill:${({ theme: { colors } }) => colors.primary};
          }
        }
      }
      .MuiBottomNavigationAction-wrapper {

        .MuiBottomNavigationAction-label {
          font-size: 12px;
          font-weight: bold;
          color:  ${({ theme: { colors } }) => colors.placeholder};
          padding-top: 4px;
          &.Mui-selected {
            color:  ${({ theme: { colors } }) => colors.primary};
          }
        }
      }
    }
  }
  .insurranceInfo {
    .iconlist {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
  }
  .accountList {
    background-color: #F0F2F6;
    padding: 32px 24px 132px;
    margin-top: 24px;
    height: calc(100vh - 300px);
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
    @media (max-width: 320px){
      padding: 32px 24px 100px;

    }
    .item {
      margin-bottom: 16px;
      border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
      overflow: hidden;
      a {
        font-weight: 500;
        color:  ${({ theme: { colors } }) => colors.base};
        padding: 16px;
        display: block;
        background-color: white;
        position: relative;
        transition: all ease 0.3s;
        &:hover, &:focus {
          opacity: .7;
        }
        &:before {
          width: 24px;
          height: 24px;
          display: block;
          content:"";
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          background: url('src/assets/images/ChevronRightgrey.svg') center no-repeat;
          background-size: 100%;
        }

      }
    }
  }
`



const AccountPage = () => {

  return (
    <div className="mobile">
    <HomeStyle>
        <AgentHead btnText="Đăng xuất" linkUrl="./login" />
        <div className="insurranceInfo">
          <div className="iconlist">
            <Link to={"./revenue"}>
              < InsurranceItem  iconUrl="src/assets/images/Money.svg" text="Doanh thu"/>
            </Link>
            <Link to={"./partner"}>
            <InsurranceItem  iconUrl="src/assets/images/Team.svg" text="Danh sách CTV"/>
            </Link>
            <Link to={"./qr-code"}>
            <InsurranceItem  iconUrl="src/assets/images/QR-Code.svg" text="QR Code"/>
            </Link>
          </div>
        <div className="accountList">
            <div className="item box-shadow2">
                <Link to={"/history"}>
                  Lịch sử giao dịch
                </Link>
            </div>
            <div className="item box-shadow2">
                <Link to={"/agency-profile"}>
                  Hồ sơ đại lý
                </Link>
            </div>
            <div className="item box-shadow2">
                <Link to={"./change-password"}>
                  Đổi mật khẩu
                </Link>
            </div>
        </div>
      </div>

    </HomeStyle>
    <NavigationBar />
    </div>
  )
}

export default AccountPage
