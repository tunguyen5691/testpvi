import Icon from "../../components/Icon"
import styled from 'styled-components'

const PaginationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  .bl {
    &.directPage {
      display: flex;
      align-items: center;
      span {
        @media (max-width: 1023px) {
          display: none;
        }
      }
      .selectWrap {
        @media(max-width: 1023px) {
          margin-left: 0;
        }
      }
    }
    &.rangePage {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .range {
        font-size: 14px;
      }
      .navigation {
        display: flex;
        align-items: center;
        .item {
          border-radius: 4px;
          margin-left: 16px;
          display: flex;
          justify-content: center;
          border: 1px solid transparent;
          transition: all ease 0.3s;
          &:hover {
            cursor: pointer;
            border: 1px solid ${({ theme: { colors } }) => colors.primary};
          }
        }
      }
    }
    span {
      font-size: 14px;
    }
  }
`

const Pagination = () => {
  return (
    <PaginationStyle>
      <div className="bl directPage">
        <span>Dòng trên trang</span>
        <div className="selectWrap">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
        </div>
      </div>
      <div className="bl rangePage">
        <div className="range">
            <span className="start">
              1-10
            </span>{' '}
            of <span className="total">12</span>
          </div>
          <div className="navigation">
              {/* <Link to={switchPage('discForms', currentPage, rows, -1)}> */}
                <div className="item prev">
                  <Icon
                    iconURl="src/assets/images/ChevronLeftPrimary.svg"
                    iconSize="size-md"
                    iconColor="colorDiscMain"
                  />
                </div>
              {/* </Link> */}
              {/* <Link to={switchPage('discForms', currentPage, rows, 1)}> */}
                <div className="item next">
                  <Icon
                    iconURl="src/assets/images/ChevronRightPrimary.svg"
                    iconSize="size-md"

                  />
                </div>
              {/* </Link> */}
            </div>
      </div>
    </PaginationStyle>
  )
}

export default Pagination
