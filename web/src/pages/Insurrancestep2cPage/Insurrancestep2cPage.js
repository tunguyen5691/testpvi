import { Link, routes } from '@redwoodjs/router'

import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';
import BlockTitle from "../../components/BlockTitle"
import Button from "../../components/Button"
import ButtonFoatBottom from "../../components/ButtonFoatBottom"
import { ReactComponent as CloseButton } from '../../assets/images/Close.svg';
import Modal from 'react-modal';
import Payment from "../../components/Payment"
import ProgressBar from "../../components/ProgressBar"
import Title from "../../components/Title"
import styled from 'styled-components'

const InsurranceStep = styled.div`
    .totalPrice {
      position: fixed;
      bottom:48px;
      left: 0;
      width: 100%;
      font-size: 22px;
      font-weight: bold;
      text-align: center;
      color : ${({ theme: { colors } }) => colors.primary} ;
      background-color: white;
      padding: 12px 0;
    }

    .i-body {

      .progressBar {
        margin-bottom: 36px;
      }
      .info {
        padding: 20px 36px;
        background-color: white;
        border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
        .title {
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          color : ${({ theme: { colors } }) => colors.base};
        }
        .price {
          font-size: 22px;
          text-align: center;
          font-weight: bold;
          color : ${({ theme: { colors } }) => colors.primary};
          margin-top: 8px;

        }
      }
      .payment {
        .blTitle {
            text-align: center;
        }
      }
    }
`

const ButtonStyle = styled.div`
display: flex;
justify-content:  space-between;
margin-top: 24px;
.btn {
  width: calc(50% - 8px);
}
`

const Insurrancestep2cPage = () => {
  const [modalIsOpen2,setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2(){
    setIsOpen2(false);
  }
  return (
    <div className="mobile">
      <Modal className="alert"
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-content">
          <div className="md-head">
            <h4>Th??ng b??o</h4>
            <CloseButton  onClick={closeModal2}/>
          </div>
          <div className="md-body">
                <p>B???n mu???n h???y ????ng k?? mua b???o hi???m ?? t???</p>
                <ButtonStyle >
                    <div className="btn close" onClick={closeModal2}>
                      <Button btnText="????ng" type="secondary" />
                    </div>
                    <div className="btn accept">
                      <Button btnText="?????ng ??"/>
                    </div>
                </ButtonStyle>
            </div>
        </div>


        </Modal>
      <InsurranceStep>
        < div className="i-head">
            <Link to="/" className="backBtn">
                <BackButton />
              </Link>
            <Title titleType="" titleText="Mua b???o hi???m cho xe ?? t??"></Title>
              <Link to="" className="closeBtn"  >
                <CloseButton onClick={openModal2}/>
              </Link>
        </div>
         <div className="i-body">
            <div className="progressBar">
              <ProgressBar percentage="hundred "/>
            </div>
            <div className="info box-shadow">
              <div className="title">G??i b???o hi???m b???t bu???c TNDS d??nh cho ng?????i ??i???u khi???n xe m??y</div>
              <div className="price"><span>480,700</span> VN??</div>
            </div>
            <div className="payment">
                <div className="blTitle" style={{ margin: "32px 0"}}>
                  <BlockTitle text="CH???N PH????NG TH???C THANH TO??N"  size="md"/>
                </div>
                <Payment/>
            </div>

         </div>

         <ButtonFoatBottom BtnShow="=" btnTextNext="HO??N T???T THANH TO??N"  LinkNext="/insurrancestep2d"/>
        </InsurranceStep>
    </div>
  )
}

export default Insurrancestep2cPage
