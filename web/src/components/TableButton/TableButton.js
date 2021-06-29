import Icon from "../../components/Icon"
import styled from 'styled-components'

const TableButtonStyle = styled.div`
  display: flex;
  align-items: center;
  transition: all ease 0.3s;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
    opacity: 0.6
  }
  span {
    font-size: 14px;
    padding-right: 8px;
    color:  ${({ theme: { colors } }) => colors.primary};
    font-weight: 500;
  }
`
const TableButton = ({btnText , iconURl}) => {
  return (
    <TableButtonStyle>
      <span>{ btnText}</span>
      <Icon iconSize="size-sm" iconURl={ `${iconURl}`}/>
    </TableButtonStyle>
  )
}

export default TableButton
