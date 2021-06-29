import './index.css'

import { FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import Routes from 'src/Routes'
import Theme from "./Theme";
import styled from 'styled-components'

const Main = styled.div`
  color:  ${({ theme: { colors } }) => colors.base};
  font-family: 'Roboto';
  font-weight: 400;
  min-height: 100vh;
  min-height: 650px;
  // overflow-X: hidden;
  line-height: 1.5;
  position: relative;
  background-color: #28529e;

  .mobile {
    max-width: 420px;
    margin: auto;
    background-color: #28529e;
    // background-color: red;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    &:before {
      width: 200px;
      height: 200px;
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left:0 ;
      background: url('src/assets/images/bg1.svg ' ) top center no-repeat;
      background-size: 100%;
      animation: bg1 ease  2s;
    }
    &:after {
      width: 200px;
      height: 200px;
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      right:0 ;
      background: url('src/assets/images/bg2.svg ' ) bottom right no-repeat;
      background-size: 100%;
      animation: bg2 ease  2s .2s;
    }
  }
  .adminTable {
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    overflow-x: auto;
    table {
      width: 100%;
      background-color: white;
      min-width: 1100px;
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: bold;
            color: #909090;
            padding: 16px 8px;
            &:first-child {
              width: 60px;
              text-align: center;
            }
            .wrap {
              display: flex;
              align-items: center;

            }
          }
        }
      }
      tbody {
        tr {
          border-top: 1px solid #E0E0E0;
          td {
            font-size: 14px;
            padding: 16px 8px;
            color: #555555;
            &:first-child {
              text-align: center;
            }
            &.name {
              text-transform: uppercase;
            }
            &.action {
              padding: 16px 16px 16px 8px;
              .actionW {
                display: flex;
                justify-content: flex-end;
                a {
                  margin-left: 24px;
                }
              }
            }
            &.paid {
              color: #00D200;
            }
            &.waiting {
              color : #FFD422;
            }
            &.hasOrder {
              color: #00D200;
            }
            &.toExpired, &.expired {
              color: red;
            }
          }
        }
      }
    }
  }
  .aspectRatio{position:relative;
    &.aspectRatio--100{
        &:before{content:"";display:block;padding-top:100%}
    }
    &.aspectRatio--16-9{
        &:before{content:"";display:block;padding-top:56.25%}
    }
	*.aspectRatio-content{}
	&.aspectRatio--verticle{
        &:before{content:"";display:block;padding-top:200%}
    }
  }


  * {
    position: relative;
    z-index: 2;
  }
  @media (min-width: 320px) {
      font-size: calc(0.9375rem + ((1vw - 3.2px) * 0.6696));
  }
  @media (min-width: 768px) {
      font-size: 18px;
  }

  .selectWrap {
    background-color: white;
    border-radius: 4px;
    margin-left: 16px;
    padding-right: 10px;
    border: 1px solid #E8EDF3;
    transition: all ease 0.3s;
    &.noBorder {
      border: none;
      background-color: transparent;
      margin-left: 0;
      &:hover {
        border: none;
      background-color: transparent;
      }
    }
    &:hover {
      cursor: pointer;
      border: 1px solid  ${({ theme: { colors } }) => colors.primary};;
    }
    select {
      border: none;
      background-color: transparent;
      width: 100%;
      padding: 10px;
      &:hover, &:focus {
        outline: none;
        cursor: pointer;
      }
      option {
        font-size: em(14px);
      }
    }
    @keyframes bg1 {
      0% { opacity: 0; left: -200px;  }
      100% { opacity: 1 ; left: 0px; }
    }
    @keyframes bg2 {
      0% { opacity: 0; right: -200px;  }
      100% { opacity: 1 ; right: 0px; }
    }
  }

  .icon.icon-svg {
    background: ${({ theme: { colors } }) => colors.gradient};
    height: 40px !important;
    width: 40px !important;
    transition: all ease 0.3s;
    -webkit-mask-size: 100%;
    &.size-md {
      height: 60px !important;
      width: 60px !important;
    }
    &.size-sm {
      height: 24px !important;
      width: 24px !important;
    }
    &.colorBase{
      background: ${({ theme: { colors } }) => colors.gradient};
    }
  }

  .hasDropdownBlock {
    &:hover {
      cursor: pointer;
      .dropdownBlock  {
        display: block;
      }
    }
    .dropdownBlock {
      background-color: white;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      z-index: 3;
      box-shadow: 0 0px 28px  0 rgba(0,0,0,.1);
      display: none;
      border-radius: 4px;
      &.size-lg {
        min-width: 220px;
      }
      &.size-md {
        min-width:180px;
      }
      &.alignRight {
        left: inherit;
        right: 0;
      }
      ul {
        margin: 0;
        padding: 8px 0;
        li {
          list-style-type: none;
          a {
            display: block;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            padding: 6px 36px;
            text-align: left;
            transition: all ease 0.3s;
            &:hover , &:focus ,&.active {
              color:  ${({ theme: { colors } }) => colors.primary};
            }
          }
        }
      }
    }
  }
  .i-head {
    position: relative;
    .backBtn {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
    .closeBtn {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      @media (min-width: 768px) {
        right: 0px !important;
      }
    }
  }
  .box-shadow {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.025);
  }
  .box-shadow2 {
    box-shadow: 0px 1px 0px #E0E0E0;
  }
  .adminTabs {
    .tab-buttons {
      margin-bottom: 16px;
      box-shadow: 0px 1px 0px #E0E0E0;
      button {
        width: 50%;
        border: none;
        background-color: white;
        font-size: 15px;
        font-weight: 500;
        padding: 15px 0;
        color: #909090;
        border-bottom: 2px solid transparent;
        transition: all ease 0.3s;
        @media (max-width: 1023px) {
          fonts-size: 14px;
        }
        &:hover {
          cursor: pointer;
        }
        &.active {
          border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};;
          color: ${({ theme: { colors } }) => colors.base};;
          font-weight:700;
        }
      }
    }
  }
  .table {
    background-color: white;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
    padding: 16px 0;
    table {
      width: 100%;
      tr {
        td {
          padding: 12px;
        }
      }

      thead {
        tr {
          td {
            font-size: 12px;
            font-weight: bold;
            color : ${({ theme: { colors } }) => colors.secondary};
            &.col3 {
              text-align: right;
            }
          }
        }
      }
      tbody {
        tr {
          border-top: 1px solid #E0E0E0;
          td {
            font-size: 13px;
            &.stt {
              text-align: center;
            }
            &.meta {
              .code {
                color : ${({ theme: { colors } }) => colors.placeholder};
                padding-top: 2px;
              }
              .bs-bh {
                font-size: 14px;
                font-weight: bold;
                color : ${({ theme: { colors } }) => colors.placeholder};
              }
            }

            &.revenue, &.col3{
              width: 120px;
              .amount {
                font-weight: bold;
                font-size: 12px;
                color : ${({ theme: { colors } }) => colors.secondary};
                text-align: right;
                margin-bottom: 4px;
              }
              .package-status {
                font-size: 12px;
                color: #909090;
                margin-bottom: 2px;
                text-align: right;
              }
              .detail {
                padding: 4px;
                border: 1px solid ${({ theme: { colors } }) => colors.primary};
                font-size: 11px;
                color: ${({ theme: { colors } }) => colors.primary};
                text-align: center;
                border-radius : ${({ theme: { borderRadius } }) => borderRadius.sm};
                &:hover, &:focus {
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

  .i-body {
    background-color: #F0F2F6;
    padding: 32px 24px 86px;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
    min-height: calc(100vh - 71px);
    @media (max-width: 320px) {
      min-height: calc(100vh - 70px);
      padding: 32px 12px 86px;

    }
  }
  form {
    padding: 32px 20px;
    background-color: white;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    &.noBg {
      padding: 0;
      background-color: transparent;
      .form-groups {
        .form-groups-w {
          background-color: white;
        }
      }
    }
    .form-groups {
      margin-bottom: 16px;
      width: 100%;
      &.isHalf {
        width: calc(50% - 8px );

      }
      &:last-child {
        margin-bottom: 0;
      }
      &.error {
        .form-groups-w  {
          border: 1px solid ${({ theme: { colors } }) => colors.error};
          label {
            color: ${({ theme: { colors } }) => colors.error};
          }
          &:hover {
            border: 1px solid red;
          }

        }
      }
      &.isSelect {
        .form-groups-w {
          label {
            top: 10px;
            transform: translateY(0%);
          }
          .selectWrap {
            position: relative;
            &:before {
              width: 0;
              height: 0;
              display: block;
              content: "";
              border-top: 7px solid #919191;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-bottom: 7px solid transparent;
              position: absolute;
              top: 60%;
              right: 20px;
              transform: translateY(-50%);
            }
            select {
              font-size: 15px;
              color: #555555;
              height: 42px;
              border: none;
              width: 100%;
              outline: none;
              position: relative;
              background-color: transparent;
              padding: 0 16px;
              -webkit-appearance: none;
              -moz-appearance: none;
              text-indent: 1px;
              text-overflow: '';
            }
          }
        }
      }
      .form-groups-w {
        border: 1px solid ${({ theme: { colors } }) => colors.border};
        position: relative;
        padding-top: 20px;
        border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};
        transition: all ease 0.3s;
        &:hover {
          border: 1px solid #1B57C4;
        }
        label {
          font-size: 12px;
          display: block;
          color:  ${({ theme: { colors } }) => colors.placeholder};
          position: absolute;
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          padding: 0 16px;
          transition: all ease 0.3s;
          z-index: 1;
        }
        .selectedDate {
          font-size: 15px;
          color: #555555;
          height: 42px;
          border: none;
          width: 100%;
          outline: none;
          position: relative;
          background-color: transparent;
          z-index: 2;
          padding: 0 16px;
          display: flex;
          align-items: center;
          position: relative;
          &:before {
            width: 24px;
            height: 24px;
            display: block;
            content: "";
            background: url('src/assets/images/Calendar.svg') center no-repeat;
            background-size: 100%;
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
          }
        }
        input {
          font-size: 15px;
          color: #555555;
          height: 42px;
          border: none;
          width: 100%;
          outline: none;
          position: relative;
          background-color: transparent;
          z-index: 2;
          padding: 0 16px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
        input:focus + label ,input:not(:placeholder-shown)  + label {
          top: 10px;
          transform: translateY(0%);
        }
      }
    }
  }
`



const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodApolloProvider>
    <Theme>

        <Main>

        <Routes />


        </Main>
    </Theme>

    </RedwoodApolloProvider>
  </FatalErrorBoundary>
)

export default App
