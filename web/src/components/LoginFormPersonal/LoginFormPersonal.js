import { Link, routes } from '@redwoodjs/router'

import Button from "../../components/Button"
import SubForm from "../../components/SubForm"
import styled from 'styled-components'

const AgencyRegister = styled.div`
  width: calc(100% - 40px);
  margin-left: 20px;
  text-align: center;
  padding: 16px ;
  color: white;
  background-color: #D2E2FF;
  border-radius : 0 0 ${({ theme: { borderRadius } }) => borderRadius.lg}  ${({ theme: { borderRadius } }) => borderRadius.lg} ;
  font-size: 13px;
  color:  ${({ theme: { colors } }) => colors.base};
  a {
    color:  ${({ theme: { colors } }) => colors.secondary};
    padding-left: 6px;
    font-weight: bold;
    text-decoration: none;
    transition: all ease 0.3s;
    &:hover, &:focus {
      opacity: 0.8;
    }
  }
`
const LoginFormPersonal = () => {
  return (
    <div>
        <form autocomplete="off">
           <div className="form-groups error">
              <div className="form-groups-w">
                <input type="number" placeholder=" "/>
                <label>Số điện thoại</label>
              </div>
           </div>
            <div style={{ width: "100%"}} >
              <Button btnText="MUA NGAY"/>
            </div>
        </form>
        <SubForm Text="Đăng ký" LinkText="ĐẠI LÝ" RoutePath="/agency-register"/>

    </div>
  )
}

export default LoginFormPersonal
