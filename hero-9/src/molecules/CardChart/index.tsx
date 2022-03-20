import { useCallback } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Chart, Container } from "./styles";
const CardChart = () => {
  const amountBars = Array.from(Array(12).keys());

  const fillZero = useCallback((value: number) => {
    const number = (value + 1).toString();
    return number.padStart(2, "0");
  }, []);
  return (
    <Container>
      <div>
        <HiOutlineArrowNarrowLeft size={16} color="#121212" />
        <strong>Stats</strong>
        <HiOutlineArrowNarrowRight size={16} color="#121212" />
      </div>
      <Chart>
        {amountBars.map((item) => (
          <div key={`unitChart-${item}`}>
            <div>
              <span></span>
            </div>
            <small>{fillZero(item)}</small>
          </div>
        ))}
      </Chart>
    </Container>
  );
};
export default CardChart;
