import { Link, routes } from '@redwoodjs/router'

import BlockHeader from "../../components/BlockHeader"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import DashboardLayoutPage from "../../pages/DashboardLayoutPage"
import Icon from "../../components/Icon"
import TableButton from "../../components/TableButton"
import styled from 'styled-components'

const NotiList = [
  {
      id : 1,
      name: "Thông báo nâng cấp hệ thống",
      date: "20/05/2021",


  },
  {
    id : 2,
    name: "Thông báo gói bảo hiểm 2 trong 1",
    date: "20/05/2021",

  },
  {
    id : 3,
    name: "Thông báo covid",
    date: "20/05/2021",

  },
  {
    id : 3,
    name: "Thông báo quý 1",
    date: "20/05/2021",

  },

]
const SwitchStyle = styled.div`
  .switch  {
    width: 65px;
    height: 20px;
    min-height: 20px !important;
    border-radius: 50px;
    &:hover {
      cursor: pointer;
    }
    .switch-handle {
      width: 17px;
      height: 17px;
      background-color: white !important;
      display: block;
      transform: translateX(-9px);
      border-radius: 100%;
    }
    .btn  {
      font-size: 12px;

    }
    &.on {
      background-color:${({ theme: { colors } }) => colors.primary};
      border:1px solid ${({ theme: { colors } }) => colors.primary};
      span {
        color: white;
        &.switch-on {
          padding-left: 20px;

        }
      }
    }
    &.off {
      background-color:white;
      border:1px solid #E0E0E0;
      span {
        color: #909090;
        &.switch-off {
          padding-left: 30px;
        }
        &.switch-handle {
          transform: translateX(10px);
          background-color: #909090 !important;
        }
      }
    }
  }
`
const AdminNotificationPage = ({list = NotiList}) => {
  return (
    <>
     <DashboardLayoutPage >
      <BlockHeader Text="DANH SÁCH THÔNG BÁO" isBtn="isBtn"/>
      <div className="bl-content">
      <div className="adminTable">
            <table>
                <thead>
                    <tr>
                      <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TÊN THÔNG BÁO</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>NGÀY TẠO</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                      <div className="wrap">

                            <span>TRẠNG THÁI</span>
                            <Icon
                                iconURl="src/assets/images/sort.svg"
                                iconSize="size-sm"
                                iconColor=""
                            />
                            </div>
                      </th>
                      <th>

                      </th>

                  </tr>
              </thead>
              <tbody>
                  {
                    list.map((item) => (
                      <tr key={item.id}>
                        <td className="stt">
                         {item.id}
                        </td>
                        <td className="name">
                          {item.name}
                        </td>
                        <td className="bienso">
                          {item.date}
                        </td>
                        <td className="status">
                          <SwitchStyle>
                             <BootstrapSwitchButton checked={true} onstyle="outline-primary" offstyle="outline-secondary" onlabel="Bật" offlabel="Tắt"/>
                          </SwitchStyle>
                        </td>
                        <td className="action">
                           <Link to="./add-notification" >
                            <TableButton btnText="Chi tiết" iconURl="src/assets/images/eye.svg"/>
                            </Link>
                        </td>
                    </tr>
                    ))
                  }


              </tbody>
          </table>
          </div>
        </div>
    </DashboardLayoutPage>

    </>
  )
}

export default AdminNotificationPage
