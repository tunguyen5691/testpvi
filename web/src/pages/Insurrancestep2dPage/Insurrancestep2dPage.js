import { Link, routes } from '@redwoodjs/router'

import Button from "../../components/Button"
import Infographic from "../../components/Infographic"
import Title from "../../components/Title"
import styled from 'styled-components'

const InsurranceStep = styled.div`

    .i-body {
      .successInfo {
        padding: 32px 24px;
        background-color: white;
        border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg};
        .bl {
          margin-bottom: 16px;
        }
        h4 {
          text-align: center;
          font-weight: bold;
          color : ${({ theme: { colors } }) => colors.primary};
          font-size: 22px;
          margin-bottom: 16px;
        }
        p {
          text-align: center;
          strong {
            font-weight: bold;
            margin-bottom: 4px;
          }
          span {
            font-weight: bold;
            color : ${({ theme: { colors } }) => colors.primary};
          }
        }
      }
    }
`
const Insurrancestep2dPage = () => {
  return (
    <div className="mobile">
       <InsurranceStep>
        < div className="i-head">
            <Title titleType="" titleText="Mua bảo hiểm cho xe ô tô"></Title>
        </div>
         <div className="i-body">

           <div className="successInfo box-shadow">
              <Infographic imgUrl="src/assets/images/img2.svg" />
              <h4>Đơn hàng đang xử lý</h4>
              <div className="bl">
                <p><strong>Bạn đã thanh toán thành công</strong></p>
                <p>Gói bảo hiểm bắt buộc TNDS dành cho người điều khiển xe ô tô đang được xử lý.</p>
              </div>
              <div className="bl">
                <p><strong>Lưu ý</strong></p>
                <p>Sau khi đơn hàng đã <span>xử lý thành công</span>, bạn có thể vào <span>lịch sử</span> để xem hoặc tải file <span> PDF chứa code</span>.</p>
              </div>
              <Link to={"./home"} style={{marginTop: "36px" , display: "block"}}>
               <Button btnText="VỀ TRANG CHỦ"/>
              </Link>
           </div>

         </div>

        </InsurranceStep>
    </div>
  )
}

export default Insurrancestep2dPage
