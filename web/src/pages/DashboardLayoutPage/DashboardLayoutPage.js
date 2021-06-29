import { Link, routes } from '@redwoodjs/router'

import  AdminHeader from "../../components/AdminHeader"
import AdminSideBar from "../../components/AdminSideBar"
import React from 'react';
import styled from 'styled-components'

const DashboardLayoutPageStyle = styled.div`

  .admin-header {
    position: relative;
    z-index: 2322;
    @media (max-width: 1023px) {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  .admin-body {
    display: flex;
    min-height: calc(100vh - 88px);
    background-color: #F5F6FA;

    @media (max-width: 1023px){
      width: 100%;
      margin-top: 70px;
      min-height: calc(100vh - 60px);
      padding-bottom: 48px;
    }
    .contentBox {
      width: calc(100% - 230px);
      padding: 24px 32px;
      transition: all ease 0.3s;
      @media (max-width: 1023px) {
        width: 100%;
        padding: 24px 16px;
      }
    }
    &.minimize {
        .contentBox {
          width: calc(100% - 72px);
          @media (max-width: 1023px){
            width: 100%;
            opacity: .5;
          }
      }
      .label {
        opacity: 0;
        white-space: nowrap;
        @media (max-width: 1023px){
          opacity: 1;
        }
      }
      .sideBarWrap  {
        width: 72px;
        @media (max-width: 1023px){
          width: 230px;
          left: 0;
          .slideBarIcon {
            transform: translateX(50%);
          }
        }
        .meta{
         display: none;
         @media (max-width: 1023px){
           display: block;
         }

        }
      }

    }
  }
`
const DashboardLayoutPage = ({ children }) => {
  const [isActive, setActive] = React.useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <DashboardLayoutPageStyle>
      <div className="admin-header box-shadow2">
        <AdminHeader/>
      </div>
      <div className={`admin-body ${isActive ? "minimize" : ""} `}>
        <AdminSideBar onClick={handleToggle}/>
        <div className="contentBox">
          {children}
        </div>
      </div>
    </DashboardLayoutPageStyle>
  )
}

export default DashboardLayoutPage
