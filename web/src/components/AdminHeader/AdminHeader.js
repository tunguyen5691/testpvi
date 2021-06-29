import AccountControl from "../../components/AccountControl"
import { ReactComponent as AdminLogo } from '../../assets/images/adminLogo.svg';
import styled from 'styled-components'

const AdminHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px 8px 16px;
  background-color: white;
  align-items: center;
  @media (max-width: 1023px) {
    padding: 0px 24px 0px 8px;
  }
  .adminLogo {
    svg {
      display: block;
      width: 100%;
      max-width: 200px;
      @media(max-width: 1023px) {
        max-width: 150px;
      }
    }
  }
`



const AdminHeader = () => {
  return (
    <AdminHeaderStyle>
      <div className="adminLogo">
          <AdminLogo />
      </div>
      <AccountControl/>
    </AdminHeaderStyle>
  )
}

export default AdminHeader
