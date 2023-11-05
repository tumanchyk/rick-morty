import { Link } from "react-router-dom";
import { Container, Section } from "../components/Home/HomeContainer.styled";
import CharacterList from "../components/Home/CharacterList/CharacterList";

const Home = () => {
  return <>
      <Section>
    <Container>
      <CharacterList />
     <Link to={"character/2"}>to</Link>

    </Container>
      </Section>
  </>;
};
export default Home;