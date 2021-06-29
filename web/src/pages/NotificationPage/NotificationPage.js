import { Link, routes } from '@redwoodjs/router'

import BlockTitle from "../../components/BlockTitle"
import Loading from "../../components/Loading"
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import NavigationBar from "../../components/NavigationBar"
import NotiCard from "../../components/NotiCard"
import React from 'react';
import TabsTimer from "../../components/TabsTimer"
import Title from "../../components/Title"
import styled from 'styled-components'

const NotificationPageStyle = styled.div`
  position: relative;

  .tabsTimer {
    position: absolute;
    top: 0;
    left: 24px;
    width: calc(100% - 48px);
    transform: translateY(-50%);
  }
  .i-body {
    margin-top: 24px;
    .list {
      padding-top: 16px;
      .item {
        margin-bottom: 8px;
      }
    }
  }
`
const listNoti = [
  {
    id: 1,
    iconUrl: "src/assets/images/oto_1_2.svg",
    title: "Hết hạn",
    bs: "51F-824.46",
    type: "normal",
    time: "11/4/2021",
    btntext : "Mua lại",
    btnType :"primary",
    modal: ""
  },
  {
    id: 2,
    iconUrl: "src/assets/images/File2grey.svg",
    title: "Ra mắt gói BH mới cáo lun nà",
    bs: "",
    type: "oneLine",
    time: "",
    btntext : "Xem chi tiết",
    btnType :"primary",
    modal: "openModalDetail()"
  },
  {
    id: 3,
    iconUrl: "src/assets/images/MotoOver50.svg",
    title: "Giao dịch thành công",
    bs: "51F-824.46",
    type: "normal",
    time: "11/4/2021",
    btntext : "CTV-1256",
    btnType :"secondary",
    modal: "openModalDetailTransaction()"
  },
  {
    id: 4,
    iconUrl: "src/assets/images/MotoOver50.svg",
    title: "Hết hạn",
    bs: "51F-824.46",
    type: "normal",
    time: "11/4/2021",
    btntext : "CTV-1256",
    btnType :"secondary",
    modal: "  ()"
  },
  {
    id: 5,
    iconUrl: "src/assets/images/MotoOver50.svg",
    title: "Hết hạn",
    bs: "51F-824.46",
    type: "normal",
    time: "11/4/2021",
    btntext : "CTV-1256",
    btnType :"secondary",
    modal: function (){
    }
  }
]

const MdBodyStyle = styled.div`
  background-color: #F0F2F6;
  padding: 32px 24px 86px;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
  min-height: calc(100vh - 71px);
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
      margin-bottom: 8px;
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
    .information {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;
      align-items: center;
      .code {
        font-size: 11px;
        color : ${({ theme: { colors } }) => colors.secondary};
        padding: 4px 8px;
        border: 1px solid ${({ theme: { colors } }) => colors.secondary};
        border-radius : ${({ theme: { borderRadius } }) => borderRadius.sm};
        background-color: white;
      }
      .timeJoin {
        font-size: 13px;
        color : ${({ theme: { colors } }) => colors.placeholder};
        padding-left: 12px;
        span {
          font-weight: 500;
          color : ${({ theme: { colors } }) => colors.base};
        }
      }
    }
  }
`
const BenifitStyle = styled.div`
    padding: 32px 20px;
    background-color: white;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
    .item {
      margin-bottom: 16px;
      H4 {
        font-size: 14px;
        color:  ${({ theme: { colors } }) => colors.primary};
        margin-bottom: 8px;
        font-weight: bold;
      }
      P {
        margin: 0 0 8px 0;
        font-size: 14px;
        strong {
          font-weight: bold;
          color: black;
        }
      }
    }

  `
const NotificationPage = ({ list = listNoti}) => {
  const [modalIsOpenDetail,setIsOpenDetail] = React.useState(false);
  function openModalDetail() {
    setIsOpenDetail(true);
  }
  function closeModalDetail(){
    setIsOpenDetail(false);
  }

  const [modalIsOpenDetailTransaction,setIsOpenDetailTransaction] = React.useState(false);
  function openModalDetailTransaction() {
    setIsOpenDetailTransaction(true);
  }
  function closeModalDetailTransaction(){
    setIsOpenDetailTransaction(false);
  }
  return (
    <div className="mobile">
      <Modal
          isOpen={modalIsOpenDetailTransaction}
          onRequestClose={openModalDetailTransaction}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-head">
          <Title titleType="" titleText="BH bắt buộc TNDS xe ô tô"></Title>
          <div className="md-close" onClick={closeModalDetailTransaction}>      <ModalCloseButton /> </div>
        </div>
       <MdBodyStyle>
          <div className="transactionDetail">
            <div className="title">
                <BlockTitle text="CHI TIẾT GIAO DỊCH" size="md"/>
              </div>
              <div className="information">
                    <div className="code">CTV-1356</div>
                    <div className="timeJoin"><span>04/03/2011</span></div>
              </div>
              <div className="pager">
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

          <div className="downloadPDF">
            <span>TẢI PDF</span>
        </div>
       </MdBodyStyle>
      </Modal>
      <Modal
          isOpen={modalIsOpenDetail}
          onRequestClose={closeModalDetail}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-head">
          <Title titleType="" titleText="Điều khoản sử dụng"></Title>
          <div className="md-close" onClick={closeModalDetail}>      <ModalCloseButton /> </div>
        </div>

        <BenifitStyle>
          <div className="item">
              <BlockTitle text="Gói bảo hiểm mới ABC XYZ " size="md" />


            </div>


            <div className="item">
            <h4>Chính sách 1</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="item">
            <h4>Chính sách 2</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="item">
            <h4>Chính sách 3</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="item">
            <h4>Chính sách 4</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="item">
            <h4>Chính sách 5</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </BenifitStyle>
        </Modal>
      <NotificationPageStyle>
        <div className="i-head">
            <Title titleType="" titleText="Trung tâm hỗ trợ "></Title>
          </div>
          <div className="i-body">
              <div className="tabsTimer">
                <TabsTimer />
              </div>
              <div className="list">
                {
                  list.map((item) => (
                    <div className="item "  key={item.id} onClick={() => openModalDetailTransaction()}>
                    <NotiCard iconUrl={item.iconUrl} title={item.title} bs={item.bs} type={item.type} time={item.time} btntext={item.btntext} btnType={item.btnType}/>
                  </div>
                  ))
                }
              </div>
              <Loading/>
          </div>
      </NotificationPageStyle>
       <NavigationBar status="notification"/>
    </div>
  )
}

export default NotificationPage
