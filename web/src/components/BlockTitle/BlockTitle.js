import styled from 'styled-components'

const BlockTitleStyle = styled.div`
  span {
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 800;
    color:  ${({ theme: { colors } }) => colors.secondary};
    &.md {
      font-size: 16px;
    }
  }
`
const BlockTitle = ({text,  size}) => {
  return (
    <BlockTitleStyle>
      <span className={`${size}`}>{ text}</span>
    </BlockTitleStyle>
  )
}

export default BlockTitle
