import Button from "../../components/Button"
import SubForm from "../../components/SubForm"

const AgencyFormRegister = () => {
  return (
    <div>
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
            <Button btnText="TIẾP THEO"/>
          </div>
      </form>
        {/* <SubForm Text="Đã có tài khoản." LinkText="ĐĂNG NHẬP" RoutePath="/login"/> */}
    </div>
  )
}

export default AgencyFormRegister
