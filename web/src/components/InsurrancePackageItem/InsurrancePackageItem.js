import { Link, routes } from '@redwoodjs/router'

import styled from 'styled-components'

const InsurrancePackageItemStyle = styled.div`
  display: flex;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
  overflow: hidden;
  margin-bottom: 24px;
  a {
    text-decoration: none;
    display: flex;
    width: 100%;
  }
  .thumb {
    width : 100px;
    height: auto;
    background-color: #F2F6FF;
    @media (max-width: 320px) {
      width: 70px;
   }
  }
  .meta {
    width: calc(100% - 100px);
    display: flex;
    align-items: center;
    padding: 32px 24px;
    background-color: white;
    @media (max-width: 320px) {
        width: calc(100% - 70px);
    }
    .packageName {
      font-size: 18px;
      color: black;
      font-weight: 500;
      @media (max-width: 320px) {
        font-size: 16px;
      }
    }
    .description{
      color: ${({ theme: { colors } }) => colors.placeholder};
      font-size: 14px;
      @media (max-width: 320px) {
        font-size: 12px;
      }
    }
  }

`
const InsurrancePackageItem = ({thumbUrl, packageName , description}) => {
  return (
    <InsurrancePackageItemStyle>
      <Link to="/insurrance-info" className="box-shadow">
      <div className="thumb" style={{ background:  "url(" + `${thumbUrl}` + ") #F2F6FF center no-repeat", backgroundSize: "50%" }}></div>
      <div className="meta" >
        <div className="wrap">
          <div className="packageName">{ packageName}</div>
          <div className="description">{ description}</div>
        </div>
        </div>
        </Link>
    </InsurrancePackageItemStyle>
  )
}

export default InsurrancePackageItem
