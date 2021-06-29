import styled from 'styled-components'

const SearchStyle = styled.div`
  form {
    position: relative;
    border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
    border: 1px solid #E0E0E0;
    overflow: hidden;
    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      padding: 0 65px 0 20px;
      font-size: 14px;
      color:  ${({ theme: { colors } }) => colors.primary};
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color:  ${({ theme: { colors } }) => colors.placeholder};
      }
      &::-moz-placeholder { /* Firefox 19+ */
       color:  ${({ theme: { colors } }) => colors.placeholder};
      }
      &:-ms-input-placeholder { /* IE 10+ */
       color:  ${({ theme: { colors } }) => colors.placeholder};
      }
      &:-moz-placeholder { /* Firefox 18- */
       color:  ${({ theme: { colors } }) => colors.placeholder};
      }
    }
    .find {
      font-size: 14px;
      font-weight: 500;
      color: white;
      background:  ${({ theme: { colors } }) => colors.gradient};
      display: flex;
      height: 40px;
      width: 55px;
      position: absolute;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 0;
    }
  }
`
const Search = () => {
  return (
    <SearchStyle>
        <form className="noBg ">
          <input type="search" placeholder="Tìm nhanh" />
          <div className="find">Tìm</div>
        </form>
    </SearchStyle>
  )
}

export default Search
