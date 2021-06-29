import AgentHead from "../../components/AgentHead"
import Button from "../../components/Button"
import InsurranceItem from "../../components/InsurranceItem"
import InsurrancePackageList from "../../components/InsurrancePackageList"
import { Link } from "@redwoodjs/router";
import { ReactComponent as PhoneIcon } from '../../assets/images/Phone.svg';
import styled from 'styled-components'

const HomeStyle = styled.div`
  padding: 24px 0 0px;
  .insurranceInfo {
    .iconlist {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
  }
`

const HomeComp = () => {
  return (
    <HomeStyle>
      <AgentHead  btnText="Tài khoản" linkUrl="./account"/>

      <div className="insurranceInfo">
        <div className="iconlist">
          <Link to={"./revenue"}>
            < InsurranceItem  iconUrl="src/assets/images/Money.svg" text="Doanh thu"/>
          </Link>
          <Link to={"./partner"}>
          <InsurranceItem  iconUrl="src/assets/images/Team.svg" text="Danh sách CTV"/>
          </Link>
          <Link to={"./qr-code"}>
          <InsurranceItem  iconUrl="src/assets/images/QR-Code.svg" text="QR Code"/>
          </Link>

        </div>
        <InsurrancePackageList size="sm"/>
      </div>
    </HomeStyle>
  )
}

export default HomeComp
