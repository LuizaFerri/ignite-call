import { CaretLeft, CaretRight } from "phosphor-react";
import { getWeekDays } from "../../utils/get-week-days";
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from "./styles";
import { useState } from "react";
import dayjs from "dayjs";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("date", 1).toDate();
  });

  function handlePreviousMonth() {
    setCurrentDate((prevState) =>
      dayjs(prevState).subtract(1, "month").toDate()
    );
  }

  function handleNextMonth() {
    setCurrentDate((prevState) => dayjs(prevState).add(1, "month").toDate());
  }

  const shortWeekDays = getWeekDays({ short: true });
  const currentMonth = dayjs(currentDate).format("MMMM");
  const currentYear = dayjs(currentDate).format("YYYY");

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button onClick={handlePreviousMonth}>
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth}>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
            <td>
              <CalendarDay>4</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>5</CalendarDay>
            </td>
            <td>
              <CalendarDay>6</CalendarDay>
            </td>
            <td>
              <CalendarDay>7</CalendarDay>
            </td>
            <td>
              <CalendarDay>8</CalendarDay>
            </td>
            <td>
              <CalendarDay>9</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>10</CalendarDay>
            </td>
            <td>
              <CalendarDay>11</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}
