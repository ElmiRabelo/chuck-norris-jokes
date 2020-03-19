import React from "react";
import GlobalStyles from "./styles";
import Header from "./components/header";
import Search from "./components/search";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Search />
    </>
  );
}

export default App;
