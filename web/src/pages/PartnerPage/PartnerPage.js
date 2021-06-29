import { Link, routes } from '@redwoodjs/router'
import Loading from "../../components/Loading"
import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';
import Item from 'antd/lib/list/Item';
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import BlockTitle from "../../components/BlockTitle"
import CardSp from "../../components/CardSp"
import RevenueTotal from "../../components/RevenueTotal"
import Search from "../../components/Search"
import Title from "../../components/Title"
import styled from 'styled-components'
import Modal from 'react-modal';

const listCTV = [
  {
    id: 1,
    name: "Nguyễn Thiên tứ",
    code: "CTV - 1345",
    amount: "200.000.000",

  },
  {
    id: 2,
    name: "Nguyễn Thiên tứ 2",
    code: "CTV - 1345",
    amount: "200.000.000",

  },
  {
    id: 3,
    name: "Nguyễn Thiên tứ 4",
    code: "CTV - 1345",
    amount: "200.000.000",

  },
  {
    id: 4,
    name: " Nguyễn Thiên tứ 5 Nguyễn Thiên tứ 5",
    code: "CTV - 1345",
    amount: "140.000.000",

  },
  {
    id: 5,
    name: "Nguyễn Thiên tứ 6",
    code: "CTV - 123245",
    amount: "100.000.000",
  }

]

const PartnerPageStyle = styled.div`
    .i-head {
      position: relative;
      .backBtn {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
    }
    .i-body {
      .search {
        margin-bottom: 24px;
      }

    }
`
const MdBodyStyle = styled.div`
  background-color: #F0F2F6;
  padding: 32px 24px 86px;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
  min-height: calc(100vh - 71px);
  .revenueDetail {
    .title {
      margin-bottom: 8px;
    }
    .revenueInformation {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;
      align-items: center;
      .code {
        font-size: 11px;
        color : ${({ theme: { colors } }) => colors.secondary};
        padding: 4px 8px;
        border: 1px solid ${({ theme: { colors } }) => colors.secondary};
        border-radius : ${({ theme: { borderRadius } }) => borderRadius.sm};
        background-color: white;
      }
      .timeJoin {
        font-size: 13px;
        color : ${({ theme: { colors } }) => colors.placeholder};
        padding-left: 12px;
        span {
          font-weight: 500;
          color : ${({ theme: { colors } }) => colors.base};
        }
      }
    }
  }
`
const PartnerPage = ({ list = listCTV }) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="mobile">
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-head">
          <Title titleType="" titleText="Nguyễn Văn B Nguyễn Văn B"></Title>
          <div className="md-close" onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>
       <MdBodyStyle>
            <div className="revenueDetail">
                <div className="title">
                <BlockTitle text="CHI TIẾT DOANH THU" size="md"/>
                </div>
                <div className="revenueInformation">
                    <div className="code">CTV-1356</div>
                    <div className="timeJoin">Tham gia ngày: <span>04/03/2011</span></div>
                </div>
                <div className="totalRevenue" style={{ marginBottom: "16px"}}>
                    <RevenueTotal/>
                </div>
                <div className="card"  style={{ marginBottom: "16px"}}>
                    <CardSp iconUrl="src/assets/images/Car.svg" title="Bán 300 BH xe ô tô" amount="70.000.000 VNĐ"/>
                </div>
                <div className="card"  style={{ marginBottom: "16px"}}>
                    <CardSp iconUrl="src/assets/images/Bike.svg" title="Bán 300 BH xe xe máy"  amount="30.000.000 VNĐ" />
                </div>
            </div>

       </MdBodyStyle>





        </Modal>
     <PartnerPageStyle>
          <div className="i-head">
            <Link to="/" className="backBtn">
                <BackButton />
              </Link>
            <Title titleType="" titleText="Danh sách CTV"></Title>
        </div>
        <div className="i-body">
          <div className="search">
              <Search/>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <td className="stt col1">STT</td>
                  <td className="col2">TÊN / MÃ</td>
                  <td className="revenue col3">DOANH THU</td>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((item) => (
                    <tr>
                      <td className="stt col1">{ item.id}</td>
                      <td className="meta col2">
                        <div className="name">{ item.name}</div>
                        <div className="code">{ item.code}</div>
                      </td>
                      <td className="revenue col3">
                        <div className="amount">{ item.amount}</div>
                        <div className="detail"  onClick={openModal}>Xem chi tiết</div>
                      </td>
                    </tr>
                  ))
                }

              </tbody>

            </table>
          </div>
          <Loading />
        </div>
      </PartnerPageStyle>
    </div>
  )
}

export default PartnerPage
