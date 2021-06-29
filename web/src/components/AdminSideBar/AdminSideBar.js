import { NavLink, routes } from '@redwoodjs/router'

import {ReactComponent as SidebarIcon} from '../../assets/images/slidebarIcon.svg';
import SidebarItem from "../../components/SidebarItem"
import styled from 'styled-components'

const AdminSideBarStyle = styled.div`
background: linear-gradient(156.46deg, #3A5BA3 0%, #1F4D9C 80.89%);
  width: 230px;
  padding: 24px 0;
  position: relative;
  min-height: calc(100vh - 96px);
        transition: all ease 0.3s;
  z-index: 23;
  @media (max-width: 1023px){
    position: fixed;
    top: 70px;
    left: -230px;
    z-index: 222;
    height: calc(100vh - 60px);
    transition: all ease 0.3s;
  }
  .label {
    font-size: 14px;
    color: white;
    padding: 0 24px 24px;
    white-space: nowrap;
  }
  .slideBarIcon {
    position: absolute;
    top: -12px ;
    right: 0;
    width: 48px;
    height: 48px;
    transform: translateX(50%);
    z-index: 4;
    padding: 8px;
    border-radius: 100%;
    background-color: #F5F6FA;
    transition: all ease 0.3s;
    @media (max-width: 1023px) {
        transform: translateX(calc(100% + 16px));
        padding: 0px;
        top: -10px;
        width: 40px;
        height: 40px;
        box-shadow: 0px 1px 0px #E0E0E0;
    }
    &:hover {
        padding: 0px;

    }
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 100%;
        height: 100%;

    }
    &:hover {
        cursor: pointer;
    }
  }
  .box {
    ul {
      a {
        transition: all ease 0.3s;
        display: block;

        &:hover,&.active {
          cursor: pointer;
          background-color: rgba(255,255,255,.5);
        }
      }
    }
  }
`


const AdminSideBar = ({onClick}) => {
  return (
    <AdminSideBarStyle className="sideBarWrap">
      <div className="sidebar">
        <div className="label">Quản lý</div>
        <div className="slideBarIcon"  onClick={onClick} >
          <div className="wrap">
            <SidebarIcon/>
          </div>
        </div>
        <div className="box">
          <ul>
            <NavLink activeClassName="active" to={routes.adminAgencyList()}>
                <SidebarItem iconURl="src/assets/images/team2.svg"  itemTitle="Danh sách đại lý"/>
              </NavLink>
              <NavLink activeClassName="active" to={routes.adminOrderList()}>
                <SidebarItem iconURl="src/assets/images/FileWhite.svg"  itemTitle="Đơn hàng Đại lý / CTV"/>
              </NavLink>
              <NavLink activeClassName="active" to={routes.adminOrderlistPersonal()}>
                <SidebarItem iconURl="src/assets/images/FileWhite.svg"  itemTitle="Đơn hàng cá nhân"/>
            </NavLink>
            <NavLink activeClassName="active" to={routes.adminNotification()}>
                <SidebarItem iconURl="src/assets/images/FileWhite.svg"  itemTitle="Quản lý thông báo"/>
              </NavLink>
          </ul>
        </div>
      </div>

    </AdminSideBarStyle>
  )
}

export default AdminSideBar
