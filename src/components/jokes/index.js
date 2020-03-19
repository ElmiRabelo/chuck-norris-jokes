import React from "react";
import { Container } from "./styles";
import ChuckImage from "../../assets/chuck.gif";

const Jokes = ({ jokes }) => {
  if (jokes) {
    return (
      <Container>
        <h2>Jokes, jokes and more jokes: </h2>
        <article>
          <p>
            Isso é uma piada Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Pariatur repellat necessitatibus tempore natus libero.
            Voluptatum repellendus perferendis sed iste laborum?
          </p>
        </article>
      </Container>
    );
  }

  return (
    <Container>
      <img src={ChuckImage} alt="Chuck Norris Approves" />
    </Container>
  );
};

export default Jokes;
