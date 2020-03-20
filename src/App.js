import React, { useState } from "react";
import GlobalStyles from "./styles";
import Header from "./components/header";
import Search from "./components/search";
import Jokes from "./components/jokes";

function App() {
  const [jokes, setJokes] = useState([]);

  //it will be passed to search and then return the jokes from the api
  const jokesHandler = jokes => {
    setJokes(jokes);
  };
  return (
    <>
      <GlobalStyles />
      <Header />
      <Search jokesHandler={jokesHandler} />
      <Jokes jokes={jokes} />
    </>
  );
}

export default App;
