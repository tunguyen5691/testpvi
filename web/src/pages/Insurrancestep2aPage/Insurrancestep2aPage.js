import "react-datepicker/dist/react-datepicker.css";

import { Link, routes } from '@redwoodjs/router'
import React, { useState } from "react";

import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';
import BlockTitle from "../../components/BlockTitle"
import Button from "../../components/Button"
import ButtonFoatBottom from "../../components/ButtonFoatBottom"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import DatePicker from "react-datepicker";
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import ProgressBar from "../../components/ProgressBar"
import { ReactComponent as QuestionIcon } from '../../assets/images/Question.svg';
import Title from "../../components/Title"
import VehicleSelect from "../../components/VehicleSelect"
import styled from 'styled-components'

const InsurranceStep = styled.div`

    .i-body {

      .progressBar {
        margin-bottom: 36px;
      }
      a {
        display: block;
      }
      .bl {
        margin-bottom: 32px;
        &.carSelect {
          .desc {
            font-size: 14px;
            color : ${({ theme: { colors } }) => colors.placeholder} ;
            margin: 16px 0 14px;
            font-weight: bold;
          }
        }
        &.insurranceTime {
          z-index: 2222;
          .datepicker {
            position: relative;
            z-index: 333;
          }
          .infomation{
            margin-top: 16px;
            z-index: 1;
            .item {
              font-size: 13px;
              color : ${({ theme: { colors } }) => colors.placeholder} ;
              margin-bottom: 12px;
              &.date {
                span {
                  font-size: 15px;
                  color: #555555;
                }
              }
              &.price {
                span {
                  font-weight: bold;
                  font-size: 15px;
                  color : ${({ theme: { colors } }) => colors.primary} ;
                }
              }
            }
          }
        }
        &.volunteer {
          .titleIcon {
            position: relative;
            padding-right: 40px;
            svg {
              position: absolute;
              top: 50%;
              right:0;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
`

const BenifitStyle = styled.div`
    padding: 32px 20px;
    background-color: white;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
    min-height: calc(100% - 72px);
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
  const ButtonStyle = styled.div`
  display: flex;
  justify-content:  space-between;
  margin-top: 24px;
  .btn {
    width: calc(50% - 8px);
  }
