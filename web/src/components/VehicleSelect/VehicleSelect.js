import styled from 'styled-components'
import React, { useState } from 'react';
import VehicleSelectItem from "../../components/VehicleSelectItem"
const VehicleSelectStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .item {
    width : calc(33% - 8px);
  }
`
const hihecleList = [
  {
    id:1,
    iconUrl: "src/assets/images/oto_3.svg",
    text: "Không kinh doanh vận tải hành khách",
    active: false,
  },
  {
    id:2,
    iconUrl: "src/assets/images/oto_1.svg",
    text: "Kinh doanh vận tải",
    active: false,
  },
  {
    id:3,
    iconUrl: "src/assets/images/oto_2.svg",
    text: "Ô tô tải",
    active: false,
  }
]


const VehicleSelect = ({list = hihecleList }) => {
  const [active, setActive] = useState(0);
  const isActive = (index) => {
    setActive(index)
  }
  return (
    <VehicleSelectStyle>
          {
            list.map((item ,index) => (
              <div className="item" key={item.id} onClick={() => isActive(index)}>
               <VehicleSelectItem  iconUrl={item.iconUrl} text={item.text} status={`${active === index ? "active" : "" }`}/>
              </div>
            ))
          }




    </VehicleSelectStyle>
  )
}

export default VehicleSelect
