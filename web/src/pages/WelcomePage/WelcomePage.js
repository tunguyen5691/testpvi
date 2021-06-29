import { Link, routes } from '@redwoodjs/router'

import Logo from "../../components/Logo/logo"
import styled from 'styled-components'

const Welcome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    position: relative;
    animation: ani ease-out .8s;
    .txt {
      transform: translateY(-90%);
      span {
        font-size: 16px;
        color: white;
      }
      p {
        margin: 0;
        font-size: 19px;
        font-weight: 900;
        color: rgba(255,255,255,.5);
        text-align: center;
      }
    }
  }
  @keyframes ani {
    0% {transform: scale(.5); opacity: 0;}
    50% {transform: scale(1.1); opacity: 1;}
    100% {transform: scale(1); opacity: 1;}
  }
`

const WelcomePage = () => {
  return (
    <div className="mobile full-bg">
      <Welcome>
          <div className="wrap">
              <Logo />
              <div className="txt">
                  <span>Bahi mua bảo hiểm </span>
                  <p>TRỰC TUYẾN</p>
              </div>
          </div>
      </Welcome>

    </div>
  )
}

export default WelcomePage