`


const Insurrancestep2aPage = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  const [modalIsOpen2,setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2(){
    setIsOpen2(false);
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
          <Title titleType="" titleText="Ph???m vi v?? quy???n l???i"></Title>
          <div className="md-close" onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>

        <BenifitStyle>
          <div className="item">
              <BlockTitle text="B???O HI???M TAI N???N NG?????I NG???I TR??N XE, L??I XE, PH??? XE" size="md" />


            </div>
          <div className="item">
          <p>B???o hi???m tai n???n ng?????i ng???i tr??n xe b???o hi???m cho l??i, ph??? xe v?? nh???ngng?????i kh??c ???????c ch??? tr??n xe b??? thi???t h???i v??? th??n th??? do tai n???n khi ??ang tr??n xe, l??n xu???ng xe trong qu?? tr??nh xe ??ang tham gia giao th??ng.</p>
          </div>
          <div className="item">
          <h4>?????i t?????ng c???n mua</h4>
              <p>L??i xe, ph??? xe v?? nh???ng ng?????i kh??c ???????c ch??? tr??n xe.</p>

            </div>
          <div className="item">
              <h4>Ph???m Vi B???o Hi???m</h4>
              <p>???	Tai n???n ?????i v???i ng?????i ???????c ch??? tr??n xe: Thi???t h???i th??n th??? do tai n???n khi ??ang ??? tr??n xe, l??n xu???ng xe trong qu?? tr??nh xe ??ang tham gia giao th??ng.</p>
              <p>???	Tai n???n ?????i v???i l??i, ph??? xe: Thi???t h???i v??? th??n th??? do tai n???n li??n quan tr???c ti???p ?????n vi???c s??? d???ng chi???c xe ????.</p>
            </div>
            <div className="item">
              <h4>Lo???i tr??? b???o hi???m	</h4>
              <p>??? N??BH c?? h??nh ?????ng c??? ?? g??y thi???t h???i.</p>
              <p>??? N??BH tham gia ????nh nhau tr??? khi ???????c x??c nh???n ???? l?? tr?????ng h???p t??? v??? .</p>
              <p>??? L??i xe kh??ng c?? Gi???y ph??p l??i xe h???p l???, h??i th??? trong m??u c?? n???ng ????? c???n (Ch??? ??p d???ng v???i ng?????i ??i???u khi???n xe m??y).</p>
              <p>??? Ng?????i ???????c b???o hi???m b??? c???m ?????t ng???t, tr??ng gi??, b???nh t???t, ng??? ?????c th???c ??n ????? u???ng v?? s??? d???ng thu???c kh??ng theo ch??? d???n c???a c?? quan y t???, ho???c trong ng?????i c?? ch???t ma tu??, k??ch th??ch  kh??c m?? ph??p lu???t c???m s??? d???ng. </p>
              <p>??? Xe s??? d???ng ????? t???p l??i, ????? ??ua, ch???y th??? sau khi s???a ch???a.</p>
              <p>??? Tai n???n x???y ra ngo??i l??nh th??? CHXHCN Vi???t Nam.</p>
              <p>??? Chi???n tranh kh???ng b??? v?? c??c nguy??n nh??n t????ng t??? nh?? n???i chi???n b???o ?????ng, ????nh c??ng.</p>
           </div>
           <div className="item">
              <h4>B???o hi???m t??? nguy???n tai n???n t??i ph??? x???, ng?????i ng???i tr??n xe: 10 tri???u ?????ng/ng?????i/v???.</h4>
              </div>
          </BenifitStyle>




        </Modal>
        <Modal className="alert"
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content">
          <div className="md-head">
            <h4>Th??ng b??o</h4>
            <CloseButton  onClick={closeModal2}/>
          </div>
          <div className="md-body">
                <p>B???n mu???n h???y ????ng k?? mua b???o hi???m ?? t???</p>
                <ButtonStyle >
                    <div className="btn close" onClick={closeModal2}>
                      <Button btnText="????ng" type="secondary" />
                    </div>
                    <div className="btn accept">
                      <Button btnText="?????ng ??"/>
                    </div>
                </ButtonStyle>
            </div>
        </div>


        </Modal>
      <InsurranceStep>
        < div className="i-head">
            <Link to="/" className="backBtn">
                <BackButton />
              </Link>
            <Title titleType="" titleText="Mua b???o hi???m cho xe ?? t??"></Title>
              <Link to="" className="closeBtn"  >
                <CloseButton  onClick={openModal2}/>
              </Link>
        </div>
         <div className="i-body">
          <div className="progressBar">
            <ProgressBar percentage="thirty "/>
          </div>
          <div className="bl carSelect">
            <BlockTitle text="LO???I XE"  size="md"/>
            <div className="desc">Ch???n lo???i xe</div>
            <VehicleSelect />
            <form style={{ marginTop: "16px"}} className="noBg">
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Ch???n s??? ch??? ng???i / tr???ng t???i </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        </select>
                    </div>
                    <label>S??? ch??? / Tr???ng t???i</label>
                  </div>
              </div>
            </form>
          </div>
          <div className="bl insurranceTime">
            <BlockTitle text="TH???I GIAN B???O HI???M"  size="md"/>
            <form style={{ marginTop: "16px" }} className="noBg">
              <div className="form-groups datepicker isSelect" >
                    <div className="form-groups-w">
                         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      <label>Ng??y hi???u l???c</label>
                    </div>
                </div>
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Ch???n th???i gian </option>
                        <option>2 N??m</option>
                        <option>3 N??m</option>
                        <option>4 N??m</option>
                        <option>5 N??m</option>
                        <option>6 N??m</option>
                        </select>
                    </div>
                    <label>Th???i gian</label>
                  </div>
              </div>
            </form>
            <div className="infomation">
                <div className="item date "> Ng??y h???t h???n: <span>8/4/2021</span></div>
                <div className="item price"> Gi?? d??? ki???n: <span>480.700 VN??</span></div>
            </div>
          </div>
          <div className="bl volunteer">
            <div className="titleIcon">
              <BlockTitle text="B???o hi???m ng?????i ng???i tr??n xe"  size="md"/>
              <QuestionIcon onClick={openModal}/>
            </div>
            <form style={{ marginTop: "16px"}} className="noBg">
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Ch???n s??? ng?????i </option>
                        <option>Kh??ng tham gia</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        </select>
                    </div>
                    <label>S??? ng?????i</label>
                  </div>
              </div>
            </form>

          </div>
         </div>
         <ButtonFoatBottom BtnShow="twoButton" btnTextNext="TI???P T???C" btnTextPrev="QUAY L???I" LinkPrev="/insurrance-step2" LinkNext="/insurrancestep2b"/>
      </InsurranceStep>
    </div>
  )
}

export default Insurrancestep2aPage
