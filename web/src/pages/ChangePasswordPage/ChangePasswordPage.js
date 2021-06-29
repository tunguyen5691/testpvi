import { Link, routes } from '@redwoodjs/router'
import Title from "../../components/Title"
import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg'
import Button from "../../components/Button"
import React from 'react';
import Modal from 'react-modal';
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';

import styled from 'styled-components'

const ChangePasswordStyle= styled.div`
  .i-body {
    .wrap {
      background-color: white;
      padding: 32px 24px;
      border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg}
    }
  }
`
const PassChangeStyle = styled.div`

`
const ChangePasswordPage = () => {
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
                <p>Bạn vừa đổi mật khẩu thành công</p>
            </div>
        </div>
        </Modal>
    <ChangePasswordStyle>
        <div className="i-head">
          <Link to="/" className="backBtn">
              <BackButton />
            </Link>
          <Title titleType="" titleText="Đổi mật khẩu"></Title>
        </div>
        <div className="i-body">
            <div className="wrap">
              <form  className="noBg">
                  <div className="form-groups">
                      <div className="form-groups-w">
                        <input type="password" placeholder=" "/>
                        <label>Mật khẩu cũ</label>
                      </div>
                  </div>
                  <div className="form-groups">
                      <div className="form-groups-w">
                        <input type="password" placeholder=" "/>
                        <label>Mật khẩu mới</label>
                      </div>
                  </div>
                  <div className="form-groups">
                      <div className="form-groups-w">
                        <input type="password" placeholder=" "/>
                        <label>Nhập lại mật khẩu mới</label>
                      </div>
                  </div>
                  <div  style={{ width: "100%"}} onClick={openModal}>
                    <Button btnText="CẬP NHẬT"   />
                  </div>
              </form>

            </div>
        </div>
    </ChangePasswordStyle>

    </div>
  )
}

export default ChangePasswordPage
