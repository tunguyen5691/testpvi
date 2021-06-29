import styled from 'styled-components'

const AdminButtonIconStyle = styled.div`
  display: inline-block;
  @media (max-width: 1023px) {
    display: block;
  }
  .AdminButtonIcon {
    background-color : ${({ theme: { colors } }) => colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    padding: 10px ;
    border-radius: 4px;
    transition: all ease 0.3s;
    @media (max-width: 1023px) {
      min-width: inherit;
      min-width: 100%;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    img {
      width: 16px;

    }
    span {
      font-size: 14px;
      font-weight: 500;
      color: white;
      padding-left: 8px;
    }
  }
`

const AdminButtonIcon = ({iconURL, btnText}) => {
  return (
    <AdminButtonIconStyle>
        <div className="AdminButtonIcon">
          <img src={`${iconURL}`} />
          <span>{btnText}</span>
        </div>

    </AdminButtonIconStyle>
  )
}

export default AdminButtonIcon