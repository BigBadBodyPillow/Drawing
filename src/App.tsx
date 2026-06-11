import Container from "./component/Container";
import Pokeball from "./component/drawings/Pokeball";
import Cat from "./component/drawings/Cat";
import Cube from "./component/drawings/Cube";
import RainbowLine from "./component/RainbowLine";
import Twitch from "./component/drawings/Twitch";
import Shark from "./component/drawings/Shark";
import Bread from "./component/drawings/Bread";
import Saturn from "./component/drawings/Saturn";

function App() {
  return (
    <>
      <RainbowLine />
      <main className="max-w-233 w-full mt-20 grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-4 justify-items-center overflow-x-auto">
        <Container>
          <Pokeball />
        </Container>

        <Container>
          <Cat />
        </Container>

        <Container>
          <Cube />
        </Container>

        <Container>
          <Twitch />
        </Container>

        <Container>
          <Shark />
        </Container>

        <Container>
          <Bread />
        </Container>

        <Container>
          <Saturn />
        </Container>
      </main>
    </>
  );
}

export default App;
