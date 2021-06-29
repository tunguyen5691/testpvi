import BlockTitle from "../../components/BlockTitle"
import InsurrancePackageItem from "../../components/InsurrancePackageItem"
import styled from 'styled-components'

const InsurrancePackageListStyle = styled.div`
  background-color: #F0F2F6;
  padding: 32px 24px 64px;
  margin-top: 24px;
  border-radius : ${({ theme: { borderRadius } }) => borderRadius.lg} ${({ theme: { borderRadius } }) => borderRadius.lg} 0 0;
  &.md {
    min-height: calc(100vh - 80px);
  }
  &.sm {
    min-height: calc(100vh - 240px);
  }
  .list {
    margin-top: 32px;
  }
`

const InsurrancePackageList = ({size}) => {
  return (
    <InsurrancePackageListStyle className={`${size}`}>
      <BlockTitle text="CÁC GÓI BẢO HIỂM" />
      <div className="list" >

          <InsurrancePackageItem  thumbUrl="src/assets/images/Car.svg" packageName="Bảo hiểm xe ô tô" description="Bảo hiểm TNDS bắt buộc"/>
          <InsurrancePackageItem  thumbUrl="src/assets/images/bike.svg" packageName="Bảo hiểm xe máy" description="Bảo hiểm TNDS bắt buộc"/>
        </div>
    </InsurrancePackageListStyle>
  )
}

export default InsurrancePackageList
