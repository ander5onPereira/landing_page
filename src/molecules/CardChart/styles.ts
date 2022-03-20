import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  left: 30px;
  width: 210px;
  height: 210px;
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
  padding: 20px;

  animation: showOnChart 1s linear forwards;
  opacity: 0;
  bottom: -50px;
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
      bottom: -50px;
    }

    to {
      opacity: 1;
      bottom: 0px;
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
        height: 91px;
        width: 2.1px;
        border-radius: 5px;
        display: flex;
        justify-content: flex-end;
       
        span{
          background-color: #5236ff;
          display: block;
          height:0px;
          max-height: ${rand}px;
          width: 3.5px;
          border-radius: 5px;
  
          animation:animationHeight 1s linear forwards;
        }
      }
      small{
        color:#84ccfd;
        font-size: 10px;
        margin-top:10px;
      }
    }
    `);
  });
  return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;

  ${generateBars()}

  @keyframes animationHeight {
    from {
      height: 0px;
    }

    to {
      height: 91px;
    }
  }
`;
