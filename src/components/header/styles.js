import styled, { keyframes } from "styled-components";
import { colors } from "../../styles";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(4px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-7px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(7px, 0, 0);
  }
`;

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    letter-spacing: 0.8rem;
    line-height: 1.6;
    color: ${colors.primary};

    &:hover {
      animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }

  span {
    font-size: 1.1rem;
    color: ${colors.dark};
  }

  /* Large Screens */
  @media only screen and (min-width: 1824px) {
    h1 {
      font-size: 4.2rem;
    }

    span {
      font-size: 2rem;
    }
  }

  /* Mobile */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-bottom: 1.6rem;
    h1 {
      font-size: 2rem;
      letter-spacing: normal;
      line-height: 1.1;
    }

    span {
      font-size: 0.9rem;
      margin: 0 auto;
    }
  }
`;
