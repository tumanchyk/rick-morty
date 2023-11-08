import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Container, Section } from "../components/Home/HomeContainer.styled";
import Filter from "../components/Home/Filter/Filter";
import CharacterList from "../components/Home/CharacterList/CharacterList";
import PaginationBar from "../components/Home/Pagination/Pagination";
import { getCharacters } from "../store/characters/charactersOperations";

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(getCharacters(page));
  }, [page]);
  
  return <>
    <Section>
      <Container>
        <Filter />
        <CharacterList />
        <PaginationBar currentPage={page} setCurrentPage={setPage} />
      </Container>
    </Section>
  </>
};
export default Home;