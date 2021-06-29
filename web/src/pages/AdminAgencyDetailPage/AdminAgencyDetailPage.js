import { Link, routes } from '@redwoodjs/router'

import AgencyDetailTabs  from "../../components/AgencyDetailTabs"
import BlockHeader from "../../components/BlockHeader"
import BlockSubHeader from "../../components/BlockSubHeader"
import BlockTitle from "../../components/BlockTitle"
import CardSp from "../../components/CardSp"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import React from 'react';
import RevenueTotal from "../../components/RevenueTotal"
import styled from 'styled-components'

const AdminAgencyDetailPageStyle = styled.div`
  .bl-content {

  }
  .info {
    display: flex;
    justify-content: space-between;
    max-width: 1920px;
    margin: auto;
    margin-bottom: 16px;
    flex-wrap: wrap;
    .item {
      width: calc(33% - 12px);
      background-color: white;
      display: flex;
      align-items: center;
      border-radius: 4px;

      @media (max-width: 1023px) {
        width: 100%;
        max-width: 414px;
        margin:0 auto 12px;
      }
      * {
        box-shadow: none;
      }
    }
  }
`

const AdminAgencyDetailPage = () => {

  return (
    <DashboardLayoutPage >
      <AdminAgencyDetailPageStyle >
        <BlockSubHeader  type="agency" title="Đại lý ABCD" id="MS-0123" time="25/01/2020" status="Đã duyệt"/>
        <div className="bl-content">
          <div className="info">
            <div className="totalRevenue item" >
                <RevenueTotal/>
            </div>
            <div className="card item"  >
                <CardSp iconUrl="src/assets/images/Car.svg" title="Bán 300 BH xe ô tô" value="70.000.000 VNĐ"/>
            </div>
            <div className="card item"  >
                <CardSp iconUrl="src/assets/images/Bike.svg" title="Bán 300 BH xe xe máy"  value="30.000.000 VNĐ" />
            </div>
          </div>
          <AgencyDetailTabs />
        </div>
      </AdminAgencyDetailPageStyle>

    </DashboardLayoutPage>
  )
}

export default AdminAgencyDetailPage
