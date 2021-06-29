import BlockTitle from "../../components/BlockTitle"
import Button from "../../components/Button"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import FilterDate  from "../../components/FilterDate"
import Icon from "../../components/Icon"
import { Link } from "@redwoodjs/router";
import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import Pagination from "../../components/Pagination"
import React from 'react';
import TableButton  from "../../components/TableButton"
import Title from "../../components/Title"
import styled from 'styled-components'

const TableListRequest = [
  {
      id : 1,
      agencyName: "Đại lý ABC",
      timeRequest: "21/01/2021",
  },
  {
      id : 2,
      agencyName: "Đại lý ABC",
      timeRequest: "21/01/2021",
  },
  {
      id :3,
      agencyName: "Đại lý PHan văn hớn",
      timeRequest: "21/01/2021",
  }
]
const TableListRequested = [
  {
      id : 1,
      agencyName: "Đại lý ABC",
      revenue: "20.000.000.000.000",
      car: "10.000.000.000.000",
      bike: "10.000.000.000.000",
      partners: "2000",
      orderTxt: "5 đơn mới",
      orderStatus: 'hasOrder'
  },
  {
    id : 2,
    agencyName: "Đại lý ABCABCABC",
    revenue: "20.000.000.000.000",
    car: "10.000.000.000.000",
    bike: "10.000.000.000.000",
    partners: "2000",
    orderTxt: "0 đơn mới",
    orderStatus: 'noOrder'
  },
  {
    id : 3,
    agencyName: "Đại lý ABC",
    revenue: "20.000.000.000.000",
    car: "10.000.000.000.000",
    bike: "10.000.000.000.000",
    partners: "200",
    orderTxt: "0 đơn mới",
    orderStatus: 'noOrder'
  },
  {
    id : 4,
    agencyName: "Đại lý ABC",
    revenue: "20.000.000.000.000",
    car: "10.000.000.000.000",
    bike: "10.000.000.000.000",
    partners: "200",
    orderTxt: "0 đơn mới",
    orderStatus: 'noOrder'
  },

]

const BenifitStyle = styled.div`
    padding: 32px 20px;
    background-color: white;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
    min-height: calc(100% - 72px);
    .item {
      margin-bottom: 16px;
      H4 {
        font-size: 14px;
        color:  ${({ theme: { colors } }) => colors.primary};
        margin-bottom: 8px;
        font-weight: bold;
      }
      P {
        margin: 0 0 8px 0;
        font-size: 14px;
        strong {
          font-weight: bold;
          color: black;
        }
      }
    }

  `
const ButtonStyle = styled.div`
  display: flex;
  justify-content:  space-between;
  padding: 24px 20px;
  .btn {
    &.oneBtn {
      width: 100%;
      max-width: 300px;
      margin: auto;
    }
    width: calc(50% - 8px);
  }
`
const FilterDateStyle = styled.div`
  .filterW {
    .adminBtn   {
      display: none ;
    }
  }
`
const VehicleSelectStyle = styled.div`
  form {
    display: flex;
    width: 100%;
    &:before {
      display: block;
      content: "";
    }
    .form-groups {
      width: initial !important;
      display: inline;
      margin-right: 36px;
      padding-left: 30px;
      position: relative;
      input[type="checkbox"],input[type="radio"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height : 24px;
        opacity: 0;
        &:hover {
          cursor: pointer;
        }
      }
      input[type="radio"] + label {
        font-size: 14px;
        font-weight: 500;
      }
      input[type="radio"] + label:hover {
        cursor: pointer;
      }
      input[type="radio"] + label span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: -5px 8px 0 -30px;
        vertical-align: middle;
        background: transparent;
        border-radius: 100%;
        background-color:  #E0E0E0;
        cursor: pointer;
        position: relative;
      }
      input[type="radio"] + label span:before {
        content:"";
        width: 10px;
        height: 10px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-size: 50%;
        background-color: white;
        border-radius: 100%
      }
      input[type="radio"]:checked + label span {
       background: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
`
const AgencyTabs = ({ list = TableListRequest , list2 = TableListRequested }) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  const [modalIsOpen2,setIsOpen2] = React.useState(false);
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2(){
    setIsOpen2(false);
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
            <BlockTitle  text="HỒ SƠ ĐẠI LÝ"/>
            <CloseButton  onClick={closeModal}/>
          </div>
          <div className="md-body">
            <div className="bl-content scroll">
                <div className="images two" style={{marginBottom: "16px"}}>
                      <img src="src/assets/images/mattruoc.png" />
                      <img src="src/assets/images/matsau.png" />
                    </div>
                    <form autoComplete="off">


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
          <ButtonStyle >
                  <div className="btn close" onClick={closeModal}>
                    <Button btnText="THOÁT" type="grey adminBtn" borderRadius="ss" />
                  </div>
                  <div className="btn accept">
                    <Button btnText="DUYỆT HỒ SƠ" type=" adminBtn primary"/>
                  </div>
              </ButtonStyle>
        </div>


      </Modal>

      <Modal className="alert export"
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content admin">
          <div className="md-head">
            <BlockTitle  text="XUẤT DỮ LIỆU"/>
            <CloseButton  onClick={closeModal2}/>
          </div>
          <div className="md-body">
            <FilterDateStyle>
               <FilterDate />

            </FilterDateStyle>
            <VehicleSelectStyle>
                <form>
                  <div className="form-groups">
                    <input type="radio" name="vehicle" id="bike" checked/>
                    <label ><span></span> Xe máy</label>
                  </div>
                  <div className="form-groups">
                    <input type="radio" name="vehicle" id="car"/>
                    <label><span></span> Xe Ô tô</label>
                  </div>
              </form>
              </VehicleSelectStyle>
          </div>
          <ButtonStyle >

                  <div className="btn accept oneBtn">
                    <Button btnText="ĐỒNG Ý" type=" adminBtn primary"/>
                  </div>
              </ButtonStyle>
        </div>


        </Modal>
      <Tabs>
        <Tab label="Đã duyệt">
        <div className="adminTable">
            <table>
                <thead>
                    <tr>
                        <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TÊN ĐẠI LÝ</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>DOANH THU(VNĐ)</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">

                          <span>BH XE Ô TÔ</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>BH XE MÁY</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>CỘNG TÁC VIÊN</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                  </th>
                  <th>
                          <div className="wrap">

                          <span>ĐƠN HÀNG MỚI</span>

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
                    list2.map((item) => (
                      <tr key={item.id}>
                        <td className="stt">
                         {item.id}
                        </td>
                        <td className="name">
                          {item.agencyName}
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
                        <td className="partner">
                        {item.partners}
                        </td>
                        <td className={`order ${item.orderStatus}`}>
                        {item.orderTxt}
                        </td>
                        <td className="action">
                          <div className="actionW">
                            <div onClick={openModal2}>
                            <TableButton btnText="Xuất" iconURl="src/assets/images/pdf.svg" />
                            </div>

                            <Link to="./admin-agency-detail ">
                            <TableButton btnText="Chi tiết"  iconURl="src/assets/images/eye.svg"/>
                            </Link>
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
      <Tab label="Chờ duyệt">
      <div className="adminTable">
          <table>
              <thead>
                  <tr>
                      <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TÊN ĐẠI LÝ</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">
                          <span>NGÀY GỬI</span>
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
                                  {item.agencyName}
                              </td>
                              <td className="time">
                                  {item.timeRequest}
                              </td>
                              <td className="action" onClick={openModal}>
                                  <TableButton  btnText="Chi tiết" iconURl="src/assets/images/eye.svg"/>
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

export default AgencyTabs
