import { Link, routes } from '@redwoodjs/router'

import LoginTabs from "../../components/LoginTabs"
import Modal from 'react-modal';
import Policy from "../../components/Policy"
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const LoginGeneral = styled.div`
  display: flex;
  height: 100vh;
  min-height: 550px;
  padding :  20vh 20px 0;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  .tabs {
    width: 100%
  }

`
const PolicyStyle = styled.div`
  .policyFooter {
    position: absolute;
    bottom: calc(1rem + env(safe-area-inset-bottom));
    width: 100%;
    left: 0;
    z-index: 2;
  }
`
const LoginPage = () => {


  return (
    <div className="mobile">

    <LoginGeneral >
        <LoginTabs />
    </LoginGeneral>
    <PolicyStyle>
      <div className="policyFooter" >
        <Policy ></Policy>
      </div>
    </PolicyStyle>

    </div>
  )
}

export default LoginPage
