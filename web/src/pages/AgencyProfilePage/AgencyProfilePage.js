import { Link, routes } from '@redwoodjs/router'

import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';
import Button from "../../components/Button"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import Modal from 'react-modal';
import React from 'react';
import Title from "../../components/Title"
import styled from 'styled-components'

const AgencyProfilePageStyle = styled.div`
  .i-body {
    .wrap {
      background-color: white;
      padding: 32px 24px;
      border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
      input {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
const UploadedID = styled.div`
  margin-bottom: 16px;
  .images{
    display: flex;
    max-width: 500px;
    margin: auto;
    img {
      width: 50%;
    }
  }
`
const AgencyProfilePage = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="mobile">
     <Modal className="alert PassChange"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content">
          <div className="md-head">
            <h4>Cập nhật thành công</h4>
            <CloseButton  onClick={closeModal}/>
          </div>
          <div className="md-body">
                <p>Bạn vừa cập nhật thông tin thành công</p>
            </div>
        </div>
        </Modal>
     <AgencyProfilePageStyle>
        <div className="i-head">
          <Link to="/" className="backBtn">
              <BackButton />
            </Link>
          <Title titleType="" titleText="Hồ sơ đại lý"></Title>
        </div>
        <div className="i-body">
          <div className="wrap">
              <UploadedID >
                <div className="images">
                  <img src="src/assets/images/mattruoc.png" />
                  <img src="src/assets/images/matsau.png" />
                </div>
              </UploadedID>
              <form className="noBg">
                  <div className="form-groups ">
                    <div className="form-groups-w">
                      <input type="text" placeholder=" " value="Nguyễn Thiên Tứ"/>
                      <label>Họ tên(*)</label>
                    </div>
                </div>
                <div className="form-groups ">
                    <div className="form-groups-w">
                      <input type="text" placeholder=" " value="46 Nguyễn huệ gò vâp thành phố hcm"/>
                      <label>Địa chỉ nhà(*)</label>
                    </div>
                </div>
                <div className="form-groups ">
                    <div className="form-groups-w">
                      <input type="text" placeholder=" " value="dailyabc@gmai.com"/>
                      <label>Email(*)</label>
                    </div>
                </div>
                <div className="form-groups isSelect">
                  <div className="form-groups-w">
                    <div className="selectWrap noBorder">
                      <select>
                          <option  disabled>Chọn ngân hàng </option>
                          <option selected>ACB</option>
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
                          <option  disabled>Chọn lựa chi nhánh ngân hàng</option>
                          <option selected>Bên nghé</option>
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
                    <input type="text" placeholder=" " value="Nguyễn thiên Tứ"/>
                    <label>Tên thụ hưởng</label>
                  </div>
              </div>
              <div className="form-groups ">
                  <div className="form-groups-w">
                    <input type="text" placeholder=" " value="1002132943294234"/>
                    <label>Số tài khoản</label>
                  </div>
              </div>
              <div onClick={openModal} style={{ width: "100%"}}>
              <Button btnText="CẬP NHẬT" />
              </div>

              </form>
          </div>
        </div>
     </AgencyProfilePageStyle>
    </div>
  )
}

export default AgencyProfilePage
