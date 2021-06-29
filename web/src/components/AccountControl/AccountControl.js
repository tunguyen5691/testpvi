import Avata from '../../components/Avata'
import styled from 'styled-components'

const AccountControlStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 32px;
  &:before {
    width: 0;
    height: 0;
    display: block;
    content: "";
    border-top: 7px solid #919191;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid transparent;
    position: absolute;
    top: 55%;
    right: 0px;
    transform: translateY(-50%);
    border-radius: 2px;
  }
  .role {
    font-size: 14px;
    font-weight: 500;
    margin-left: 16px;
    @media (max-width: 1023px) {
      display: none;
    }
  }
    .accountControlList {
      box-shadow: 0px 0px 0px #E0E0E0;
    }
`
const AccountControl = () => {
  return (
    <AccountControlStyle className="hasDropdownBlock">
      <Avata Background="src/assets/images/avataDefault.svg" />
      <div className="role">Admin</div>
      <div className="accountControlList dropdownBlock size-md">
          <ul>
            <li>
              <a >Đăng xuất</a>
            </li>
          </ul>
        </div>
    </AccountControlStyle>
  )
}

export default AccountControl
