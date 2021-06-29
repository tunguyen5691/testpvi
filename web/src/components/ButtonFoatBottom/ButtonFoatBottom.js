import {ReactComponent as LeftIcon} from '../../assets/images/leftIcon.svg';
import { Link } from '@redwoodjs/router';
import {ReactComponent as RightIcon} from '../../assets/images/righIcon.svg';
import styled from 'styled-components'

const ButtonFoatBottomStyle = styled.div`\
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 420px;
  .wrap {
    display: flex;
    width: 100%;
    &.twoButton {
      .prev {
        display: flex;
      }
    }


  }
  .btn  {
    width: 100%;
    transition: all ease 0.3s;
     a {
      padding: 12px 0;
      width: 100%;
      color: white;
      font-size: 15px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
     }
    &:hover , &:focus {
      opacity: .6;
    }
    &.prev {
      background: #113D6B;
      display: none;
      svg {
        margin-right: 16px;
        margin-left: -16px;
      }

    }
    &.next {
      background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
      svg {
        margin-left: 16px;
        margin-right: -16px;
      }
    }
  }
`
const ButtonFoatBottom = ({ BtnShow, btnTextPrev , btnTextNext, LinkPrev, LinkNext}) => {
  return (
    <ButtonFoatBottomStyle>
      <div className={`wrap ${BtnShow}` }>
          <div className="btn prev">
              <Link to={`${LinkPrev}`}>
                <LeftIcon/>
                {btnTextPrev}
              </Link>

          </div>
          <div className="btn next">
          <Link to={`${LinkNext}`}>
              {btnTextNext}
              <RightIcon/>
              </Link>
          </div>
      </div>
    </ButtonFoatBottomStyle>
  )
}

export default ButtonFoatBottom
