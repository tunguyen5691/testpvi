import { Link, routes } from '@redwoodjs/router'
import Title from "../../components/Title"
import styled from 'styled-components'
import { ReactComponent as QrImg } from '../../assets/images/qr.svg';
import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';

import Button from "../../components/Button"

const QrCodePageStyle = styled.div`
    .i-body {

      .bl {
        padding:  24px ;
          border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ;
          background-color: white;
        .btn {
          width: 60%;
          margin: 16px auto 0;
        }
        .title {
          text-align: center;
          font-weight: 500;
          font-size: 18px;
          color : ${({ theme: { colors } }) => colors.secondary};
          margin-bottom: 24px;
        }
        .link {
          text-align: center;

          a {
            color : ${({ theme: { colors } }) => colors.secondary};
            font-size: 14px;
          }
        }
        &.bl-code {
          .qr {
            text-align: center;
            svg {
              width: 100%;
              max-width: 200px;
              margin: auto;
            }
          }
        }
      }
    }
`

const QrCodePage = () => {
  return (
    <div className="mobile">
      <QrCodePageStyle>
        <div className="i-head">
            <Link to="/" className="backBtn">
                <BackButton />
              </Link>
            <Title titleType="" titleText="QR Code"></Title>
          </div>
          <div className="i-body">
              <div className="bl bl-code box-shadow" style={{ marginBottom: "16px"}}>
                 <div className="title"> Mã QR Code giới thiệu</div>
                 <div className="qr">
                    <QrImg />
                 </div>
                 <div className="btn">
                    <Button btnText="Tải ảnh QR code"/>
                 </div>
              </div>
              <div className="bl referalLink box-shadow">
                <div className="title"> Đường dẫn giới thiệu </div>
                <div class="link">
                  <a href="https://baohiempvi.com/caidat" target="_blank">https://baohiempvi.com/caidat</a>
                </div>
                <div className="btn">
                    <Button btnText="Sao chép đường dẫn"/>
                 </div>
              </div>
          </div>
      </QrCodePageStyle>

    </div>
  )
}

export default QrCodePage
