import { Link, routes } from '@redwoodjs/router'

import styled from 'styled-components'

const InsurranceStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    .item {
      a {
        text-decoration: none;
        &:hover, &:focus {
          opacity: 0.7;
        }
      }
      .icon {
        background-color: white;
        border-radius : ${({ theme: { borderRadius } }) => borderRadius.xlg};
        margin: auto;
        width: 60px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 60%;
        }
      }
      span {
        font-size:12px;
        font-weight: 500;
        color: white;
        display: block;
        text-align: center;
        margin-top: 8px;
      }
    }
 `

const InsurranceItem = ({iconUrl, text}) => {
  return (
    <InsurranceStyle>
      <div className="item " >
      <Link to="/">
        <div className="icon aspectRatio aspectRatio--100" >
            <img src={`${iconUrl}`} />
        </div>
        <span>{text}</span>
        </Link>
      </div>

    </InsurranceStyle>
  )
}

export default InsurranceItem
