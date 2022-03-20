import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  left: 2rem;
  width: 14rem;
  height: 14rem;
  border-radius: 1.2rem;
  background-color: var(--white);
  box-shadow: 0 1.1rem 1.8rem rgba(0, 0, 0, 0.1);
  padding: 1.3rem;

  animation: showOnChart 1s linear forwards;
  opacity: 0;
  bottom: -3.3rem;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: 600;
    }
  }
  @keyframes showOnChart {
    from {
      opacity: 0;
      bottom: -3.3rem;
    }

    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;

function generateBars() {
  const amountBars = [...Array(12).keys()];
  let styleSpan: any = [];
  amountBars.forEach((item) => {
    const rand = Math.ceil(Math.floor(Math.random() * (91 - 0)) + 0); //    Math.random() * Math.log2((item + 1) * 10) * 17);
    styleSpan.push(`
    div:nth-child(${item + 1}){
      display:flex;
      justify-content:center;
      align-items: center;
      flex-direction:column;
      div{
        background-color: #eff3fe;
        height: 6rem;
        width: 0.14rem;
        border-radius: 0.33rem;
        display: flex;
        justify-content: flex-end;
       
        span{
          background-color: #5236ff;
          display: block;
          height:0;
          max-height: ${rand}px;
          width: 0.23rem;
          border-radius: 0.3rem;
  
          animation:animationHeight 1s linear forwards;
        }
      }
      small{
        color:#84ccfd;
        font-size: 0.7rem;
        margin-top:0.6rem;
      }
    }
    `);
  });
  return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 1.8rem;

  ${generateBars()}

  @keyframes animationHeight {
    from {
      height: 0;
    }

    to {
      height: 6rem;
    }
  }
`;
