import { Link, routes } from '@redwoodjs/router'

import SubForm from "../../components/SubForm"
import Title from "../../components/Title";
import styled from 'styled-components';

const SuccessStyle = styled.div`
  padding: 20vh 20px 0;
`
const SucessBody = styled.div`
  text-align: center;
  padding: 32px;
  background-color: white;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
  .text {
    margin-bottom: 16px;
    p {
      font-size: 14px;
      strong {
        font-weight: bold;
      }

    }
  }
  .contact {
    label {
      font-size: 14px;
      display: block;
      color:  ${({ theme: { colors } }) => colors.placeholder};
    }
    .hotline {
      color:  ${({ theme: { colors } }) => colors.secondary};
      font-weight: bold;
      font-size: 22px;
      margin-top: 4px;
    }
  }
`
const RegisterSuccessPage = () => {
  return (
    <div className="mobile">
      <SuccessStyle>
        <Title titleType="capital" titleText="CHÚC MỪNG"></Title>
        <SucessBody>
          <div className="text">
            <p>Bạn đã <strong>đăng ký</strong> đại lý <strong>thành công</strong>.</p>
            <p>Chúng tôi sẽ sớm liên hệ với bạn.</p>
          </div>
          <div className="contact">
            <label>Mọi thắc mắc vui lòng liên hệ</label>
            <div className="hotline">1900545458</div>
          </div>
        </SucessBody>
        <SubForm Text="" LinkText="ĐĂNG NHẬP" RoutePath="/login"/>
      </SuccessStyle>
    </div>
  )
}

export default RegisterSuccessPage
