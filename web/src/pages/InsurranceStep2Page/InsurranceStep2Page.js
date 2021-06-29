import { Link, routes } from '@redwoodjs/router'

import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';
import BlockTitle from "../../components/BlockTitle"
import Button from "../../components/Button"
import ButtonFoatBottom from "../../components/ButtonFoatBottom"
import {ReactComponent as CameraIcon} from "../../assets/images/Camera.svg"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import ProgressBar from "../../components/ProgressBar"
import React from 'react';
import Title from "../../components/Title"
import styled from 'styled-components'

const InsurranceStep = styled.div`
    .i-head {
      position: relative;
      .backBtn {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
      .closeBtn {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
      }
    }
    .i-body {
      .description {
        padding: 24px 0 12px;
        h4 {
          font-size: 15px;
          font-weight: bold;
          color:  ${({ theme: { colors } }) => colors.primary};
          text-align: center;
        }
        p {
          font-size: 15px;
          text-align: center;
        }
      }
      a {
        display: block;
      }
      form {
        padding: 0;
        background-color: transparent;
        .form-groups {
          .form-groups-w {
            background-color: white;
          }
        }
      }
    }
`
const TakeIdImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 8px 0;
  margin-top: 16px;
  background-color: white;
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  span {
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.placeholder};
    margin-right: 8px;
    font-size: 14px;
  }


`
const ButtonStyle = styled.div`
  display: flex;
  justify-content:  space-between;
  margin-top: 24px;
  .btn {
    width: calc(50% - 8px);
  }
`
const InsurranceStep2Page = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="mobile">
        <Modal className="alert"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content">
          <div className="md-head">
            <h4>Thông báo</h4>
            <CloseButton  onClick={closeModal}/>
          </div>
          <div className="md-body">
                <p>Bạn muốn hủy đăng ký mua bảo hiểm ô tô?</p>
                <ButtonStyle >
                    <div className="btn close" onClick={closeModal}>
                      <Button btnText="Đóng" type="secondary" />
                    </div>
                    <div className="btn accept">
                      <Button btnText="Đồng ý"/>
                    </div>
                </ButtonStyle>
            </div>
        </div>


        </Modal>
      <InsurranceStep>
        <div className="i-head">
            <Link to="/" className="backBtn">
                <BackButton />
              </Link>
            <Title titleType="" titleText="Mua bảo hiểm cho xe ô tô"></Title>
              <Link to="" className="closeBtn"  >
                <CloseButton onClick={openModal}/>
              </Link>
        </div>
        <div className="i-body">
          <ProgressBar percentage="" />
          <Link to={"./insurrance-step1"} style={{ margin: "32px 0 24px" , display: "block"}} >
          <TakeIdImg >
                <span>ĐIỀN THÔNG TIN BẰNG ẢNH</span>
              <CameraIcon />
            </TakeIdImg>
          </Link>
          <div className="inputForm" style={{marginBottom: "16px"}}>
            <BlockTitle text="THÔNG TIN CHỦ XE"  size="md"/>
            <form style={{ marginTop: "16px"}}>
            <div className="form-groups">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>Họ và tên</label>
                </div>
            </div>
            <div className="form-groups">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>Địa chỉ</label>
                </div>
              </div>
              <div className="form-groups">
                <div className="form-groups-w">
                  <input type="number" placeholder=" "/>
                  <label>Số điện thoại</label>
                </div>
              </div>
              <div className="form-groups error">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>Email nhận đơn bảo hiểm</label>
                </div>
              </div>
              <div style={{ width: "100%"}} >
              </div>
            </form>

          </div>
          <div className="inputForm">
          <BlockTitle text="THÔNG TIN XE"  size="md"/>
            <form style={{ marginTop: "16px"}}>
            <div className="form-groups">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>Biển kiểm soát</label>
                </div>
            </div>
            <div className="form-groups">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>Số khung</label>
                </div>
              </div>
              <div className="form-groups">
                <div className="form-groups-w">
                  <input type="number" placeholder=" "/>
                  <label>Số máy</label>
                </div>
              </div>

            </form>
          </div>

        </div>
        <ButtonFoatBottom BtnShow="" btnTextNext="TIẾP TỤC" LinkNext="/insurrancestep2a"/>
      </InsurranceStep>
    </div>
  )
}

export default InsurranceStep2Page
