import styled from 'styled-components'

const ButtonStyle = styled.div`
  width: 100%;
  padding: 12px 0;
  text-align: center;
  background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};
  transition: all ease 0.3s;
  display: flex;
  align-items: center;

  &.sm {
    padding: 4px 12px;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
    width: fit-content;
  }
  &:focus , &:hover {
    opacity: 0.8;
  }
  span, input {
    color: white;
    font-weight: 500;
    font-size: 14px;
    padding-right: 4px;
    @media (max-width: 320px){
      font-size: 12px;
    }
  }

`

const ButtonIcon = ({size, btnText, ButtonUrl}) => {
  return (
    <ButtonStyle className={`${size}`}>
      <span>{btnText}</span>
      <img src={`${ButtonUrl}`} />
  </ButtonStyle>
  )
}

export default ButtonIcon
