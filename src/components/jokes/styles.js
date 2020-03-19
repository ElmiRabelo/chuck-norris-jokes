import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 35px;

  img {
    display: block;
    width: 30%;
  }
  h2 {
    align-self: flex-start;
    margin-bottom: 20px;
    margin-left: 10%;
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    color: ${colors.primary};
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
  article {
    width: 80%;
    background-color: ${colors.secondary};
    border-radius: 5px;
    padding: 15px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.3);
  }

  /* Large Screens */
  @media only screen and (min-width: 1824px) {
    img {
      width: 50%;
    }
  }

  /* Mobile */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    img {
      width: 100%;
    }
  }
`;
