import BlockTitle from "../../components/BlockTitle"
import Button from "../../components/Button"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import Icon from "../../components/Icon"
import { Link } from "@redwoodjs/router";
import Modal from 'react-modal';
import Pagination from "../../components/Pagination"
import React from 'react';
import TableButton from "../../components/TableButton"
import styled from 'styled-components'

const noPaidYet = [
  {
    id: 1,
    name: "Trần văn Vá",
    accountNumber: "682666888",
    bank: "Á Chãu (ACB)",
    branch: "CN Quận 1",
    agencyPersonal: "Đại lý ABC"
  },
  {
    id: 2,
    name: "Trần văn Vá dép lào",
    accountNumber: "682666888",
    bank: "Á Chãu (ACB)",
    branch: "CN Quận 2",
    agencyPersonal: "Cá Nhân"
  },
  {
    id: 3,
    name: "Trần văn Vá",
    accountNumber: "682666888",
    bank: "Á Chãu (ACB)",
    branch: "CN Quận 4",
    agencyPersonal: "Đại lý ABC"
  },
  {
    id: 4,
    name: "Trần văn Vá",
    accountNumber: "682666888",
    bank: "Á Chãu (ACB)",
    branch: "CN Quận 1",
    agencyPersonal: "Đại lý Nhommm"
  }
]
const Paid = [
  {
      id : 1,
      name: "Trần Văn A",
      bienso: "51F-824.46",
      type: "BH bắt buộc xe ô tô",
      agencyPersonal: "Đại lý ABC",
      partners: "2000"
  },
  {
    id : 2,
    name: "Lê Văn Chương Cẩm Nang",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe ô tô",
    agencyPersonal: "Đại lý ABC",
    partners: "2000"
  },
  {
    id : 3,
    name: "Hồ Văn Bưởi",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe máy",
    agencyPersonal: "Đại lý  cấp 1",
    partners: "200"
  },
  {
    id : 3,
    name: "Trịnh Thị Định",
    bienso: "51F-824.46",
    type: "BH bắt buộc xe máy",
    agencyPersonal: "Cá nhân",
    partners: "200"
  },

]


