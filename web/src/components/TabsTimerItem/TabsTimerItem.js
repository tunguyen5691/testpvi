import styled from 'styled-components'

const TabsTimerItemStyle = styled.div`
  text-align: center;
  padding: 12px 0;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
  transition: all ease 0.3s;
  &.active {
    background-color: ${({ theme: { colors } }) => colors.primary};
    span {
      color: white;
    }
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
`

const TabsTimerItem = ({text, status}) => {


  return (
    <TabsTimerItemStyle className={`${status}`}>
        <span>{text}</span>
    </TabsTimerItemStyle>
  )
}

export default TabsTimerItem
