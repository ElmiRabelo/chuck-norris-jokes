import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import axios from "axios";

const Search = ({ jokesHandler, handleLuck }) => {
  //Handle the value and it's change on input:search
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLuck, setIsLuck] = useState(false);

  useEffect(() => {
    //Call the api
    async function getJokes(search) {
      const result = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${search}`
      );

      jokesHandler(result.data.result[0]);
      setIsLuck(false);
      setSearch("");
    }

    if (isLuck) {
      getJokes(search);
    }
  }, [isLuck]);

  useEffect(() => {
    //Call the api
    async function getJokes(search) {
      const result = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${search}`
      );

      jokesHandler(result.data.result);
      setIsLoading(false);
      setSearch("");
    }

    if (isLoading) {
      getJokes(search);
    }
  }, [isLoading]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
  };

  const onLuckClick = e => {
    e.preventDefault();
    setIsLuck(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="How about a joke?"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div>
          <input type="submit" value="Search" />
          <input
            type="submit"
            value="I'm feeling lucky"
            onClick={onLuckClick}
          />
        </div>
      </form>
    </Container>
  );
};

export default Search;