const MdBodyStyle = styled.div`
  background-color: #F0F2F6;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
  .downloadPDF {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
    padding: 12px 0;
    text-align: center;
    max-width: 420px;
    left: 50%;
    transform: translateX(-50%);
    transition: all ease 0.3s;
    &:hover, &:focus {
      cursor: pointer;
    }
    span {
      color: white;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      display: inline;
      width: 100%;
      position: relative;
      &:before {
        width: 24px;
        height: 24px;
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: -36px;
        transform: translateY(-50%);
        background: url('src/assets/images/DownloadWhite.svg') center no-repeat;
        background-size: 100%;
      }
    }
  }
  .transactionDetail {

    .title {
      position: relative;
      padding: 28px 0px;
      svg {
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
        path {
          fill: #909090;
          stroke: #909090;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    .pager {
      margin-bottom: 16px;
      img {
        width: 100%;
        display: block;
      }
    }
    .infoContent {
      margin-top: 16px;
      .bl {
        margin-bottom: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &.oneline {
          align-items: center;
          padding-right: 16px;
          h4 {

            @media (min-width: 1024px) {
              display: inline-block;
              width: 70px;
              margin-bottom: 0;
            }
          }
          form {
            width: calc(100% - 70px);
            @media (max-width: 1024px) {
              width: 100%;
            }
            .form-groups {
              .form-groups-w {
                input {
                  font-size: 15px;
                  height: 42px;
                  width: 100%;
                  outline: none;
                  position: relative;
                  background-color: transparent;
                  z-index: 2;
                  border: 1px solid #E0E0E0;
                  padding: 0 16px;
                  border-radius: 4px;
                  color : ${({ theme: { colors } }) => colors.placeholder} ;
                  transition: all ease 0.3s;
                  &:focus, &:hover {
                    color : ${({ theme: { colors } }) => colors.primary} ;

                  }
                }
              }
            }
          }
        }
      }
      h4 {
        font-weight: bold;
        color : ${({ theme: { colors } }) => colors.primary} ;
        font-size: 14px;
        margin-bottom: 8px;
        width: 100%;
      }
      .item {
        font-size: 14px;
        color : ${({ theme: { colors } }) => colors.placeholder} ;
        margin-bottom: 8px;
        width: 100%;
        &.isHalf{
          width : calc(50% - 8px);
        }
        &.break {
          span {
            display: block;
          }
        }
        span {
          font-weight: 500;
          color: #555555;
        }
        &.price {
          span {
            font-size: 22px;
            font-weight: bold;

          }
        }
      }
    }

  }
`
const ButtonStyle = styled.div`
  display: flex;
  justify-content:  space-between;
  padding: 12px 20px;
  width: 100%;
  max-width:400px;
  margin: 12px auto 0;
  .btn {
    width:100%;
  }
`
const OddersTabs = ({ list = noPaidYet, list2 = Paid }) => {


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
    <div className="tabs adminTabs">
      <Modal className="alert "
          isOpen={modalIsOpen}
          onRequestClose={openModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
      <div className="md-content admin">
            <MdBodyStyle>
              <div className="md-body">

          <div className="transactionDetail  ">
              <div className="title">
                    <BlockTitle text="BH TNDS BẮT BUỘC XE MÔ TÔ" size="md" />
                    <CloseButton  onClick={closeModal}/>
                  </div>
              <div className="bl-content scroll " >
              <div className="pager ">
                <img src="src/assets/images/paper.svg" />
              </div>
              <div className="infoContent">
                  <div className="bl">
                    <h4>THÔNG TIN CHỦ XE</h4>
                    <div className="item name">Họ và tên: <span>Nguyễn Văn A</span></div>
                    <div className="item address">Địa chỉ: <span>251 lê quang định f7 quận bình thạnh</span></div>
                    <div className="item phone">Số điện thoại: <span>0123872329</span></div>
                    <div className="item email">Email nhận qrcode: <span>nguyevawn@gmail.com</span></div>
                  </div>
                  <div className="bl">
                    <h4>THÔNG TIN PHƯƠNG TIỆN</h4>
                    <div className="item type">loại xe: <span>Không kinh doanh vận tải khách</span></div>
                    <div className="item seat">Số chổ: <span>4 chổ</span></div>
                    <div className="item bienso">Số biển kiểm soát: <span>51F-824.46</span></div>
                    <div className="item sokhung">Số khung: <span>6D3143030125</span></div>
                    <div className="item somay">Số máy: <span>6F3112035525</span></div>
                  </div>
                  <div className="bl">
                    <h4>THỜI GIAN VÀ MỨC TRÁCH NHIỆM BẢO HIỂM</h4>
                    <div className="item time">Thời gian: <span>1 năm</span></div>
                    <div className="item startDate isHalf">Từ ngày: <span>8/5/2021</span></div>
                    <div className="item endDate isHalf">Đến ngày: <span>8/5/2021</span></div>
                    <div className="item volunteer break">bảo hiểm tự nguyện người ngồi trên xe: <span>không tham gia</span></div>
                  </div>
                  <div className="bl">
                    <h4>TỔNG CỘNG</h4>
                    <div className="item price "><span>480.000.000 VNĐ</span></div>

                    </div>
                    <div className="bl oneline">
                      <h4>LINK PDF</h4>
                      <form>
                        <div className="form-groups">
                          <div className="form-groups-w">
                              <input placeholder="Nhập Link PDF"/>
                          </div>
                          </div>
                        </form>
                      </div>
                      </div>
                </div>
                <ButtonStyle >
                    <div className="btn accept ">
                      <Button btnText="CẬP NHẬT" type="adminBtn primary"/>
                    </div>
                </ButtonStyle>
          </div>
          </div>
            </MdBodyStyle>
            </div>
      </Modal>
      <Modal className="alert "
          isOpen={modalIsOpen2}
          onRequestClose={openModal2}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
      <div className="md-content admin">
            <MdBodyStyle>
              <div className="md-body">

          <div className="transactionDetail  ">
              <div className="title">
                    <BlockTitle text="XÁC NHẬN THANH TOÁN" size="md" />
                    <CloseButton  onClick={closeModal2}/>
                  </div>
              <div className="bl-content scroll " >
                <div className="infoContent">
                  <div className="bl">
                    <h4>THÔNG TIN CHỦ XE</h4>
                    <div className="item name">Họ và tên: <span>Nguyễn Văn A</span></div>
                    <div className="item address">Địa chỉ: <span>251 lê quang định f7 quận bình thạnh</span></div>
                    <div className="item phone">Số điện thoại: <span>0123872329</span></div>
                    <div className="item email">Email nhận qrcode: <span>nguyevawn@gmail.com</span></div>
                  </div>
                  <div className="bl">
                  <h4>THÔNG TIN PHƯƠNG TIỆN</h4>
                    <div className="item type">loại xe: <span>Không kinh doanh vận tải khách</span></div>
                    <div className="item seat">Số chổ: <span>4 chổ</span></div>
                    <div className="item bienso">Số biển kiểm soát: <span>51F-824.46</span></div>
                    <div className="item sokhung">Số khung: <span>6D3143030125</span></div>
                    <div className="item somay">Số máy: <span>6F3112035525</span></div>
                  </div>
                  <div className="bl">
                    <h4>THỜI GIAN VÀ MỨC TRÁCH NHIỆM BẢO HIỂM</h4>
                    <div className="item time">Thời gian: <span>1 năm</span></div>
                    <div className="item startDate isHalf">Từ ngày: <span>8/5/2021</span></div>
                    <div className="item endDate isHalf">Đến ngày: <span>8/5/2021</span></div>
                    <div className="item volunteer break">bảo hiểm tự nguyện người ngồi trên xe: <span>không tham gia</span></div>
                  </div>
                  <div className="bl">
                    <h4>TỔNG CỘNG</h4>
                    <div className="item price "><span>480.000.000 VNĐ</span></div>

                    </div>
                    <div className="bl oneline">
                      <h4>LINK PDF</h4>
                      <form>
                        <div className="form-groups">
                          <div className="form-groups-w">
                              <input placeholder="Nhập Link PDF"/>
                          </div>
                          </div>
                        </form>
                      </div>
                      </div>
                </div>
                <ButtonStyle >
                    <div className="btn accept ">
                      <Button btnText="XÁC NHẬN THANH TOÁN" type="adminBtn primary"/>
                    </div>
                </ButtonStyle>
          </div>
          </div>
            </MdBodyStyle>
            </div>
      </Modal>
     <Tabs>
        <Tab label="Đã thanh toán">
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

                          <span>LOẠI BH</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>ĐẠI LÝ/CÁ NHÂN</span>
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
                        <td className="name">
                          {item.name}
                        </td>
                        <td className="bienso">
                          {item.bienso}
                        </td>
                        <td className="type">
                         {item.type}

                        </td>
                        <td className="agencyPersonal">
                         {item.agencyPersonal}

                        </td>
                        <td className="action">
                           <div onClick={openModal}>
                           <TableButton btnText="Chi tiết" iconURl="src/assets/images/eye.svg"/>
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
      <Tab label="Chờ thanh toán (5)">
      <div className="adminTable">
          <table>
              <thead>
                  <tr>
                      <th>
                          <span>STT</span>
                      </th>
                      <th>
                          <div className="wrap">

                          <span>TÊN TÀI KHOẢN</span>
                          <Icon
                              iconURl="src/assets/images/sort.svg"
                              iconSize="size-sm"
                              iconColor=""
                          />
                          </div>

                      </th>
                      <th>
                          <div className="wrap">
                          <span>SỐ TÀI KHOẢN</span>
                          <Icon

                          iconURl="src/assets/images/sort.svg"
                          iconSize="size-sm"
                          iconColor=""
                          />
                          </div>
                  </th>
                  <th>
                          <div className="wrap">
                          <span>NGÂN HÀNG</span>
                          <Icon

                          iconURl="src/assets/images/sort.svg"
                          iconSize="size-sm"
                          iconColor=""
                          />
                          </div>
                  </th>
                  <th>
                          <div className="wrap">
                          <span>CHI NHÁNH NGÂN HÀNG</span>
                          <Icon

                          iconURl="src/assets/images/sort.svg"
                          iconSize="size-sm"
                          iconColor=""
                          />
                          </div>
                  </th>
                  <th>
                          <div className="wrap">
                          <span>ĐẠI LÝ/ CÁ NHÂN</span>
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
                          <td className="accountNumber">
                                  {item.accountNumber}
                          </td>

                              <td className="bank">
                                  {item.bank}
                              </td>
                              <td className="branch">
                                  {item.branch}
                          </td>
                          <td className="agencyPersonal">
                                  {item.agencyPersonal}
                              </td>
                              <td className="action">
                              <div onClick={openModal2}>
                                <TableButton btnText="Chi tiết" iconURl="src/assets/images/eye.svg"/>
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
    </Tabs>
    </div>
  )
}

export default OddersTabs
