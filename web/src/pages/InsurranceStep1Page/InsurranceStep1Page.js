import { Link, routes } from '@redwoodjs/router'

import {ReactComponent as BackButton} from '../../assets/images/ArrowLeft.svg';
import ButtonFoatBottom from "../../components/ButtonFoatBottom"
import {ReactComponent as CameraIcon} from "../../assets/images/Camera.svg"
import {ReactComponent as CloseButton} from '../../assets/images/Close.svg';
import { ReactComponent as EditIcon } from '../../assets/images/Edit.svg';
import Infographic from "../../components/Infographic"
import Title from "../../components/Title"
import UploadComp from "../../components/UploadComp"
import styled from 'styled-components'

const InsurranceStep = styled.div`


    .i-body {
      background-color: #F0F2F6;
      padding: 32px 24px 86px;
      border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
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
const InsurranceStep1Page = () => {
  return (
    <div className="mobile">
      <InsurranceStep>
        <div className="i-head">
          <Link to="/" className="backBtn">
              <BackButton />
            </Link>
          <Title titleType="" titleText="Gói bảo hiểm cho xe ô tô"></Title>
            <Link to="/home" className="closeBtn">
              <CloseButton />
            </Link>
        </div>
        <div className="i-body">
            <Infographic imgUrl="src/assets/images/img1.svg" />
          <div className="description">
              <h4>Chụp ảnh mặt trước giấy đăng ký xe của bạn</h4>
              <p>Để hệ thống điền thông tin giúp ban</p>
          </div>
          <UploadComp description="Giấy đăng ký xe của bạn" />
          <div className="item">
            <TakeIdImg >
                <span>CHỤP LẠI ẢNH</span>
              <CameraIcon />
              <input type="file" />
            </TakeIdImg>
          </div>
          <Link to={"./insurrance-step2"} >
            <TakeIdImg >

                <span>TỰ ĐIỀN THÔNG TIN</span>
              <EditIcon />

            </TakeIdImg>
            </Link>

        </div>
        <ButtonFoatBottom BtnShow="" btnTextNext="TIẾP TUC" LinkNext="/insurrance-step2"/>
      </InsurranceStep>

    </div>
  )
}

export default InsurranceStep1Page
