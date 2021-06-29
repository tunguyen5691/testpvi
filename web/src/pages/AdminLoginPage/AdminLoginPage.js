import { Link, routes } from '@redwoodjs/router'

import Button from "../../components/Button"
import Logo from "../../components/Logo/logo"
import styled from 'styled-components'

const AdminLoginStyle = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url('src/assets/images/bgWelcomepc.png') center no-repeat;
  background-size: cover;
  @media (max-width: 1023px) {
    padding: 0
  }
  .logo {
    .txt {
      font-size: 20px;
      color: white;
      text-align: center;
      font-family: 'Montserrat';
      font-weight: bold;
      margin-top: -16px;
    }
    margin-bottom: 24px;
  }

`
const AdminLoginPage = () => {
  return (
    <>
     <AdminLoginStyle>
        <div className="wrap">
          <div className="logo">
              <Logo />
                <div className="txt">
                    <span>TRANG QUẢN TRỊ</span>
                </div>
          </div>
          <div className="loginForm">
          <form autocomplete="off">
           <div className="form-groups ">
              <div className="form-groups-w">
                <input type="text" placeholder=" "/>
                <label>Tên đăng nhập</label>
              </div>
              </div>
            <div className="form-groups ">
              <div className="form-groups-w">
                <input type="password" placeholder=" "/>
                <label>Mật khẩu</label>
              </div>
           </div>
            <div style={{ width: "100%"}} >
              <Button btnText="ĐĂNG NHẬP " type="adminBtn"/>
            </div>
        </form>
          </div>
          </div>
      </AdminLoginStyle>
    </>
  )
}

export default AdminLoginPage
