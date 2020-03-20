import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;

  /* Image on lucky result */
  .luckyNorris {
    width: 30%;
    display: block;
    margin: 20px 0;
  }

  h2 {
    align-self: flex-start;
    margin-bottom: 20px;
    margin-left: 3%;
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    color: ${colors.primary};
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }

  /* Section Jokes  */
  .normal-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    grid-column-gap: 40px;
    grid-row-gap: 5px;
    padding: 0 20px;

    article {
      background-image: linear-gradient(
        109.6deg,
        rgba(157, 75, 199, 1) 11.2%,
        rgba(119, 81, 204, 1) 83.1%
      );
    }
  }

  article {
    width: 100%;
    margin: 10px 0;
    line-height: 1.2;

    border-bottom: 3px solid ${colors.dark};
    border-top: 3px solid ${colors.dark};
    border-radius: 5px;
    padding: 25px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4), 0 0 5px rgba(0, 0, 0, 0.4);
    .image-container {
      display: flex;
      img {
        display: block;
        width: 56px;
        margin-right: 30px;
      }

      .jokes-categories {
        padding: 3px 10px;
        background-color: ${colors.grey};
        font-size: 1rem;
        text-transform: capitalize;
        border-radius: 4px;
        margin-right: 10px;
        height: fit-content;
        align-self: center;
        border: 1px solid #333;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
      }

      .joke-date {
        align-self: center;
        color: ${colors.lighter};
        font-size: 1rem;
        letter-spacing: 0.01rem;
      }
    }

    .content-container {
      p {
        margin-top: 20px;
        line-height: 1.3;
        padding: 0 5px;
        color: ${colors.dark};
      }
    }
  }

  /* Large Screens */
  @media only screen and (min-width: 1824px) {
    .normal-section {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-column-gap: 50px;
      grid-row-gap: 10px;
      .image-container {
        img {
          width: 50%;
        }
      }
      .jokes-categories {
        font-size: 1.2rem;
      }
      .joke-date {
        font-size: 1.2rem;
      }

      .content-container {
        p {
          margin-top: 20px;
          line-height: 1.3;
          font-size: 1.2rem;
          padding: 0 5px;
          color: ${colors.dark};
        }
      }
    }
  }

  /* Mobile */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .luckyNorris {
      width: 60%;
    }

    .normal-section {
      grid-template-columns: 1fr;
      justify-content: center;
      padding: 0 20px;

      .image-container {
        flex-direction: column;
        img {
          margin-right: 0;
          align-self: center;
        }
      }

      .jokes-categories {
        margin: 10px 0;
      }

      .joke-date {
        margin-top: 10px;
      }
    }

    article {
      padding: 15px 10px;
    }
  }
`;

export const LuckyContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  article {
    width: 80%;
    background-color: ${colors.auxiliar};
  }

  /* Mobile */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    article {
      width: 100%;
    }
  }
`;
