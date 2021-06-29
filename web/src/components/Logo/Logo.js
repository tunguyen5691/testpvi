import styled from 'styled-components'
import logo from "../../assets/images/logo.png"

import {ReactComponent as LogoImg} from '../../assets/images/logo.svg';
const LogoBrand = styled.div`
  text-align: center;
  img {
    width: 120px;
    margin: auto;
  }
`

const Logo = () => {
  return (
   <LogoBrand>
      <LogoImg />
   </LogoBrand>
  )
}

export default Logo
