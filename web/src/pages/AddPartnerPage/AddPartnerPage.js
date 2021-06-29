import { Link, routes } from '@redwoodjs/router'

import BlockTitle from "../../components/BlockTitle"
import Button from "../../components/Button"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import React from 'react';
import UploadCmnd from "../../components/UploadCmnd"
import styled from 'styled-components'

const AddPartnerPageStyle = styled.div`
  .blTitle {
    font-size: 16px;
    font-weight: 900;
    color:${({ theme: { colors } }) => colors.secondary};;
    text-align: center;
    margin-bottom: 24px;
  }
  .wrap {
    background-color: white;
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 24px ;
    .blBody {
      border-radius: 4px;
      display: flex;
      flex-wrap: wrap;
      .blLeft {
        width: 40%;
        @media (max-width: 1023px) {
          width: 100%;
          .upload {
            padding: 0 ;
            margin-bottom: 24px;
          }
        }
        .button {
          display: none;
        }
      }
      .blRight {
        width: 60%;
        @media (max-width: 1023px) {
          width: 100%;
        }
      }
    }
  }
`
const ButtonStyle = styled.div`
  display: flex;
  justify-content:  space-between;
  padding: 12px 20px;
  width: 100%;
  max-width:400px;
  margin: 24px auto 0;
  .btn {
    width: calc(50% - 8px);
  }
`
const AddPartnerPage = () => {
  const [modalIsOpen2,setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2(){
    setIsOpen2(false);
  }
  return (
    <DashboardLayoutPage>
      <AddPartnerPageStyle>
      <Modal className="alert"
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content">
          <div className="md-head">
            <h4>Thông báo</h4>
            <CloseButton  onClick={closeModal2}/>
          </div>
          <div className="md-body">
                <p>Duyệt thành công</p>
                <ButtonStyle >
                    <div className="btn close" onClick={closeModal2}>
                      <Button btnText="Đóng" type="secondary" />
                    </div>
                    <div className="btn accept">
                      <Button btnText="Đồng ý"/>
                    </div>
                </ButtonStyle>
            </div>
        </div>


        </Modal>
        <div className="wrap">
          <div className="blTitle">THÔNG TIN CTV</div>
          <div className="blBody">
            <div className="bl blLeft">
             <UploadCmnd/>
            </div>
            <div className="bl blRight">
            <form className="noBg">
                <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="text" placeholder=" "/>
                    <label>Họ tên(*)</label>
                  </div>
              </div>
              <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="text" placeholder=" "/>
                    <label>Địa chỉ nhà(*)</label>
                  </div>
                </div>
              <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="tel" placeholder=" "/>
                    <label>Số điện thoại(*)</label>
                  </div>
              </div>
              <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="email" placeholder=" "/>
                    <label>Email(*)</label>
                  </div>
              </div>
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Chọn ngân hàng </option>
                        <option>ACB</option>
                        <option>MB</option>
                        <option>MB</option>
                        <option>MB</option>
                        <option>MB</option>
                        </select>
                    </div>
                    <label>Tài khoản Ngân hàng(*)</label>
                  </div>
              </div>
              <div className="form-groups isSelect ">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Chọn lựa chi nhánh ngân hàng</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                    </div>
                    <label>Chi nhánh</label>
                  </div>
              </div>

              <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="text" placeholder=" "/>
                    <label>Tên thụ hưởng</label>
                  </div>
              </div>
              <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="text" placeholder=" "/>
                    <label>Số tài khoản</label>
                  </div>
              </div>


            </form>
            </div>
            <ButtonStyle >
              <div className="btn close" >
                  <Link to="./admin-agency-detail" >
                  <Button btnText="THOÁT" type="grey  adminBtn" />
                   </Link>
                  </div>
                  <div className="btn accept" onClick={openModal2}>
                    <Button btnText="DUYỆT HỒ SƠ" type=" adminBtn primary"/>
                  </div>
              </ButtonStyle>
          </div>

        </div>
      </AddPartnerPageStyle>

    </DashboardLayoutPage>
  )
}

export default AddPartnerPage
