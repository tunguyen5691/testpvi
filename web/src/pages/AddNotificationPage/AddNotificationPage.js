import { Link, routes } from '@redwoodjs/router'

import BlockHeader from "../../components/BlockHeader"
import Button from "../../components/Button"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"
import styled from 'styled-components'

const AddNotificationPageStyle = styled.div`
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
    padding: 24px;
    .blBody {
      form {
        width: 100%;
        max-width: 100%;
        padding: 0;
        input {
          font-size: 15px;
          color: #555555;
          height: 42px;
          border: 1px solid #E0E0E0;
          width: 100%;
          outline: none;
          position: relative;
          background-color: transparent;
          z-index: 2;
          padding: 0 16px;
          border-radius: 4px;
          &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #839AB2;
          }
          &::-moz-placeholder { /* Firefox 19+ */
            color: #839AB2;
          }
          &:-ms-input-placeholder { /* IE 10+ */
            color: #839AB2;
          }
          &:-moz-placeholder { /* Firefox 18- */
            color: #839AB2;
          }
        }
      }
      .notiTitle {
        margin-bottom: 16px;
      }
      .editor {
        .ck-content {
          padding: 16px;
          min-height: 200px;
          p {
            font-size: 16px;
            margin: 0 ;
          }
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
const AddNotificationPage = () => {
  return (
    <>
   <DashboardLayoutPage >
        {/* <BlockHeader Text="DANH SÁCH ĐẠI LÝ" /> */}
        <AddNotificationPageStyle>
        <div className="bl-content">
            <div className="wrap">
              <div className="blTitle">CẬP NHẬT THÔNG BÁO</div>
              <div className="blBody">
                <div className="notiTitle">
                  <form>
                      <input placeholder="Tiêu đề"/>
                    </form>
                </div>
                <div className="editor">
                  <CKEditor
                      editor={ ClassicEditor }
                      data="<p>Nội dung</p>"
                      onReady={ editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          console.log( { event, editor, data } );
                      } }
                      onBlur={ ( event, editor ) => {
                          console.log( 'Blur.', editor );
                      } }
                      onFocus={ ( event, editor ) => {
                          console.log( 'Focus.', editor );
                      } }
                  />
                </div>
                <ButtonStyle >
                <div className="btn close" >
                    <Link to="./admin-agency-detail" >
                    <Button btnText="THOÁT" type="grey  adminBtn" />
                    </Link>
                    </div>
                    <div className="btn accept" >
                      <Button btnText="CẬP NHẬT" type=" adminBtn primary"/>
                    </div>
              </ButtonStyle>
              </div>
            </div>
        </div>
        </AddNotificationPageStyle>

    </DashboardLayoutPage>
    </>
  )
}

export default AddNotificationPage
