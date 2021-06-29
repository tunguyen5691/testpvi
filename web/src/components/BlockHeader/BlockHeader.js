import { Link, routes } from '@redwoodjs/router'

import AdminBlockTitle from "../../components/AdminBlockTitle"
import AdminButtonIcon from "../../components/AdminButtonIcon"
import AdminSearch from "../../components/AdminSearch"
import styled from 'styled-components'

const BlockHeaderStyle = styled.div`
  margin-bottom: 24px;
  @media (max-width: 1023px) {
    margin-bottom: 16px;
  }
  .blockHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &.isBtn {
      .bl-button {
        display: block;
      }
      .searchBar {
        display: none;
      }
    }
    .bl {
      @media (max-width: 1023px){
        width: 100%;
        &.blLeft {
          margin-bottom: 12px;
        }
      }
    }
    .bl-button {
      display: none;
    }
  }
`


const BlockHeader = ({Text , isBtn , linkText }) => {
  return (
    <BlockHeaderStyle>
      <div className={`blockHeader ${isBtn}`}>
          <div className="bl blLeft">
           <AdminBlockTitle AdminBlockTitle={Text}/>
          </div>
          <div className="bl blRight">
            <AdminSearch placeholder="Tìm theo tên đại lý" />
            <div className="bl-button  ">
              <Link to="./add-notification">
              <AdminButtonIcon  iconURL="src/assets/images/Plus.svg" btnText="Thêm thông báo" />
                </Link>
            </div>
          </div>
      </div>

    </BlockHeaderStyle>
  )
}

export default BlockHeader
