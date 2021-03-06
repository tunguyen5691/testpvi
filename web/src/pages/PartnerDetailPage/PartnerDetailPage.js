import { Link, routes } from '@redwoodjs/router'

import AdminSearch from "../../components/AdminSearch"
import BlockHeader from "../../components/BlockHeader"
import BlockSubHeader from "../../components/BlockSubHeader"
import BlockTitle from "../../components/BlockTitle"
import CardSp from "../../components/CardSp"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"
import Icon from "../../components/Icon"
import Modal from 'react-modal';
import { ReactComponent as ModalCloseButton } from '../../assets/images/Close.svg';
import Pagination from "../../components/Pagination"
import React from 'react';
import RevenueTotal from "../../components/RevenueTotal"
import TableButton  from "../../components/TableButton"
import Title from "../../components/Title"
import styled from 'styled-components'

const PartnerDetailPageStyle = styled.div`
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
  .actionBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    @media (max-width: 1023px) {
      margin-bottom: 16px;
    }
    span {
      font-size: 18px;
      font-weight: 500;
      color:  black;
      @media (max-width: 1023px){
        font-size: 16px;
        width: 100%;
        margin-bottom: 12px;
      }
    }
  }
`

const MdBodyStyle = styled.div`
  background-color: #F0F2F6;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
  .downloadPDF {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
    padding: 12px 0;
    text-align: center;
    max-width: 420px;
    left: 50%;
    transform: translateX(-50%);
    transition: all ease 0.3s;
    &:hover, &:focus {
      cursor: pointer;
    }
    span {
      color: white;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      display: inline;
      width: 100%;
      position: relative;
      &:before {
        width: 24px;
        height: 24px;
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: -36px;
        transform: translateY(-50%);
        background: url('src/assets/images/DownloadWhite.svg') center no-repeat;
        background-size: 100%;
      }
    }
  }
  .transactionDetail {
    .title {
      position: relative;
      padding: 28px 0px;
      svg {
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
        path {
          fill: #909090;
          stroke: #909090;
        }
      }
    }
    .pager {
      margin-bottom: 16px;
      img {
        width: 100%;
        display: block;
      }
    }
    .infoContent {
      margin-top: 16px;
      .bl {
        margin-bottom: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      h4 {
        font-weight: bold;
        color : ${({ theme: { colors } }) => colors.primary} ;
        font-size: 14px;
        margin-bottom: 8px;
        width: 100%;
      }
      .item {
        font-size: 14px;
        color : ${({ theme: { colors } }) => colors.placeholder} ;
        margin-bottom: 8px;
        width: 100%;
        &.isHalf{
          width : calc(50% - 8px);
        }
        &.break {
          span {
            display: block;
          }
        }
        span {
          font-weight: 500;
          color: #555555;
        }
        &.price {
          span {
            font-size: 22px;
            font-weight: bold;

          }
        }
      }
    }

  }
`
const ordersList = [
  {
      id : 1,
      agencyName: "Nguy???n V??n An",
      bienso: "51F-824.46",
      type: "BH b???t bu???c xe ?? t??",
      status: "???? thanh to??n",
      statusClass: "paid"
  },{
    id : 2,
    agencyName: "Nguy???n V??n An",
    bienso: "51F-824.46",
    type: "BH b???t bu???c xe m??y",
    status: "??ang ch???",
    statusClass: "waiting"
  },
  {
    id : 3,
    agencyName: "Nguy???n V??n An",
    bienso: "51F-824.46",
    type: "BH b???t bu???c xe ?? t??",
    status: "H???t h???n",
    statusClass: "expired"
  },
  {
    id : 4,
    agencyName: "Nguy???n V??n An",
    bienso: "51F-824.46",
    type: "BH b???t bu???c xe m??y",
    status: "S???p h???t h???n",
    statusClass: "toExpired"
  },

]
const PartnerDetailPage = ({ list = ordersList }) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <DashboardLayoutPage >
      <PartnerDetailPageStyle>
        <Modal className="alert "
          isOpen={modalIsOpen}
          onRequestClose={openModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
      <div className="md-content admin">
            <MdBodyStyle>
              <div className="md-body">

          <div className="transactionDetail  ">
              <div className="title">
                    <BlockTitle text="BH TNDS B???T BU???C XE M?? T??" size="md" />
                    <CloseButton  onClick={closeModal}/>
                  </div>
              <div className="bl-content scroll " >
              <div className="pager ">
                <img src="src/assets/images/paper.svg" />
              </div>
              <div className="infoContent">
                  <div className="bl">
                    <h4>TH??NG TIN CH??? XE</h4>
                    <div className="item name">H??? v?? t??n: <span>Nguy???n V??n A</span></div>
                    <div className="item address">?????a ch???: <span>251 l?? quang ?????nh f7 qu???n b??nh th???nh</span></div>
                    <div className="item phone">S??? ??i???n tho???i: <span>0123872329</span></div>
                    <div className="item email">Email nh???n qrcode: <span>nguyevawn@gmail.com</span></div>
                  </div>
                  <div className="bl">
                    <h4>TH??NG TIN PH????NG TI???N</h4>
                    <div className="item type">lo???i xe: <span>Kh??ng kinh doanh v???n t???i kh??ch</span></div>
                    <div className="item seat">S??? ch???: <span>4 ch???</span></div>
                    <div className="item bienso">S??? bi???n ki???m so??t: <span>51F-824.46</span></div>
                    <div className="item sokhung">S??? khung: <span>6D3143030125</span></div>
                    <div className="item somay">S??? m??y: <span>6F3112035525</span></div>
                  </div>
                  <div className="bl">
                    <h4>TH???I GIAN V?? M???C TR??CH NHI???M B???O HI???M</h4>
                    <div className="item time">Th???i gian: <span>1 n??m</span></div>
                    <div className="item startDate isHalf">T??? ng??y: <span>8/5/2021</span></div>
                    <div className="item endDate isHalf">?????n ng??y: <span>8/5/2021</span></div>
                    <div className="item volunteer break">b???o hi???m t??? nguy???n ng?????i ng???i tr??n xe: <span>kh??ng tham gia</span></div>
                  </div>
                  <div className="bl">
                    <h4>T???NG C???NG</h4>
                    <div className="item price "><span>480.000.000 VN??</span></div>

                      </div>
                      </div>
              </div>
          </div>
          </div>
            </MdBodyStyle>
            </div>
      </Modal>
        <BlockSubHeader type="partner" title="NGUY???N V??N THI??N T???" id="MS-0123" time="25/01/2020" status="" ofAgency="CNBD" />
        <div className="bl-content">
          <div className="info">
            <div className="totalRevenue item" >
                <RevenueTotal/>
            </div>
            <div className="card item"  >
                <CardSp iconUrl="src/assets/images/Car.svg" title="B??n 300 BH xe ?? t??" value="70.000.000 VN??"/>
            </div>
            <div className="card item"  >
                <CardSp iconUrl="src/assets/images/Bike.svg" title="B??n 300 BH xe xe m??y"  value="30.000.000 VN??" />
            </div>
          </div>
          <div className="actionBar">
            <span>Danh s??ch ????n h??ng</span>
            <AdminSearch placeholder="T??m theo t??n, bi???n s???"/>
          </div>
          <div className="adminTable">
            <table>
                <thead>
                    <tr>
                        <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>T??N CH??? XE</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>BI???N S???</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>LO???I B???O HI???M</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TR???NG TH??I</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                      </th>

                      <th>

                      </th>
                        <th>

                      </th>

                  </tr>
              </thead>
              <tbody>
                  {
                    list.map((item) => (
                      <tr key={item.id}>
                        <td className="stt">
                         {item.id}
                        </td>
                        <td className="name">
                          {item.agencyName}
                        </td>
                        <td className="bienso">
                          {item.bienso}
                        </td>
                        <td className="type">
                         {item.type}

                        </td>
                        <td className={`status ${item.statusClass}`}>
                         {item.status}

                        </td>

                        <td className="action">
                           <div onClick={openModal}>
                           <TableButton />
                           </div>

                        </td>
                    </tr>
                    ))
                  }


              </tbody>
          </table>
          </div>
          <Pagination />
        </div>
      </PartnerDetailPageStyle>

    </DashboardLayoutPage>

  )
}

export default PartnerDetailPage
