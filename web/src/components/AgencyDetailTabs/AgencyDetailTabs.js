import BlockTitle from "../../components/BlockTitle"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import Icon from "../../components/Icon"
import { Link } from "@redwoodjs/router";
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import Pagination from "../../components/Pagination"
import React from 'react';
import TableButton  from "../../components/TableButton"

const ordersList = [
  {
      id : 1,
      agencyName: "Nguyễn Văn An",
      bienso: "51F-824.46",
      type: "BH bắt buộc xe ô tô",
      status: "Đã thanh toán",
      statusClass: "paid"
  },{
    id : 2,
    agencyName: "Nguyễn Văn An",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe máy",
    status: "Đang chờ",
    statusClass: "waiting"
  },
  {
    id : 3,
    agencyName: "Nguyễn Văn An",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe ô tô",
    status: "Hết hạn",
    statusClass: "expired"
  },
  {
    id : 4,
    agencyName: "Nguyễn Văn An",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe máy",
    status: "Sắp hết hạn",
    statusClass: "toExpired"
  },

]
const partnerList = [
  {
      id : 1,
      partnerName: "Nguyễn Thiên Tứ",
      revenue: "20.000.000.000.000",
      car: "10.000.000.000.000",
      bike: "10.000.000.000.000",
  },
  {
    id : 2,
    partnerName: "Lê Tán Tài",
    revenue: "20.000.000.000.000",
    car: "10.000.000.000.000",
    bike: "10.000.000.000.000",
  },
  {
    id : 3,
    partnerName: "Bành thị lỗ liễu",
    revenue: "20.000.000.000.000",
    car: "10.000.000.000.000",
    bike: "10.000.000.000.000",
  },
  {
    id : 3,
    partnerName: "Lùi văn Tới",
    revenue: "20.000.000.000.000",
    car: "10.000.000.000.000",
    bike: "10.000.000.000.000",
  },

]

const AgencyDetailTabs = ({ list = ordersList , list2 = partnerList }) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

      this.setState({ activeTab: tab });
    };
    render(){

      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}

          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>

        </div>
      );
    }
  }

  const TabButtons = ({buttons, changeTab, activeTab}) =>{

    return(
      <div className="tab-buttons">
      {buttons.map(button =>{
        return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
      })}
      </div>
    )
  }

  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
  return (
    <div className="tabs adminTabs ">
      <Modal className="alert"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content admin">
          <div className="md-head">
            <BlockTitle  text="THÔNG TIN ĐẠI LÝ"/>
            <CloseButton  onClick={closeModal}/>
          </div>
          <div className="md-body">
              <div className="bl-content scroll">
                <div className="images two" style={{marginBottom: "16px"}}>
                      <img src="src/assets/images/mattruoc.png" />
                      <img src="src/assets/images/matsau.png" />
                    </div>
                    <form autocomplete="off">


                      <div className="form-groups ">
                        <div className="form-groups-w">
                          <label>Họ tên(*)</label>
                          <input type="text" placeholder=" " value="Nguyễn Văn A"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                        <label>Địa chỉ nhà(*)</label>
                        <input type="text" placeholder=" " value="46 Nguyễn Huệ, P Bến Nghé, HCM "/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Email(*)</label>
                          <input type="email" placeholder=" " value="dailyabc@gmai.com"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Tài khoản Ngân hàng</label>
                          <input type="text" placeholder=" " value="Vietin bank"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Chi nhánh</label>
                          <input type="text" placeholder=" " value="CN Bến Nghé"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                         <label>Tên thụ hưởng</label>
                          <input type="text" placeholder=" " value="Nguyen Van A"/>
                        </div>
                    </div>
                    <div className="form-groups ">
                        <div className="form-groups-w">
                        <label>Số tài khoản</label>
                          <input type="text" placeholder=" " value="1002132943294234"/>
                        </div>
                    </div>


                  </form>
              </div>

            </div>
        </div>


        </Modal>
     <Tabs>
        <Tab label="Danh sách đơn hàng">
        <div className="adminTable">
            <table>
                <thead>
                    <tr>
                        <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TÊN CHỦ XE</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>BIỂN SỐ</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>LOẠI BẢO HIỂM</span>
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
                          {item.agencyName}
                        </td>
                        <td className="bienso">
                          {item.bienso}
                        </td>
                        <td className="type">
                         {item.type}

                        </td>
                        <td className={`status ${item.statusClass}`}>
                         {item.status}

                        </td>

                        <td className="action">
                           <div onClick={openModal}>
                           <TableButton btnText="Chi tiết"  iconURl="src/assets/images/eye.svg"/>
                           </div>

                        </td>
                    </tr>
                    ))
                  }


              </tbody>
          </table>
          </div>
          <Pagination />
      </Tab>
      <Tab label="Danh sách CTV (20)">
      <div className="adminTable">
          <table>
              <thead>
                  <tr>
                      <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>CTV</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">
                          <span>DOANH THU (VNĐ)</span>
                          <Icon

                          iconURl="src/assets/images/sort.svg"
                          iconSize="size-sm"
                          iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">
                          <span>BẢO HIỂM XE Ô TÔ</span>
                          <Icon

                          iconURl="src/assets/images/sort.svg"
                          iconSize="size-sm"
                          iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">
                          <span>BẢO HIỂM XE MÁY</span>
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
                      list2.map((item) => (
                          <tr key={item.id}>
                              <td className="stt">
                                  {item.id}
                              </td>
                              <td className="partnerName">
                                  {item.partnerName}
                              </td>
                              <td className="revenue">
                                  {item.revenue}
                              </td>
                              <td className="car">
                                  {item.car}
                              </td>
                              <td className="bike">
                                  {item.bike}
                              </td>
                              <td className="action" >
                                <Link to="./partner-detail">
                                <TableButton btnText="Chi tiết"  iconURl="src/assets/images/eye.svg"/>
                                </Link>
                              </td>
                          </tr>
                      ))
                  }

              </tbody>
          </table>
          </div>
          <Pagination />
      </Tab>
    </Tabs>
    </div>
  )
}

export default AgencyDetailTabs
