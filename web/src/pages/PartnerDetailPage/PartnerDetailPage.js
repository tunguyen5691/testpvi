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
      agencyName: "Nguyễn Văn An",
      bienso: "51F-824.46",
      type: "BH bắt buộc xe ô tô",
      status: "Đã thanh toán",
      statusClass: "paid"
  },{
    id : 2,
    agencyName: "Nguyễn Văn An",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe máy",
    status: "Đang chờ",
    statusClass: "waiting"
  },
  {
    id : 3,
    agencyName: "Nguyễn Văn An",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe ô tô",
    status: "Hết hạn",
    statusClass: "expired"
  },
  {
    id : 4,
    agencyName: "Nguyễn Văn An",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe máy",
    status: "Sắp hết hạn",
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
                    <BlockTitle text="BH TNDS BẮT BUỘC XE MÔ TÔ" size="md" />
                    <CloseButton  onClick={closeModal}/>
                  </div>
              <div className="bl-content scroll " >
              <div className="pager ">
                <img src="src/assets/images/paper.svg" />
              </div>
              <div className="infoContent">
                  <div className="bl">
                    <h4>THÔNG TIN CHỦ XE</h4>
                    <div className="item name">Họ và tên: <span>Nguyễn Văn A</span></div>
                    <div className="item address">Địa chỉ: <span>251 lê quang định f7 quận bình thạnh</span></div>
                    <div className="item phone">Số điện thoại: <span>0123872329</span></div>
                    <div className="item email">Email nhận qrcode: <span>nguyevawn@gmail.com</span></div>
                  </div>
                  <div className="bl">
                    <h4>THÔNG TIN PHƯƠNG TIỆN</h4>
                    <div className="item type">loại xe: <span>Không kinh doanh vận tải khách</span></div>
                    <div className="item seat">Số chổ: <span>4 chổ</span></div>
                    <div className="item bienso">Số biển kiểm soát: <span>51F-824.46</span></div>
                    <div className="item sokhung">Số khung: <span>6D3143030125</span></div>
                    <div className="item somay">Số máy: <span>6F3112035525</span></div>
                  </div>
                  <div className="bl">
                    <h4>THỜI GIAN VÀ MỨC TRÁCH NHIỆM BẢO HIỂM</h4>
                    <div className="item time">Thời gian: <span>1 năm</span></div>
                    <div className="item startDate isHalf">Từ ngày: <span>8/5/2021</span></div>
                    <div className="item endDate isHalf">Đến ngày: <span>8/5/2021</span></div>
                    <div className="item volunteer break">bảo hiểm tự nguyện người ngồi trên xe: <span>không tham gia</span></div>
                  </div>
                  <div className="bl">
                    <h4>TỔNG CỘNG</h4>
                    <div className="item price "><span>480.000.000 VNĐ</span></div>

                      </div>
                      </div>
              </div>
          </div>
          </div>
            </MdBodyStyle>
            </div>
      </Modal>
        <BlockSubHeader type="partner" title="NGUYỄN VĂN THIÊN TỨ" id="MS-0123" time="25/01/2020" status="" ofAgency="CNBD" />
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
          <div className="actionBar">
            <span>Danh sách đơn hàng</span>
            <AdminSearch placeholder="Tìm theo tên, biển số"/>
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

                          <span>TÊN CHỦ XE</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>BIỂN SỐ</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>LOẠI BẢO HIỂM</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TRẠNG THÁI</span>
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
