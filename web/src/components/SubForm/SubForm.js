import { Link, routes } from '@redwoodjs/router'

import styled from 'styled-components'

const SubFormStyle = styled.div`
width: calc(100% - 40px);
margin-left: 20px;
text-align: center;
padding: 16px ;
color: white;
background-color: #D2E2FF;
border-radius : 0 0 ${({ theme: { borderRadius } }) => borderRadius.lg}  ${({ theme: { borderRadius } }) => borderRadius.lg} ;
font-size: 13px;
color:  ${({ theme: { colors } }) => colors.base};
a {
  color:  #1B57C4;
  padding-left: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: all ease 0.3s;
  &:hover, &:focus {
    opacity: 0.8;
  }
}
`

const SubForm = ({RoutePath , Text, LinkText}) => {
  return (
    <div>
      <SubFormStyle>
        {Text}<Link to={`${RoutePath}`}>{ LinkText}</Link>
        </SubFormStyle>
    </div>

  )
}

export default SubForm
