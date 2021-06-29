import Modal from 'react-modal';
import {ReactComponent as ModalCloseButton} from '../../assets/images/Close.svg';
import React from 'react';
import Title from "../../components/Title";
import styled from 'styled-components'

const PolicyStyle = styled.div`
    font-style: italic;
    color: white;
    padding: 16px 0 32px;
    p {
      margin: 0;
      font-size: 12px;
      text-align: center;
      font-weight: 300;
      span {
        font-style: normal;
        font-weight: bold;
        padding: 0 2px;
        display: inline-block;
      }
    }
`
const Policy = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const PolicyContent = styled.div`
  padding: 32px 20px;
  background-color: white;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
  min-height: calc(100% - 72px);
  .item {
    margin-bottom: 16px;
    h3 {

        font-size: 16px;
        color:  ${({ theme: { colors } }) => colors.primary};
        margin-bottom: 8px;
        font-weight: bold;
        text-align: center;
        margin-top: 16px;
    }
    H4 {
      font-size: 14px;
      color:  ${({ theme: { colors } }) => colors.primary};
      margin-bottom: 8px;
      font-weight: bold;
    }
    P {
      margin: 0 0 8px 0;
      font-size: 14px;
      strong {
        font-weight: bold;
        color: black;
      }
      a {
        color:  ${({ theme: { colors } }) => colors.primary};
        font-weight: bold;
      }
    }
  }

  `

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
        >
        <div className="md-head">
          <Title titleType="" titleText="Điều khoản sử dụng"></Title>
          <div className="md-close" onClick={closeModal}>      <ModalCloseButton /> </div>
        </div>

        <PolicyContent>
        <div className="item">
              <h3 style={{marginTop: "0"}}>CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN </h3>
                <p>Khi tham gia mua các sản phẩm bảo hiểm trên <a href="https://bahi.vn" target="_blank">https://bahi.vn</a>, Quý khách cần phải cung cấp một số thông tin cần thiết. Các thông tin này nhằm giúp Bảo hiểm PVI Thống Nhất cung cấp dịch vụ, thiết lập giao dịch, xác định phần thanh toán và cung cấp sản phẩm chính xác cho Quý khách. Chúng tôi cũng lưu trữ thông tin do Quý khách khai báo hoặc gửi đến <a href="https://bahi.vn" target="_blank">https://bahi.vn</a>. Những thông tin đó sẽ được sử dụng cho mục đích phản hồi yêu cầu của Quý khách, đưa ra những gợi ý phù hợp cho từng Quý khách khi mua sản phẩm trên trang website, nâng cao chất lượng hàng hóa dịch vụ và liên lạc với Quý khách khi cần. Ngoài ra, các thông tin giao dịch gồm: lịch sử mua hàng, giá trị giao dịch, phương thức vận chuyển và thanh toán cũng được chúng tôi lưu trữ nhằm giải quyết những vấn đề có thể phát sinh về sau. Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp. Bảo hiểm PVI Thống Nhất được miễn trừ mọi trách nhiệm pháp lý đối với thông tin do Quý khách khai báo. </p>
              </div>
              <div className="item">
            <h4>Thu thập thông tin </h4>
                <p>Khi Quý khách có nhu cầu sử dụng sản phẩm, dịch vụ của Bảo hiểm PVI Thống Nhất trên website cần cung cấp một số thông tin về cá nhân và về đối tượng bảo hiểm như sau: tên, ngày sinh, giới tính, điện thoại, email, địa chỉ liên hệ, số CMND hay hộ chiếu của đối tượng bảo hiểm,...Tùy theo từng sản phẩm do khách hàng lựa chọn mà các thông tin yêu cầu cung cấp sẽ khác nhau. Sau khi chấp nhận mua sản phẩm, dịch vụ Quý khách được cung cấp tài khoản đăng nhập, theo đó, các thông tin cá nhân của khách hàng được tự động điền vào các đơn hàng mới khi sử dụng tài khoản này. </p>
              </div>
              <div className="item">
            <h4>Sử dụng thông tin </h4>
                <p>Các thông tin do Quý khách khai báo sẽ được sử dụng cho các mục đích sau đây: </p>
                <p>- Xác nhận danh tính Quý khách, xác định tính danh của đối tượng được bảo hiểm. </p>
                <p>- Xác nhận thanh toán. </p>
                <p>- Thực hiện các công việc khảo sát khách hàng, thực hiện các hoạt động quảng bá liên quan đến các sản phẩm và dịch vụ. </p>
                <p>- Sử dụng thông tin thu thập để chăm sóc Quý khách tốt hơn nhằm mang lại cho Quý khách sự thỏa mãn tuyệt đối đối với các dịch vụ cộng thêm được cung cấp bởi Bảo hiểm PVI Thống Nhất. </p>

              </div>
              <div className="item">
            <h4>Chia sẻ thông tin với bên thứ ba </h4>
                <p>Thông tin về Quý khách là một phần rất quan trọng trong việc kinh doanh và Chúng tôi sẽ không bán, không trao đổi cho một bên thứ ba nào khác. Chúng tôi sẽ không chia sẻ thông tin khách hàng trừ những trường hợp cụ thể sau đây: </p>
                <p>- Thông tin được chia sẻ là mã đơn hàng và số tiền của đơn hàng, không bao gồm các thông tin cá nhân của Quý khách nhằm thực hiện đối với các đơn hàng thanh toán trực tuyến. Khi thanh toán phí dịch vụ, khách hàng thực hiện theo yêu cầu của bên thứ ba là: Cổng thanh toán và các ngân hàng, được các bên thứ ba đảm bảo an ninh an toàn khi giao dịch. </p>
                <p>- Bảo hiểm PVI Thống Nhất đã ký Hợp đồng 3 bên với cổng thanh toán và các ngân hàng, đảm bảo các giao dịch thanh toán của Quý khách được an toàn và bảo mật theo quy định của Pháp luật về thanh toán điện tử. </p>
                <p>- Khi có yêu cầu của các cơ quan nhà nước có thẩm quyền, chúng tôi sẽ phối hợp cùng cấp thông tin theo đúng quy định của pháp luật và trong phạm vi thẩm quyền. </p>
                <p>- Trong những trường hợp còn lại, chúng tôi chỉ cung cấp thông tin cho bên thứ ba khi và chỉ khi nhận được sự đồng ý của Quý khách bằng văn bản. </p>
              </div>
              <div className="item">
            <h4>Lưu trữ và bảo vệ thông tin </h4>
                <p>Thông tin về Quý khách và website được lưu trữ an toàn và bảo mật, dữ liệu được mã hóa và được sao lưu 01 bản với mục đích dự phòng thảm họa. Website được bảo vệ bởi nhiều giải pháp công nghệ tiên tiến, sử dụng nhiều tầng tường lửa, sử dụng chứng thư số CA, chống giả mạo... </p>
                <h4>Thay đổi thông tin </h4>
                <p>Khi chấp nhận mua hàng, Quý khách được tạo 01 tài khoản để truy cập vào hệ thống, theo dõi các đơn hàng và lịch sử mua hàng, các thông tin cá nhân của Quý khách có thể thay đổi, điều chỉnh. </p>
                <h3>QUY ĐỊNH VỀ VIỆC MUA SẢN PHẨM </h3>
                <h4>Hướng dẫn mua hàng </h4>
                <p>Bước 1: Đăng nhập/Đăng ký tài khoản </p>
                <p>Đăng nhập vào tài khoản của Quý khách trên website bảo hiểm trực tuyến của Bảo hiểm PVI Thống Nhất <a href="https://bahi.vn" target="_blank">https://bahi.vn</a></p>
                <p>Bước 2: Tìm hiểu thông tin về sản phẩm Quý khách chọn 01 sản phẩm trên trang chủ của website hoặc trên menu chính của website để xem thông tin chi tiết về sản phẩm và xem báo giá. </p>
                <p>Bước 3: Đặt mua sản phẩm Nếu Quý khách đã tìm hiểu đầy đủ cũng như đồng ý với báo giá mà Bảo hiểm PVI Thống Nhất đưa ra, sau khi điền đầy đủ thông tin theo yêu cầu, Quý khách có thể ấn nút “Tiếp tục” để tiến hành khai báo thông tin về đối tượng bảo hiểm. </p>
                <p>Sau khi khai báo đầy đủ thông tin về đối tượng bảo hiểm theo hướng dẫn, Quý khách có thể ấn nút “Tiếp tục” để tiến hành thanh toán phí bảo hiểm. </p>
                <p>Bước 4: Thanh toán phí bảo hiểm Phương thức thanh toán </p>
                <p>- Phương thức thanh toán trực tiếp qua cổng thanh toán ví điện tử như Momo, VNPay</p>
                <h4>Thời gian trả lời đơn đặt hàng </h4>
                <p>Sau khi Quý khách thực hiện thành công việc thanh toán phí bảo hiểm cho Bảo hiểm PVI Thống Nhất. Giấy chứng nhận bảo hiểm sẽ được chuyển đến email khách hàng đăng ký tận tay Quý khách trong vòng 5 – 10 phút. Thông tin liên hệ doanh nghiệp Tên đơn vị: Công ty Bảo hiểm PVI Thống Nhất</p>
                <p>Địa chỉ: 506 Nguyễn Đình Chiểu - Phường 4 - Quận 3 - TP Hồ Chí Minh </p>
                <p>Điện thoại: <a href="tel:0888545458">0888 54 54 58</a> </p>
                <p>Fax: <a href="#!">028.39291679</a> </p>
                <p>Trung tâm bồi thường:  <a href="tel:1900545458">1900 54 54 58</a> </p>
                <h3>HOÀN PHÍ HỦY ĐƠN BẢO HIỂM, THAY ĐỔI THÔNG TIN TRÊN GIẤY CHỨNG NHẬN BẢO HIỂM (GCNBH) </h3>
                <p>Quy định về việc hoàn phí/ hủy đơn bảo hiểm Sau khi Quý khách thanh toán thành công và Bảo hiểm PVI Thống Nhất không từ chối chấp nhận bảo hiểm thì đơn bảo hiểm của Quý khách đã được chấp nhận. Trường hợp Quý khách muốn hoàn phí/hủy đơn bảo hiểm thì phải thực hiện theo hướng dẫn của Bảo hiểm PVI Thống Nhất. Việc hoàn phí/hủy đơn bảo hiểm này phải tuân thủ các quy định trong Quy tắc bảo hiểm và các quy định hiện hành của Bảo hiểm PVI.Đối với từng sản phẩm cụ thể Bảo hiểm PVI sẽ gửi kèm các quy định này. </p>
                <p>Lưu ý đối với sản phẩm bảo hiểm trách nhiệm dân sự bắt buộc, quý khách không được huỷ đơn sau khi đã tiến hành thanh toán phí.</p>
                <p>Quý khách chỉ được hủy đơn và hoàn 100% phí bảo hiểm trong trường hợp Bảo hiểm PVI từ chối chấp nhận bảo hiểm cho Quý khách. Trường hợp thông tin trên GCNBH không đúng so với thông tin đăng ký của Quý khách do lỗi sai sót của Bảo hiểm PVI Thống Nhất thì Bảo hiểm PVI Thống Nhất bằng chi phí của mình có trách nhiệm điều chỉnh lại thông tin trên GCNBH theo đúng yêu cầu của Quý khách. Trường hợp phải thay đổi thông tin trên GCNBH không phải do lỗi sai sót của Bảo hiểm PVI Thống Nhất thì người được bảo hiểm phải tuân thủ theo các quy định về việc thay đổi thông tin trên GCNBH và tất cả các chi phí phát sinh (nếu có) cho việc thay đổi thông tin này. Trường hợp này, Quý khách phải chủ động liên hệ và làm theo hướng dẫn của Bảo hiểm PVI Thống Nhất để tiến hành thủ tục thay đổi thông tin trên GCNBH. </p>
                <h4>Quy định chính sách hoàn trả tiền </h4>
                <p>Trường hợp khách hàng đã thanh toán phí qua cổng thanh toán Vnpay / Momo nhưng Bảo hiểm PVI không chấp nhận bảo hiểm thì trong vòng 10 ngày làm việc kể từ khi thông báo từ chối bảo hiểm, Chúng tôi sẽ chuyển trả lại khoản tiền nói trên cho Quý khách. </p>
                <h3>CHÍNH SÁCH GIẢI QUYẾT KHIẾU NẠI </h3>
                <p>Chúng tôi xin cam kết rằng sẽ không có sự khác biệt nào trong chất lượng phục vụ của Bảo hiểm PVI Thống Nhất giữa Quý khách tham gia bảo hiểm trực tuyến và Quý khách tham gia bảo hiểm qua kênh truyền thống, đặc biệt là trong khâu giải quyết khiếu nại bồi thường. Các Quý khách tham gia bảo hiểm của Bảo hiểm PVI Thống Nhất sẽ luôn được phục vụ với tiêu chuẩn cao nhất. Các sản phẩm bảo hiểm được bán trên website có các chính sách giải quyết khiếu nại, khác nhau từ việc thông báo tổn thất tại nạn, yêu cầu bồi thường, đánh giá rủi ro, giải quyết bồi thường khắc phục tổn thất... Các nội dung này đã được nêu đầy đủ trong các Quy tắc bảo hiểm. Tùy từng trường hợp cụ thể Quý khách sẽ tham khảo và thực hiện theo các điều khoản hoặc trực tiếp liên hệ với Bảo hiểm PVI Thống Nhất để được hướng dẫn.</p>
              </div>

          </PolicyContent>
        </Modal>
        <PolicyStyle>
        <p onClick={openModal}>Khi đã <span>Đăng nhập</span> là bạn đã <span>Đồng ý</span> với<br/> <span>Điều khoản sử dụng</span> của <span>BAHI</span></p>
      </PolicyStyle>
      </>
  )
}

export default Policy
