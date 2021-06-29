import Button from "../../components/Button"
import {ReactComponent as CameraIcon} from "../../assets/images/Camera.svg"
import UploadComp from "../../components/UploadComp"
import styled from 'styled-components';

const UploadCmndStyle = styled.div`
  background-color: rgba($color-third, .2);
  position: relative;
  overflow: hidden;
  border: 1px solid $color-second;
  max-width: 414px;
  width: 100%;
  margin: auto;
  .upload {
    padding: 32px 20px;

  }








`
const UploadCmnd = () => {
  return (
    <UploadCmndStyle>

        <div className="upload ">
            <UploadComp blTitle="Ảnh mặt trước" description="Mặt trước CMND của bạn" status=""/>
            <div style={{marginBottom: "16px"}}></div>
            <UploadComp blTitle="Ảnh mặt sau" description="Mặt sau CMND của bạn"/>

        <div style={{ width: "100%", marginTop: "16px" }} className="button" >
              <Button btnText="ĐỒNG Ý"/>
            </div>
        </div>


    </UploadCmndStyle>
  )
}

export default UploadCmnd
