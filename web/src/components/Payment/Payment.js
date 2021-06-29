import React, { useState } from 'react';

import PaymentItem from "../../components/PaymentItem"
import styled from 'styled-components'

const PaymentStyle = styled.div`
  display: flex;
  justify-content: space-around;
  .item {
    width : 100px;
  }
`
const paymentMethod = [
  {
    id: 1,
    iconUrl: "src/assets/images/vnpay.png" ,
    text: "VNPay"
  },
  {
    id: 2,
    iconUrl: "src/assets/images/momo.png" ,
    text: "Momo"
  }

]
const Payment = ({list = paymentMethod}) => {
  const [active, setActive] = useState(0);
  const isActive = (index) => {
    setActive(index)
  }
  return (
    <PaymentStyle>
       {
         list.map((item, index) => (
          <div className="item" key={item.id}  onClick={() => isActive(index)} >
            <PaymentItem iconUrl={item.iconUrl} text={item.text} status={`${active === index ? "active" : ""}`}/>
          </div>
         ))
       }


    </PaymentStyle>
  )
}

export default Payment
