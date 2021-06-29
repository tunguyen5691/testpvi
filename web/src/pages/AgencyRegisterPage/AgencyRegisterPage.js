import { Link, routes } from '@redwoodjs/router'

import {ReactComponent as BackButton} from '../../assets/images/ArrowLeft.svg';
import Button from "../../components/Button"
import Policy from "../../components/Policy"
import Title from "../../components/Title";
import styled from 'styled-components';

const AgenctyRStyle = styled.div`
  position: relative;
  height: 100vh;
  min-height: 550px;
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
    position: absolute;
    bottom: calc(1rem + env(safe-area-inset-bottom));
    width: 100%;
    left: 0;
    z-index: 2;
  }
`
const AgencyRegisterPage = () => {
  return (
    <div className="mobile">
      <AgenctyRStyle>
        <div className="head">
          <Link to="/" className="backBtn">
            <BackButton />
          </Link>
          <Title titleType="capital" titleText="ĐĂNG KÝ ĐẠI LÝ"></Title>
        </div>
        <div className="body">
            <form autocomplete="off">
              <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="number" placeholder=" "/>
                  <label>Số điện thoại</label>
                </div>
            </div>
            <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="password" placeholder=" "/>
                  <label>Mật khẩu</label>
                </div>
            </div>
            <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="password" placeholder=" "/>
                  <label>Nhập lại mật khẩu</label>
                </div>
            </div>
              {/* <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="text" placeholder=" "/>
                  <label>Họ tên(*)</label>
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
                <div className="selectWrap">
                  <select>
                      <option selected disabled>Chọn lựa</option>
                      <option>Hồ Chí Minh</option>
                      <option>Bến tre</option>
                      <option>Bình Dương</option>
                      <option>Hà Nội</option>
                      </select>
                  </div>
                  <label>Tỉnh / Thành phố(*)</label>
                </div>
            </div>
            <div className="form-groups isSelect isHalf">
                <div className="form-groups-w">
                <div className="selectWrap">
                  <select>
                      <option selected disabled>Chọn lựa</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      </select>
                  </div>
                  <label>Quận / Huyện</label>
                </div>
            </div>
            <div className="form-groups isSelect isHalf">
                <div className="form-groups-w">
                <div className="selectWrap">
                  <select>
                      <option selected disabled>Chọn lựa</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      </select>
                  </div>
                  <label>Phường / Xã</label>
                </div>
            </div>
            <div className="form-groups ">
                <div className="form-groups-w">
                  <input type="number" placeholder=" "/>
                  <label>Địa chỉ nhà(*)</label>
                </div>
            </div> */}

            <div style={{width: "100%" }} >
                <Link to={'/agency-register-step2'}>
                  <Button btnText="TIẾP THEO"/>
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

export default AgencyRegisterPage
