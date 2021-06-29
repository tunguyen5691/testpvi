
import styled from 'styled-components'
const IconStyle = styled.div`
  img {
    display: block;
    &.size-md {
      width: 28px;
    }
    &.size-sm {
      width: 16px;
    }
  }
`


const Icon = ({iconURl, iconSize}) => {
  return (
    <IconStyle className="icon">
        <img  src={`${iconURl}`} className={`${iconSize}`}/>
    </IconStyle>
  )
}

export default Icon
