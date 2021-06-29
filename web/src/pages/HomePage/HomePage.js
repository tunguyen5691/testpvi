import { Link, routes } from '@redwoodjs/router'


import React from 'react';
import styled from 'styled-components'
import HomeComp from "../../components/HomeComp"
import NavigationBar from "../../components/NavigationBar"


const HomeStyle = styled.div`

`




const HomePage = () => {

  return (
    <div className="mobile">
      <HomeStyle>
          <HomeComp />
      </HomeStyle>
      <NavigationBar status="homepage"/>
    </div>
  )
}

export default HomePage
