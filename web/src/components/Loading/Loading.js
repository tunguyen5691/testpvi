import styled from 'styled-components'
const LoadingStyle = styled.div`
  .Loading-item {
    margin-top: 24px;
    .icon {
        align-items: center;
        display: flex;
        justify-content: center;
        span {
            background-color:${({ theme: { colors } }) => colors.primary};
            border-radius: 100%;
            display: block;
            height: 10px;
            margin:  0 4px;
            width: 10px;
            &:nth-child(1) {
                animation: loading 1s ease infinite;
            }
            &:nth-child(2) {
                animation: loading 1s ease infinite .2s;
            }
            &:nth-child(3) {
                animation: loading 1s ease infinite .4s;
            }
        }

    }
    p {
      color : ${({ theme: { colors } }) => colors.placeholder};
        font-size: 12px;
        text-align: center;
        padding-top: 12px;

    }
    @keyframes loading {
      0% {opacity: 1;transform: scale(.8); transform-origin: center;}
      100% {opacity: 0.5;transform: scale(1); transform-origin: center;}
  }
}
`
const Loading = () => {
  return (
    <LoadingStyle>
        <div className="Loading-item">
          <div className="icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Đang tải dữ liệu</p>
        </div>

    </LoadingStyle>
  )
}

export default Loading
