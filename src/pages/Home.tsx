import  React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container, Section } from "../components/Home/HomeContainer.styled";
import Filter from "../components/Home/Filter/Filter";
import CharacterList from "../components/Home/CharacterList/CharacterList";
import PaginationBar from "../components/Home/Pagination/Pagination";
import { getCharacters } from "../store/characters/charactersOperations";
import { store } from "../store/store";

const Home: React.FC = () => {
    const [page, setPage] = useState(1);
    type AppDispatch = typeof store.dispatch
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {  
        dispatch(getCharacters(page));
    }, [page]);
  
    return (
        <Section>
            <Container>
                <Filter />
                <CharacterList />
                <PaginationBar currentPage={page} setCurrentPage={setPage} />
            </Container>
        </Section>
    );
};
export default Home;