import { Link, routes } from '@redwoodjs/router'

import AgencyTabs from "../../components/AgencyTabs"
import BlockHeader from "../../components/BlockHeader"
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"

const AdminAgencyListPage = () => {
  return (

    <DashboardLayoutPage >
      <BlockHeader Text="DANH SÁCH ĐẠI LÝ" />
      <div className="bl-content">
          {/* <AdminTabs tabText1="Đã duyệt" tabText2="Chờ duyệt"/> */}
          <AgencyTabs />
        </div>
    </DashboardLayoutPage>

  )
}

export default AdminAgencyListPage
