import styled from 'styled-components'
const ProgressBarStyle = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  .wrap {
    .bar {
      width: 100%;
      height: 6px;
      positiion: relative;
      background-color: #E0E0E0;
      .steps {
        width: calc(100% + 20px);
        position: absolute;
        top: 3px;
        left: -10px;
        transform: translateY(-50%);
        .stepsWrap {
          display: flex;
          justify-content: space-between;
          &.one {
            .item {
              &:nth-child(1) {
                color: white;
                background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
                border: 0px solid #E0E0E0;
              }
            }
          }
          &.two {
            .item {
              &:nth-child(1) , &:nth-child(2) {
                color: white;
                background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
                border: 0px solid #E0E0E0;
              }
            }
          }
          &.three {
            .item {
              &:nth-child(1) , &:nth-child(2) ,&:nth-child(3) {
                color: white;
                background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
                border: 0px solid #E0E0E0;
              }
            }
          }
          &.four {
            .item {
              color: white;
              background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
              border: 0px solid #E0E0E0;
            }
          }
          .item {
            font-size: 12px;
            color: #E0E0E0;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #E0E0E0;
            border-radius: 100%;
            background-color: white;
            &:first-child {
              color: white;
              background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
              border: 0px solid #E0E0E0;
            }
          }
        }
      }
      &.thirty {
        span {
          width: 33%;
        }
        .steps {
          .stepsWrap  {
            .item {
              &:nth-child(1) , &:nth-child(2) {
                color: white;
                background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
                border: 0px solid #E0E0E0;
              }
            }
          }
        }
      }
      &.sixtyseven {
        span {
          width: 67%;

        }
        .steps {
          .stepsWrap  {
            .item {
              &:nth-child(1) , &:nth-child(2), &:nth-child(3) {
                color: white;
                background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
                border: 0px solid #E0E0E0;
              }
            }
          }
        }
      }
      &.hundred {
        span {
          width: 100%;

        }
        .steps {
          .stepsWrap  {
            .item {
                color: white;
                background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
                border: 0px solid #E0E0E0;
            }
          }
        }
      }
      span {
        background: linear-gradient(224.13deg, #19B9FB 14.13%, #1C99F7 47.89%, #1F79F3 85.36%);
        position: absolute;
        top: 0;
        left: 0;
        display:block;
        height: 100%;
      }
    }
  }
`
const ProgressBar = ({percentage, stepActive}) => {
  return (
    <ProgressBarStyle>
      <div className="wrap">
        <div className={`bar ${percentage}` }>
          <span></span>
          <div className="steps">
            <div className={`stepsWrap ${stepActive}`}>
                  <div className="item  ">1</div>
                  <div className="item ">2</div>
                  <div className="item ">3</div>
                  <div className="item ">4</div>
              </div>
          </div>
          </div>
        </div>
    </ProgressBarStyle>
  )
}

export default ProgressBar
