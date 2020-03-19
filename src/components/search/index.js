import React from "react";
import { Container } from "./styles";

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="How about a joke?" />
        <div>
          <input type="submit" value="Search" />
          <input type="submit" value="I'm feeling lucky" />
        </div>
      </form>
    </Container>
  );
};

export default Search;
