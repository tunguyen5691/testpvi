import {ReactComponent as CameraIcon} from "../../assets/images/Camera.svg"
import styled from 'styled-components';

const UploadCompStyle = styled.div`

  .uploadItem {
    .bl-title {
      font-weight: 500;
      text-align: center;
      color: ${({ theme: { colors } }) => colors.secondary};
      margin-bottom: 16px;
    }
    .upload-img {
      border: 1px dashed #E0E0E0;
      border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ;
      overflow: hidden;
      background-color: white;
      .imgUploaded {
        display: none;
        position: relative;
        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          opacity: 0;;
        }
        img {
          width: 100%;
          display: block;

        }
      }
      &.uploaded {
        &::before {
          padding-top: 0;
        }
        .upload-w {
          display: none;

        }
        .imgUploaded {
          display: block;
        }
      }
      .upload-w {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
      }
      .imgUploaded {
        display: none;
        position: relative;
        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          opacity: 0;;
        }
        img {
          width: 100%;
          display: block;

        }
      }
      .btn-upload {
        position: relative;
        height: 100%;
        input {
          width: 100%;
          height: 100%;
          opacity: 0;
          position: absolute;
          z-index: 2;
        }


        .icon-upload {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 100%;
          padding: 15px;
          border: 1px dashed rgba($color-second, .5);
          border-radius: 10px;
          transition: all ease 0.3s;
          z-index: 1;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          svg {
            width: 60px;
            height: 50px;
          }
          .Text {
            width: 100%;
            padding-top: 12px;
            .Title {
              font-weight: 500;
              text-align: center;
              color: #555555;
              font-size: 18px;
            }
            span {
              display: block;
              text-align: center;
              font-size: 14px;
              color: ${({ theme: { colors } }) => colors.placeholder};
            }
          }

        &:focus ,&:hover {
          border: 1px solid rgba($color-second, .5);
        }


        }
      }

    }
  }
`

const UploadComp = ({ blTitle, description , status  }) => {
  return (
    <UploadCompStyle>
      <div className="uploadItem front" >
          <div className="bl-title">{blTitle}</div>
          <div className={`upload-img aspectRatio aspectRatio--3-4 ani ${status}`  } >
              <div className="upload-w">
                  <div className="btn-upload">
                    <input type="file" />
                    <div className="icon-upload">
                          <CameraIcon />
                          <div class="Text">
                            <div className="Title">Chụp ảnh</div>
                            <span>{description}</span>
                          </div>
                    </div>
                  </div>
              </div>
              <div className="imgUploaded">
                  <img src="src/assets/images/mattruoc.png" alt="" />
                  <input type="file" />
              </div>
          </div>
        </div>
    </UploadCompStyle>
  )
}

export default UploadComp
