import React, { useState } from "react";
import { Container } from "./styles";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="How about a joke?"
          value={search}
          onChance={e => setSearch(e.target.value)}
        />
        <div>
          <input type="submit" value="Search" />
          <input type="submit" value="I'm feeling lucky" />
        </div>
      </form>
    </Container>
  );
};

export default Search;
