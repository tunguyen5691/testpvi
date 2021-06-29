import { Link, routes } from '@redwoodjs/router'

import BlockHeader from "../../components/BlockHeader"
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"
import FilterDate  from "../../components/FilterDate"
import OddersTabs  from "../../components/OddersTabs"

const AdminOrderlistPersonalPage = () => {
  return (
    <DashboardLayoutPage >
      <BlockHeader Text="DANH SÁCH ĐƠN HÀNG CÁ NHÂN" />
      <FilterDate />
      <div className="bl-content">
        <OddersTabs />
      </div>
    </DashboardLayoutPage>
  )
}

export default AdminOrderlistPersonalPage
