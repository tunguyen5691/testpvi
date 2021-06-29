import { Link, routes } from '@redwoodjs/router'

import AgencyIcon from "../../components/AgencyIcon"
import HistoryIcon from "../../components/HistoryIcon"
import HomeIcon from "../../components/HomeIcon"
import NotificationComp from "../../components/NotificationComp"
import SupportIcon from "../../components/SupportIcon"
import styled from 'styled-components'

const NavigationBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 64px;
  position: fixed;
  max-width: 420px;
  bottom: 0;
  left: 50%;
  transform : translateX(-50%);
  width: 100%;
  z-index: 2;
  border-top: 1px solid #E0E0E0;
  &.homepage {
    .item:nth-child(1)  {
      .iconBar {
        background: ${({ theme: { colors } }) => colors.gradient};
      }
      span {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
  &.history {
    .item:nth-child(2)  {
      .iconBar {
        background: ${({ theme: { colors } }) => colors.gradient};
      }
      span {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
  &.support {
    .item:nth-child(3)  {
      .iconBar {
        background: ${({ theme: { colors } }) => colors.gradient};
      }
      span {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
  &.notification {
    .item:nth-child(4)  {
      .iconBar {
        background: ${({ theme: { colors } }) => colors.gradient};
      }
      span {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
  .item {
    width: calc(25% - 5px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    &.hasNoti {
      &:before {
        width:8px;
        height: 8px;
        display: block;
        content: "";
        display: block;
        background: ${({ theme: { colors } }) => colors.gradient};
        border-radius: 100%;
        position: absolute;
        top:2px;
        right: 50%;
        transform: translate(150%,0%);
        z-index: 2;
      }
    }
    .iconBar {
      width: 25px !important;
      height: 25px !important;
      -webkit-mask-size: 100%;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
      background: ${({ theme: { colors } }) => colors.placeholder};
    }
    span {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme: { colors } }) => colors.placeholder};
      padding-top: 2px;
    }
  }
`

const NavigationBar = ({ status}) => {

  return (
    <NavigationBarStyle className={`${status}`}>
        <Link to={"./home"} className="item ">
            <div className="iconBar "
                style={{ WebkitMaskImage : "url(src/assets/images/homegrey.svg)"}}>
              </div>
            <span >Trang chủ</span>
        </Link>
        <Link to={"/history"} className="item ">
            <div className="iconBar "
                style={{ WebkitMaskImage : "url(src/assets/images/History.svg)"}}>
              </div>
            <span >Lịch sử</span>
        </Link>
        <Link to={"/support"} className="item ">
            <div className="iconBar "
                style={{ WebkitMaskImage : "url(src/assets/images/Support.svg)"}}>
              </div>
            <span >Hỗ trợ</span>
        </Link>
        <Link to={"/notification"} className="item hasNoti">
             <div className="iconBar "
                style={{ WebkitMaskImage : "url(src/assets/images/Notification.svg)"}}>
              </div>
            <span >Thông báo</span>
        </Link>
    </NavigationBarStyle>
  )
}

export default NavigationBar
