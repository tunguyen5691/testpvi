import Icon from "../../components/Icon"
import styled from 'styled-components'

const AdminSearchStyle = styled.div`
@media (max-width: 1023px) {
  width: 100%;
}
.searchBar {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  height: 35px;
  padding: 0 0 0 12px;
  border: 1px solid #EBEDF8;
  @media (max-width: 1023px) {
    width: 100%;
  }
  form {
    padding: 0;
    .form-groups {
      position: relative;
      display: flex;
      align-items: center;
      input {
        width: 350px;
        border: 1px solid #EBEDF8;
        transition: all ease 0.3s;
        font-size: 14px;
        height: 35px;
        border: none;
        outline: none;
        &:focus {

        }
        @media (max-width: 1023px) {
          width: 100%;
        }
        &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
           color:${({ theme: { colors } }) => colors.placeholder};
        }
        &::-moz-placeholder { /* Firefox 19+ */
           color:${({ theme: { colors } }) => colors.placeholder};
        }
        &:-ms-input-placeholder { /* IE 10+ */
           color:${({ theme: { colors } }) => colors.placeholder};
        }
        &:-moz-placeholder { /* Firefox 18- */
           color:${({ theme: { colors } }) => colors.placeholder};
        }
      }
      .icon {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
`
const AdminSearch = ({placeholder}) => {
  return (
    <AdminSearchStyle>
      <div className="searchBar">
        <form autocomplete="off">
          <div className="form-groups">
            <input type="search" placeholder={placeholder}/>
            <Icon iconURl="src/assets/images/search.svg" iconSize="size-sm"/>
          </div>
        </form>
    </div>
  </AdminSearchStyle>
  )
}

export default AdminSearch
