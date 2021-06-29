import Icon from "../../components/Icon"
import styled from 'styled-components'

const SidebarItemStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  .meta {
    .title {
      font-size: 14px;
      font-weight: 500;
      color: white;
      padding-left: 16px;
      white-space: nowrap;

    }
  }
`
const SidebarItem = ({iconURl, itemTitle}) => {
  return (
    <SidebarItemStyle>
        <Icon iconURl={`${iconURl}`} iconSize="size-md"/>
        <div className="meta">
          <div className="title">{itemTitle}</div>
        </div>
    </SidebarItemStyle>
  )
}

export default SidebarItem
