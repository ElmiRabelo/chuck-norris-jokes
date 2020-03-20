import React from "react";
import { Container, LuckyContainer } from "./styles";
import ChuckImage from "../../assets/chuck.gif";
import LuckyNorris from "../../assets/lucky-norris.gif";
import moment from "moment";

const Jokes = ({ jokes }) => {
  // Verify if it is the lucky joke, just one joke as object and not array
  if (typeof jokes === "object" && jokes.value) {
    return (
      <Container>
        <h2>Your lucky joke: </h2>
        <LuckyContainer>
          <article>
            <div className="imageContainer">
              <img src={jokes.icon_url} alt="Chuck Icon" />
              {jokes.categories &&
                jokes.categories.map(category => (
                  <span className="jokesCategories">
                    <span>{category}</span>
                  </span>
                ))}
              <span className="jokeDate">
                Criado em: {moment(jokes.created_at).format("DD-MM-YYYY")}
              </span>
            </div>

            <div className="contentContainer">
              <p>{jokes.value}</p>
            </div>
          </article>
        </LuckyContainer>
        <img className="luckyNorris" src={LuckyNorris} alt="Lucky Norris" />
      </Container>
    );
  }

  // Verify if it is an array of jokes
  if (jokes.length) {
    return (
      <Container>
        <h2>Jokes, jokes and more jokes: </h2>
        <section className="normal-section">
          {jokes.map(joke => (
            <article key={joke.id}>
              <div className="image-container">
                <img src={joke.icon_url} alt="Chuck Icon" />
                {joke.categories &&
                  joke.categories.map(category => (
                    <span className="jokes-categories">
                      <span>{category}</span>
                    </span>
                  ))}
                <span className="joke-date">
                  Criado em: {moment(joke.created_at).format("DD-MM-YYYY")}
                </span>
              </div>

              <div className="content-container">
                <p>{joke.value}</p>
              </div>
            </article>
          ))}
        </section>
      </Container>
    );
  }

  // return an image if doesn't have nothing
  return (
    <Container>
      <img src={ChuckImage} alt="Chuck Norris Approves" />
    </Container>
  );
};

export default Jokes;
