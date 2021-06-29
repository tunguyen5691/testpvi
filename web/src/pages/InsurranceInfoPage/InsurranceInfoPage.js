import { Link, routes } from '@redwoodjs/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import {ReactComponent as BackButton} from '../../assets/images/ArrowLeft.svg';
import BlockTitle from "../../components/BlockTitle"
import ButtonFoatBottom from "../../components/ButtonFoatBottom"
import {ReactComponent as DownloadIcon} from '../../assets/images/Download.svg';
import {ReactComponent as FileIcon} from '../../assets/images/File.svg';
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import React from 'react';
import  Title from "../../components/Title"
import styled from 'styled-components'

const InsurranceInfoPageStyle = styled.div`
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
    min-height: calc(100vh - 71px);
    background-color: #F0F2F6;
    padding: 32px 24px 64px;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
    .action {
      .item {
        display: flex;
        align-items: center;
        border-radius:  ${({ theme: { borderRadius } }) => borderRadius.lg};
        background-color: white;
        padding: 16px 20px;
        margin-bottom: 16px;
        box-shadow: 0px 1px 0px #E0E0E0;
        transition: all ease 0.3s;
        &:focus, &:hover {
          opacity: 0.6;
          cursor: pointer;
        }
        svg {

        }
        span {
          width: calc(100% - 24px);
          display: block;
          padding-left: 12px;
          font-weight: 500;

        }
      }
    }
    .swiper-container  {
      width: calc(100% + 48px);
      margin-left: -24px;
      padding: 48px 0;
      .swiper-slide  {
        text-align: center;
        img {
          width: 100%;
          max-width: 400px;
          margin: auto;
        }
      }

    }
    .swiper-button-prev ,.swiper-button-next  {
      position: absolute !important;
      z-index: 3 !important;
      outline: none;
      width: 40px;height: 40px;
      &:after {
          content:"";
          background: url('src/assets/images/ChevronRight.svg') center no-repeat;
          background-size: 100%;
          width: 40px;height: 40px;
      }
    }
    .swiper-button-next {
      right: 0;
    }
    .swiper-button-prev {
      left: 0;
      transform: rotate(180deg);
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
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const InsurranceInfoPage = () => {
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
          <Title titleType="" titleText="Phạm vi và quyền lợi"></Title>
          <div className="md-close" onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>

        <BenifitStyle>
          <div className="item">
              <BlockTitle text="BẢO HIỂM BẮT BUỘC XE CƠ GIỚI " size="md" />


            </div>
          <div className="item">
          <p>Từ ngày <strong>1/3/2021</strong> Chính phủ ra nghị định <strong>03/2021/NĐ-CP</strong> với thay đổi lớn là <strong>bảo hiểm bắt buộc xe ô tô được sử dụng ấn chỉ điện tử
              thay cho ấn chỉ giấy thông thường.</strong></p>
          </div>
          <div className="item">
          <h4>Đối tượng cần mua</h4>
              <p>•	Chủ xe ô-tô tham gia giao thông trên lãnh thổ nước Việt Nam, như:</p>
              <p>•	Xe ô tô, xe máy, xe tải, Container.</p>
              <p>•	Các loại xe kinh doanh: Taxi, Grab.</p>
              <p>•	Xe khách liên tỉnh…</p>

            </div>
          <div className="item">
              <h4>Quyền Lợi Bảo Hiểm TNDS Xe Ô Tô PVI.</h4>
              <p>•	Chủ xe ô-tô được PVI bồi hoàn số tiền phải trả cho người bị thiệt hại gồm</p>
              <p>•	Về người: 150 triệu đồng / 1 người / 1 vụ tai nạn.</p>
              <p>•	Về tài sản: </p>
              <p>100 triệu đồng / 1 vụ tai nạn ( xe ô tô ).</p>
              <p>50 triệu đồng / 1 vụ tai nạn ( xe mô tô ).</p>
            </div>
            <div className="item">
              <h4>Loại trừ bảo hiểm	</h4>
              <p>• Hành động cố ý gây thiệt hại của chủ xe, lái xe hoặc của người bị thiệt hại.</p>
              <p>• Lái xe gây tai nạn cố ý bỏ chạy không thực hiện trách nhiệm dân sự của chủ xe, lái xe cơ giới.</p>
              <p>• Lái xe không có Giấy phép lái xe hoặc Giấy phép lái xe không phù hợp đối với loại xe cơ giới bắt buộc phải có Giấy phép lái xe. Trường hợp lái xe bị tước quyền sử dụng Giấy phép lái xe có thời hạn hoặc không thời hạn thì được coi là không có Giấy phép lái xe.</p>
              <p>• Thiệt hại gây ra hậu quả gián tiếp như: giảm giá trị thương mại, thiệt hại gắn liền với việc sử dụng và khai thác tài sản bị thiệt hại.</p>
              <p>• Thiệt hại đối với tài sản bị mất cắp hoặc bị cướp trong tai nạn.</p>
              <p>• Chiến tranh, khủng bố, động đất.</p>
              <p>• Thiệt hại đối với tài sản đặc biệt bao gồm: vàng, bạc, đá quý, các loại giấy tờ có giá trị như tiền, đồ cổ, tranh ảnh quý hiếm, thi hài, hài cốt.</p>
           </div>
           <div className="item">
              <h4>Bảo hiểm tự nguyện tai nạn tài phụ xế, người ngồi trên xe: 10 triệu đồng/người/vụ	</h4>
              </div>
          </BenifitStyle>




        </Modal>
      <InsurranceInfoPageStyle >
        <div className="head">
          <Link to="/" className="backBtn">
              <BackButton />
            </Link>
            <Title titleType="" titleText="Bảo hiểm xe máy"></Title>
          </div>
        <div className="body">
          <BlockTitle text="GIỚI THIỆU CHUNG" />
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation

          >
            <SwiperSlide><img src="src/assets/images/Slide1.png" />
            </SwiperSlide>
            <SwiperSlide><img src="src/assets/images/Slide2.png" /></SwiperSlide>
            <SwiperSlide><img src="src/assets/images/Slide3.png" /></SwiperSlide>
          </Swiper>
              <div className="action">
                  <div className="item rightRange" onClick={openModal}>
                        <FileIcon/>
                        <span>Phạm vi và quyền lợi</span>
                  </div>
                  {/* <div className="item downloadPDF">
                        <DownloadIcon/>
                        <span>Tải bảng gái PDF</span>
                  </div> */}
              </div>
          </div>
          <ButtonFoatBottom BtnShow="" btnTextNext="MUA NGAY" LinkNext="/insurrance-step1"/>
        </InsurranceInfoPageStyle>
    </div>
  )
}

export default InsurranceInfoPage
