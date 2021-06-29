import styled from 'styled-components'

const AdminBlockTitleStyle = styled.div`
  @media (max-width: 1023px){
    padding-left: 48px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 0;
    @media (max-width: 1023px) {
      font-size: 16px;
    }
  }
`


const AdminBlockTitle = ({AdminBlockTitle}) => {
  return (
    <AdminBlockTitleStyle>
      <h3>{AdminBlockTitle}</h3>
    </AdminBlockTitleStyle>
  )
}

export default AdminBlockTitle
