import styled from 'styled-components'

const NotiCardStyle = styled.div`
  display: flex;
  background-color: white;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
  padding: 0 12px ;
  height: 64px;
  box-shadow: 0px 1px 0px #E0E0E0;
  &.oneLine {
    .info {
      .bs {
        display: none;
      }
    }
    .action {
      .time {
        display: none;
      }
    }

  }
  .icon {
    width: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 25px;
    }
  }
  .info {
    width: calc(100% - 150px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    .wrap {

      .title {
        width: 100%;
        font-size: 14px;
      }
      .bs {
        width: 100%;
        font-size: 13px;
        span {
          font-weight: 500;
          color : ${({ theme: { colors } }) => colors.placeholder};
        }
      }
    }
  }
  .action {
    width: 100px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: 100%;
    .wrap {

       .time {
         color: #909090;
         font-size: 13px;
         text-align: right;
         padding-bottom: 2px;
       }
       .btn  {
          padding: 4px 8px  ;
          font-size: 11px;
          color: #1B57C4;
          text-align: center;
          border-radius: 6px;
          &:hover , &:focus {
            cursor: pointer;
          }
          &.primary {
            border: 1px solid  ${({ theme: { colors } }) => colors.primary};
          }
          &.secondary {
            border: 1px solid  ${({ theme: { colors } }) => colors.secondary};
          }
       }
    }
  }
`

const NotiCard = ({ iconUrl, title , bs  , type , time, btntext, btnType}) => {

  return (
    <NotiCardStyle className={`${type}`}>
      <div className="icon">
        <img src={`${iconUrl}`} />
      </div>
      <div className="info">
          <div className="wrap">
              <div className="title">{title}</div>
              <div className="bs">BS:<span>{bs}</span></div>
          </div>
      </div>
      <div className="action">
          <div className="wrap">
             <div className="time">{time}</div>
             <div className={`btn ${btnType}`} >
                {btntext}
             </div>
          </div>
      </div>
    </NotiCardStyle>
  )
}

export default NotiCard
