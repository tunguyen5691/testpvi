import styled from 'styled-components'

const ButtonStyle = styled.div`
  width: 100%;
  padding: 12px 0;
  text-align: center;
  background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};
  transition: all ease 0.3s;
  &.border-sm {
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
  }
  &.secondary {
    background:${({ theme: { colors } }) => colors.secondary};
  }
  &.primary {
    background:${({ theme: { colors } }) => colors.primary};
  }
  &.grey {
    background: ${({ theme: { colors } }) => colors.placeholder};
  }
  &.sm {
    padding: 4px 12px;
    width: inherit;
    display: inline;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
  }
  &.adminBtn {
    padding: 6px 12px;
    border-radius: 4px;
  }
  &:focus , &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  span, input {
    color: white;
    font-weight: 500;
    font-size: 14px;
    @media (max-width: 320px){
      font-size: 12px;
    }
  }
`

const Button = ({ btnText,  size , type }) => {
  return (
    <ButtonStyle className={`${size , type } `}>
        <span>{btnText}</span>
    </ButtonStyle>
  )
}

export default Button

