import { Link, routes } from '@redwoodjs/router'

import { ReactComponent as BackButton } from '../../assets/images/ArrowLeft.svg';
import CardSp from "../../components/CardSp"
import RevenueTotal from "../../components/RevenueTotal"
import Title from "../../components/Title"
import styled from 'styled-components'

const RevenuePageStyle = styled.div`
    .i-head {
      position: relative;

      .backBtn {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
    }
    .i-body {


    }
`

const RevenuePage = () => {
  return (
    <div className="mobile">
      <RevenuePageStyle>
      <div className="i-head">
          <Link to="/" className="backBtn">
              <BackButton />
            </Link>
          <Title titleType="" titleText="Doanh thu"></Title>
        </div>
        <div className="i-body">
          <div className="select">
            <form  className="noBg">
                <div className="form-groups isSelect isHalf">
                    <div className="form-groups-w">
                    <div className="selectWrap noBorder">
                      <select>
                          <option selected disabled>Chọn năm </option>
                          <option>2010</option>
                          <option>2010</option>
                          <option>2010</option>
                          <option>2010</option>
                          <option>2010</option>
                          </select>
                      </div>
                      <label>Doanh thu năm</label>
                    </div>
              </div>
              <div className="form-groups isSelect isHalf">
                    <div className="form-groups-w">
                    <div className="selectWrap noBorder">
                      <select>
                          <option selected disabled>Chọn tháng </option>
                          <option>1</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          </select>
                      </div>
                      <label>Doanh thu tháng</label>
                    </div>
                </div>
              </form>
          </div>
          <div className="totalRevenue" style={{ marginBottom: "16px"}}>
              <RevenueTotal/>
          </div>
          <div className="card"  style={{ marginBottom: "16px"}}>
              <CardSp iconUrl="src/assets/images/Car.svg" title="Bán 300 BH xe ô tô" value="70.000.000 VNĐ"/>
          </div>
          <div className="card"  style={{ marginBottom: "16px"}}>
              <CardSp iconUrl="src/assets/images/Bike.svg" title="Bán 300 BH xe xe máy"  value="30.000.000 VNĐ" />
          </div>
        </div>
      </RevenuePageStyle>
    </div>
  )
}

export default RevenuePage
