import TabsTimerItem from "../../components/TabsTimerItem"
import styled from 'styled-components'
import React, { useState } from 'react';

const TabsTimerStyle = styled.div`
  display:flex;
  background-color: white;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
  box-shadow: 0px 1px 0px #E0E0E0;
  padding: 3px;
  justify-content: space-between;

  .item {
    width: calc(33% - 2px);
  }
`
const listTime = [
  {
    id: 1,
    text: "24 giờ",

  },
  {
    id: 2,
    text: "7 ngày"
  },
  {
    id: 3,
    text: "1 tháng"
  }
]
const TabsTimer = ({ list = listTime}) => {
  const [active , setActive] = useState(0);
  const setActiveClass = (index)=> {
    console.log(1);
    setActive(index)
  }
  return (
    <TabsTimerStyle>
        {
          list.map((item, index) => (
            <div className="item" key={item.id} onClick={()=> setActiveClass(index)}>
             <TabsTimerItem text={item.text}  status={`${active === index ? "active" : ""}`}/>
            </div>
          ))
        }

    </TabsTimerStyle>
  )
}

export default TabsTimer
