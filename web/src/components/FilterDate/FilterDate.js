import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

import Button from "../../components/Button"
// import calendarImg from "../"
import { ReactComponent as CalendarImg } from '../../assets/images/Calendar.svg';
import DatePicker from "react-datepicker";
import styled from 'styled-components'

const FilterDateStyle = styled.div`
  z-index: 333;
  margin-bottom: 24px;
  .filterW {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      width: 100%
    }
    .item {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 323;
      &.to {
        z-index: 300;
      }
      @media (max-width: 767px) {
        margin-bottom: 10px;
        width: 100%;

      }
      label {
        font-size: 14px;
        font-weight: 500;
        @media (max-width: 767px) {
          min-width: 45px;
        }
      }
      .dateW {
        display: flex;
        align-items: center;
        position: relative;
        @media (max-width: 767px) {
          width: calc(100% - 45px);
        }
        svg {
          width: 24px;
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          @media (max-width: 767px) {
          right: 10px;
          }
        }
      }
      .react-datepicker {
        .react-datepicker__navigation{
          z-index: 3 !important;
          position: absolute !important;
        }
      }
      .react-datepicker-wrapper {
        margin: 0 10px;
        background-color: white;
        border-radius : ${({ theme: { borderRadius } }) => borderRadius.sm};
        border: 1px solid #EBEDF8;
        @media (max-width: 767px) {
          width: 100%;
          margin: 0 0 0 10px;
        }
        &:hover , &:focus {
          border: 1px solid ${({ theme: { colors } }) => colors.primary}
        }
        * {
          outline: none !important;
        }
        input {
          height: 40px;
          border: none;
          padding: 0 16px;
          background-color: transparent;

        }

      }
    }
  }
`

const FilterDate = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  return (
    <FilterDateStyle>
      <div className="filterW">
        <div className="item from">
          <label>Từ</label>
          <div className="dateW">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <CalendarImg/>
          </div>
        </div>
        <div className="item to">
          <label>Đến</label>
          <div className="dateW">
            <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} />
            <CalendarImg/>

          </div>

        </div>
        <Button btnText="Áp dụng" type=" adminBtn primary sm"/>
      </div>

    </FilterDateStyle>
  )
}

export default FilterDate
