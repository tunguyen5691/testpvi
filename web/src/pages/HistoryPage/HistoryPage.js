import { Link, routes } from '@redwoodjs/router'
import React, { useState } from 'react';

import BlockTitle from "../../components/BlockTitle"
import ButtonFoatBottom from "../../components/ButtonFoatBottom"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import DatePicker from 'react-mobile-datepicker';
import Loading from "../../components/Loading"
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import NavigationBar from "../../components/NavigationBar"
import ReactDOM from 'react-dom';
import Search from '../../components/Search'
import Title from "../../components/Title"
import styled from 'styled-components'

const listCTV = [
  {
    id: 1,
    bxBh: "BS: 51F-824.46",
    type: "BH bắt buộc TNDS xe ô tô ",
    amount: "200.000.000",
    status: "Đang chờ duyệt",
    infoText : "CTV-2056"
  },
  {
    id: 2,
    bxBh: "BS: 51F-824.46",
    type: "BH bắt buộc TNDS xe ô tô ",
    amount: "200.000.000",
    status: "04/12/2011",
    infoText : "Xem chi tiết"
  },
  {
    id: 3,
    bxBh: "BS: 51F-824.46",
    type: "BH bắt buộc TNDS xe ô tô ",
    amount: "200.000.000",
    status: "04/12/2011",
    infoText : "CTV-2056"
  },
  {
    id: 4,
    bxBh: " BS: 51F-824.46",
    type: "BH bắt buộc TNDS xe ô tô ",
    amount: "140.000.000",
    status: "04/12/2011",
    infoText : "CTV-2055"
  },

]

const HistoryPageStyle = styled.div`

`
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
    &.user {
      .information , .title{
        display: none;
      }
    }
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

const HistoryPage = ({ list = listCTV}) => {

  const [time , setTime] = useState(new Date());
  const [isOpen , setIsOpen] = useState(false);
  const handleClick = () => {
      setIsOpen(true);
  }

  const handleCancel = () => {
      setIsOpen(false);
  }

  const handleSelect = (times) => {
      // this.setState({ time, isOpen: false });
      setTime(times);
      setIsOpen(false)
  }

  const [time2 , setTime2] = useState(new Date());
  const [isOpen2 , setIsOpen2] = useState(false);
  const handleClick2 = () => {
      setIsOpen2(true);
  }

  const handleCancel2 = () => {
      setIsOpen2(false);
  }

  const handleSelect2 = (times) => {
      // this.setState({ time, isOpen: false });
      setTime2(times);
      setIsOpen2(false)
  }
  const monthMap = {
    '1': 'Jan',
    '2': 'Feb',
    '3': 'Mar',
    '4': 'Apr',
    '5': 'May',
    '6': 'Jun',
    '7': 'Jul',
    '8': 'Aug',
    '9': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
};

const dateConfig = {
    'year': {
        format: 'YYYY',
        step: 1,
    },
    'month': {
        format: value => monthMap[value.getMonth() + 1],
        step: 1,
    },
    'date': {
        format: 'DD',
        step: 1,
    },
};
const [modalIsOpenMD,setIsOpenMD] = React.useState(false);
function openModal() {
  setIsOpenMD(true);
}
function closeModal(){
  setIsOpenMD(false);
}
  return (

    <div className="mobile">
      <Modal
          isOpen={modalIsOpenMD}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-head">
          <Title titleType="" titleText="BH bắt buộc TNDS xe ô tô"></Title>
          <div className="md-close" onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>
       <MdBodyStyle>
          <div className="transactionDetail ">
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
      <HistoryPageStyle>
        <div className="i-head">

            <Title titleType="" titleText="Lịch sử"></Title>
          </div>
          <div className="i-body">
              <div style={{ marginBottom: "16px"}} >
              <BlockTitle text="LỊCH SỬ GIAO DỊCH"/>
              </div>
              <div className="timeSelect">
                <form className="noBg" >
                    <div className="form-groups isSelect isHalf"   onClick={() => handleClick()}>
                      <div className="form-groups-w">
                        {/* <input type="text" placeholder=" "/> */}
                        <label>Từ ngày</label>
                        <div className="selectedDate">
                            {time.toLocaleDateString("vi-VN")}
                        </div>
                      </div>
                  </div>
                  <div className="form-groups isSelect isHalf" onClick={() => handleClick2()}>
                      <div className="form-groups-w">
                        {/* <input type="text" placeholder=" "/> */}
                        <label>Đến ngày</label>
                        <div className="selectedDate">
                            {time2.toLocaleDateString("vi-VN")}
                        </div>
                      </div>
                  </div>
                </form>

                <DatePicker
                    value={time}
                    isOpen={isOpen}
                    onSelect={ handleSelect}
                    onCancel={handleCancel}
                    confirmText="Chọn" cancelText="Đóng"

                    />

                  <DatePicker
                    value={time2}
                    isOpen={isOpen2}
                    onSelect={ handleSelect2}
                    onCancel={handleCancel2}
                    confirmText="Chọn" cancelText="Đóng"

                    />
              </div>
              <div className="search" style={{ marginBottom: "16px"}}>
                  <Search />

              </div>
              <form className="noBg" style={{ marginBottom: "16px"}}>
                <div className="form-groups isSelect">
                    <div className="form-groups-w">
                      <div className="selectWrap noBorder">
                        <select>
                            <option  disabled>Chọn loại </option>
                            <option defaultValue>BH bắt buộc TNDS xe ô tô </option>
                            <option>BH bắt buộc TNDS xe máy </option>

                            </select>
                        </div>
                        <label>Loại bảo hiểm(*)</label>
                      </div>
                  </div>
              </form>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <td className="stt col1">STT</td>
                      <td className="col2">TÊN GÓI BH / BIỂN SỐ</td>
                      <td className="revenue col3">NGÀY MUA</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      list.map((item) => (
                        <tr key={item.id}>
                          <td className="stt col1">{ item.id}</td>
                          <td className="meta col2">
                            {/* <div className="name">{ item.name}</div> */}
                            <div className="bs-bh">{ item.bxBh}</div>
                            <div className="type">{ item.type}</div>
                          </td>
                          <td className="revenue col3">
                            <div className="package-status">{item.status}</div>
                            <div className="detail" onClick={openModal} >{ item.infoText}</div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>

                </table>
              </div>
              <Loading />
          </div>

      </HistoryPageStyle>
      <NavigationBar status="history"/>
    </div>
  )
}

export default HistoryPage
