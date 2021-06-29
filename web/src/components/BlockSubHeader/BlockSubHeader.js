import { Link, routes } from '@redwoodjs/router'

import AdminButtonIcon from "../../components/AdminButtonIcon"
import BlockTitle from "../../components/BlockTitle"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import React from 'react';
import styled from 'styled-components'

const BlockSubHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  @media (max-width: 1023px) {
    margin-top: -8px;
  }
  &.agency {
    .meta {
      .belongTo {
        display: none;
      }
    }
  }
  &.partner {
    .meta {
      .status {
        display: none;
      }
    }
    .blRight {
      display: none;
    }
  }
  .blLeft {
    display: flex;
    align-items: center;
    @media (max-width: 1023px) {
      width: 100%;
      @media (max-width: 1023px) {
        align-items: flex-start;
        padding-left:
      }
    }

    .meta {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      @media (max-width: 1023px) {
        margin-bottom: 12px;
      }
      .prefix {
        display: flex;
        align-items: center;
        @media (max-width: 1023px) {
          width: 100%;
          padding-left: 48px;
          margin-bottom: 12px;
        }
      }
      .back {
        transition: all ease 0.3s;
        margin-right: 12px;
        img {
          display: block;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
      .name {
        font-size: 18px;
        color: black;
        font-weight: 500;
        margin-right: 12px;
        @media (max-width: 1023px){
          width: 100%;
          font-size: 16px;
        }
      }
      .id {
        color:${({ theme: { colors } }) => colors.secondary};
        font-size: 12px;
        padding: 4px 8px;
        border: 1px solid ${({ theme: { colors } }) => colors.secondary};
        border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
        margin-right: 12px;
      }
      .date  {
        font-size: 14px;
        padding-right: 12px;
        margin-right: 12px;
        border-right: 1px solid  #909090;
        span {
          color: black;
          font-weight: 500;
        }
      }
      .status {
        font-size: 14px;
        font-weight: 700;
        color:${({ theme: { colors } }) => colors.primary};
        margin-right: 12px;
      }
      .belongTo {
        font-size: 14px;
        padding-right: 12px;
        margin-right: 12px;
        span {
          color: black;
          font-weight: 500;
        }
      }
    }
  }
  .blRight {
    display: flex:
    justify-content: flex-end;
    @media (max-width: 1023px) {
      width: 100%;
    }
  }
  .actionBtn {
    &.two {
      display: flex;
      width: 100%;
      @media (max-width: 1023px) {
        justify-content: space-between;
      }
      .item {
        @media (max-width: 1023px) {
          width: calc(50% - 6px);
        }
      }
      .AdminButtonIcon {
        margin-left: 10px;
        @media (max-width: 1023px) {
          margin-left: 0;
        }
      }
    }
  }
`
const BlockSubHeader = ({type, title, id, time, ofAgency, status}) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <BlockSubHeaderStyle className={`${type}`}>
       <Modal className="alert"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content admin">
          <div className="md-head">
            <BlockTitle  text="THÔNG TIN ĐẠI LÝ"/>
            <CloseButton  onClick={closeModal}/>
          </div>
          <div className="md-body">
              <div className="bl-content scroll">
                <div className="images two" style={{marginBottom: "16px"}}>
                      <img src="src/assets/images/mattruoc.png" />
                      <img src="src/assets/images/matsau.png" />
                    </div>
                    <form autocomplete="off">

                      <div className="form-groups ">
                        <div className="form-groups-w">
                          <label>Họ tên(*)</label>
                          <input type="text" placeholder=" " value="Nguyễn Văn A"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                        <label>Địa chỉ nhà(*)</label>
                        <input type="text" placeholder=" " value="46 Nguyễn Huệ, P Bến Nghé, HCM "/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Email(*)</label>
                          <input type="email" placeholder=" " value="dailyabc@gmai.com"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Tài khoản Ngân hàng</label>
                          <input type="text" placeholder=" " value="Vietin bank"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Chi nhánh</label>
                          <input type="text" placeholder=" " value="CN Bến Nghé"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Tên thụ hưởng</label>
                          <input type="text" placeholder=" " value="Nguyen Van A"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                        <label>Số tài khoản</label>
                          <input type="text" placeholder=" " value="1002132943294234"/>
                        </div>
                    </div>


                  </form>
              </div>

            </div>
        </div>


        </Modal>
      <div className="bl blLeft">
        <div className="meta">
              <div className="prefix">
                <div className="back">
                  <img src="src/assets/images/adminHeaderBack.svg" />
                </div>
                <div className="name">{title}</div>
              </div>
                <div className="id">{id}</div>
                <div className="date">Tạo ngày: <span>{time}</span></div>
                <div className="status">{status}</div>
                <div className="belongTo">Đại lý: <span>{ofAgency}</span></div>

          </div>
      </div>
      <div className="bl blRight">
        <div className="actionBtn two" >
          <div className="agencyInfo item" onClick={openModal}>
            <AdminButtonIcon  iconURL="src/assets/images/User2.svg" btnText="Thông tin đại lý" />
          </div>
          <div className="addPartner item">
            <Link to="./add-partner">
             <AdminButtonIcon  iconURL="src/assets/images/Plus.svg" btnText="Thêm CTV" />
              </Link>
          </div>
        </div>
      </div>
    </BlockSubHeaderStyle>
  )
}

export default BlockSubHeader
