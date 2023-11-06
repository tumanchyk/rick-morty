import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Section } from "../components/Home/HomeContainer.styled";
import Filter from "../components/Home/Filter/Filter";
import CharacterList from "../components/Home/CharacterList/CharacterList";
import { fetchCharacters, fetchCharactersLimited } from "../api/api";
import PaginationBar from "../components/Home/Pagination/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {  
    fetchCharacters(page).then(setCharacters);
    // fetchCharactersLimited(6).then(setCharacters)
  }, [page]);
  
  return <>
    <Section>
      <Container>
        <Filter />
        <CharacterList list={characters} />
        <PaginationBar currentPage={page} setCurrentPage={setPage} />
      </Container>
    </Section>
  </>
};
export default Home;