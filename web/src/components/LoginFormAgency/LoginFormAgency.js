import Button from "../../components/Button"
import SubForm from "../../components/SubForm"

const LoginFormAgency = () => {
  return (
    <div>
       <form autocomplete="off">
           <div className="form-groups">
              <div className="form-groups-w">
                <input type="number" placeholder=" "/>
                <label>Số điện thoại</label>
              </div>
           </div>
           <div className="form-groups">
              <div className="form-groups-w">
                <input type="password" placeholder=" "/>
                <label>Mật khẩu</label>
              </div>
           </div>
            <div style={{ width: "100%"}} >
              <Button btnText="ĐĂNG NHẬP" />
            </div>
      </form>
      <SubForm Text="Đăng ký" LinkText="ĐẠI LÝ" RoutePath="/agency-register"/>

    </div>
  )
}

export default LoginFormAgency
