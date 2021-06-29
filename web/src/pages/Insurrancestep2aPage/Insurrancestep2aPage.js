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
          <Title titleType="" titleText="Phạm vi và quyền lợi"></Title>
          <div className="md-close" onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>

        <BenifitStyle>
          <div className="item">
              <BlockTitle text="BẢO HIỂM TAI NẠN NGƯỜI NGỒI TRÊN XE, LÁI XE, PHỤ XE" size="md" />


            </div>
          <div className="item">
          <p>Bảo hiểm tai nạn người ngồi trên xe bảo hiểm cho lái, phụ xe và nhữngngười khác được chở trên xe bị thiệt hại về thân thể do tai nạn khi đang trên xe, lên xuống xe trong quá trình xe đang tham gia giao thông.</p>
          </div>
          <div className="item">
          <h4>Đối tượng cần mua</h4>
              <p>Lái xe, phụ xe và những người khác được chở trên xe.</p>

            </div>
          <div className="item">
              <h4>Phạm Vi Bảo Hiểm</h4>
              <p>•	Tai nạn đối với người được chở trên xe: Thiệt hại thân thể do tai nạn khi đang ở trên xe, lên xuống xe trong quá trình xe đang tham gia giao thông.</p>
              <p>•	Tai nạn đối với lái, phụ xe: Thiệt hại về thân thể do tai nạn liên quan trực tiếp đến việc sử dụng chiếc xe đó.</p>
            </div>
            <div className="item">
              <h4>Loại trừ bảo hiểm	</h4>
              <p>• NĐBH có hành động cố ý gây thiệt hại.</p>
              <p>• NĐBH tham gia đánh nhau trừ khi được xác nhận đó là trường hợp tự vệ .</p>
              <p>• Lái xe không có Giấy phép lái xe hợp lệ, hơi thở trong máu có nồng độ cồn (Chỉ áp dụng với người điều khiển xe máy).</p>
              <p>• Người được bảo hiểm bị cảm đột ngột, trúng gió, bệnh tật, ngộ độc thức ăn đồ uống và sử dụng thuốc không theo chỉ dẫn của cơ quan y tế, hoặc trong người có chất ma tuý, kích thích  khác mà pháp luật cấm sử dụng. </p>
              <p>• Xe sử dụng để tập lái, để đua, chạy thử sau khi sửa chữa.</p>
              <p>• Tai nạn xảy ra ngoài lãnh thổ CHXHCN Việt Nam.</p>
              <p>• Chiến tranh khủng bố và các nguyên nhân tương tự như nội chiến bạo động, đình công.</p>
           </div>
           <div className="item">
              <h4>Bảo hiểm tự nguyện tai nạn tài phụ xế, người ngồi trên xe: 10 triệu đồng/người/vụ.</h4>
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
            <h4>Thông báo</h4>
            <CloseButton  onClick={closeModal2}/>
          </div>
          <div className="md-body">
                <p>Bạn muốn hủy đăng ký mua bảo hiểm ô tô?</p>
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
      <InsurranceStep>
        < div className="i-head">
            <Link to="/" className="backBtn">
                <BackButton />
              </Link>
            <Title titleType="" titleText="Mua bảo hiểm cho xe ô tô"></Title>
              <Link to="" className="closeBtn"  >
                <CloseButton  onClick={openModal2}/>
              </Link>
        </div>
         <div className="i-body">
          <div className="progressBar">
            <ProgressBar percentage="thirty "/>
          </div>
          <div className="bl carSelect">
            <BlockTitle text="LOẠI XE"  size="md"/>
            <div className="desc">Chọn loại xe</div>
            <VehicleSelect />
            <form style={{ marginTop: "16px"}} className="noBg">
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Chọn số chỗ ngồi / trọng tải </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        </select>
                    </div>
                    <label>Số chỗ / Trọng tải</label>
                  </div>
              </div>
            </form>
          </div>
          <div className="bl insurranceTime">
            <BlockTitle text="THỜI GIAN BẢO HIỂM"  size="md"/>
            <form style={{ marginTop: "16px" }} className="noBg">
              <div className="form-groups datepicker isSelect" >
                    <div className="form-groups-w">
                         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      <label>Ngày hiệu lực</label>
                    </div>
                </div>
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Chọn thời gian </option>
                        <option>2 Năm</option>
                        <option>3 Năm</option>
                        <option>4 Năm</option>
                        <option>5 Năm</option>
                        <option>6 Năm</option>
                        </select>
                    </div>
                    <label>Thời gian</label>
                  </div>
              </div>
            </form>
            <div className="infomation">
                <div className="item date "> Ngày hết hạn: <span>8/4/2021</span></div>
                <div className="item price"> Giá dự kiến: <span>480.700 VNĐ</span></div>
            </div>
          </div>
          <div className="bl volunteer">
            <div className="titleIcon">
              <BlockTitle text="Bảo hiểm người ngồi trên xe"  size="md"/>
              <QuestionIcon onClick={openModal}/>
            </div>
            <form style={{ marginTop: "16px"}} className="noBg">
              <div className="form-groups isSelect">
                  <div className="form-groups-w">
                  <div className="selectWrap noBorder">
                    <select>
                        <option selected disabled>Chọn số người </option>
                        <option>Không tham gia</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        </select>
                    </div>
                    <label>Số người</label>
                  </div>
              </div>
            </form>

          </div>
         </div>
         <ButtonFoatBottom BtnShow="twoButton" btnTextNext="TIẾP TỤC" btnTextPrev="QUAY LẠI" LinkPrev="/insurrance-step2" LinkNext="/insurrancestep2b"/>
      </InsurranceStep>
    </div>
  )
}

export default Insurrancestep2aPage
