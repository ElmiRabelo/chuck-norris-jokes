import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      border: 0;
      outline: 0;
    }

    /* Sumbmit buttons */
    div {
      display: flex;
      justify-content: space-around;
      width: 50%;
      margin-top: 10px;

      input[type="submit"] {
        padding: 10px 15px;
        border-radius: 2px;
        background-color: ${colors.secondary};
        font-size: 1rem;
        color: ${colors.lighter};
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
        letter-spacing: 0.1rem;
        transition: all 0.3s;
        &:hover {
          cursor: pointer;
          background-color: ${colors.primary};
        }
      }
    }

    /* Search input */
    input[type="search"] {
      width: 70%;
      background-image: url(https://img.icons8.com/pastel-glyph/64/000000/search--v2.png);
      background-position: 10px 10px;
      background-repeat: no-repeat;
      background-size: 22px;
      padding: 15px 20px;
      border-radius: 5px;
      text-align: center;
      margin-bottom: 10px;
      background-color: #f3f3f3;
      border-bottom: 3px solid ${colors.secondary};
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6), 0px 0px 2px rgba(0, 0, 0, 0.4);
      &::placeholder {
        color: ${colors.dark};
        opacity: 0.7;
        font-size: 18px;
      }
    }
  }

  /* Large Screens */
  @media only screen and (min-width: 1824px) {
    form {
      /* Sumbit buttons */
      div {
        input[type="submit"] {
          font-size: 1.2rem;
        }
      }

      input[type="search"] {
        padding: 16px 25px;
        background-position: 10px 15px;
        background-repeat: no-repeat;
        background-size: 25px;
        &::placeholder {
          font-size: 22px;
        }
      }
    }
  }

  /* Mobile devices */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* Container size */
    width: 100%;
    form {
      /* Sumbit buttons */
      div {
        width: 100%;
        justify-content: space-between;
      }

      /* Input search */
      input[type="search"] {
        width: 100%;

        &::placeholder {
          color: ${colors.dark};
          opacity: 0.7;
          font-size: 13px;
        }
      }
    }
  }
`;
