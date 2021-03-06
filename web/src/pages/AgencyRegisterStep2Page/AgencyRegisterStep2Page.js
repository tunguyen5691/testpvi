import { Link, routes } from '@redwoodjs/router'

import AgencyFormRegister from "../../components/AgencyFormRegister";
import {ReactComponent as BackButton} from '../../assets/images/ArrowLeft.svg';
import Button from "../../components/Button"
import {ReactComponent as CameraIcon} from "../../assets/images/Camera.svg"
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import Policy from "../../components/Policy"
import React from 'react';
import ReactDOM from 'react-dom';
import Title from "../../components/Title";
import UploadCmnd from "../../components/UploadCmnd"
import styled from 'styled-components';

const AgenctyRStyle = styled.div`
  position: relative;
  .head {
    position: relative;
    .backBtn {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
  }
  .body {
    padding: 0 20px 36px;
  }
  .policyFooter {
    position: relative;

    z-index: 2;
  }
`
const HeadTitle = styled.div`
  text-align: center;
  font-size: 14px;
  width: 100%;
  color: red;
  padding-bottom: 16px;
`
const TakeIdImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 8px 0;
  span {
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.placeholder};
    margin-right: 8px;
    font-size: 14px;
  }

`
const UploadedID = styled.div`
  .images{
    display: flex;
    max-width: 500px;
    margin: auto;
    img {
      width: 50%;
    }
  }
`
const ModalBody = styled.div`
  background-color: white;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-bottom: 40px;

`
const AgencyRegisterStep2Page = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  return (

    <div className="mobile">
    <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-head">
        <Title titleType="" titleText="CH???P ???NH CMND" titleType="capital"></Title>
          <div className="md-close " onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>
        <div className="md-body ">
            <ModalBody>
              <UploadCmnd/>
            </ModalBody>
        </div>




        </Modal>
      <AgenctyRStyle>
        <div className="head">
          <Link to="/" className="backBtn">
            <BackButton />
          </Link>
          <Title titleType="capital" titleText="????NG K?? ?????I L??"></Title>
        </div>
        <div className="body">

          <form autocomplete="off">
              <HeadTitle>Th??ng tin b???t bu???c</HeadTitle>
            <div className="form-groups " onClick={openModal}>
                  <TakeIdImg >
                      <span>CH???P ???NH CMND</span>
                      <CameraIcon/>
                  </TakeIdImg>
            </div>
            <div className="form-groups " onClick={openModal}>
                  <UploadedID >
                      <div className="images">
                        <img src="src/assets/images/mattruoc.png" />
                        <img src="src/assets/images/matsau.png" />
                      </div>
                  </UploadedID>
            </div>
              <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>H??? t??n(*)</label>
                </div>
            </div>
            <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>?????a ch??? nh??(*)</label>
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
                      <option selected disabled>Ch???n ng??n h??ng </option>
                      <option>ACB</option>
                      <option>MB</option>
                      <option>MB</option>
                      <option>MB</option>
                      <option>MB</option>
                      </select>
                  </div>
                  <label>T??i kho???n Ng??n h??ng(*)</label>
                </div>
            </div>
            <div className="form-groups isSelect ">
                <div className="form-groups-w">
                <div className="selectWrap noBorder">
                  <select>
                      <option selected disabled>Ch???n l???a chi nh??nh ng??n h??ng</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      </select>
                  </div>
                  <label>Chi nh??nh</label>
                </div>
            </div>

            <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>T??n th??? h?????ng</label>
                </div>
            </div>
            <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>S??? t??i kho???n</label>
                </div>
            </div>

            <div style={{width: "100%" }} >
              <Link to={'/register-success'}>
                   <Button btnText="????NG K??"/>
              </Link>

              </div>
          </form>
        </div>
        <div className="policyFooter">
          <Policy></Policy>
        </div>

      </AgenctyRStyle>
    </div>
  )
}

export default AgencyRegisterStep2Page
