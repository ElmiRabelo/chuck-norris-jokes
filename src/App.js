import React from "react";
import GlobalStyles from "./styles";
import Header from "./components/header";
import Search from "./components/search";
import Jokes from "./components/jokes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Search />
      <Jokes jokes />
    </>
  );
}

export default App;
