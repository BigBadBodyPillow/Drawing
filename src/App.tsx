import Container from "./component/Container";
import Pokeball from "./component/drawings/Pokeball";
import Cat from "./component/drawings/Cat";
import Cube from "./component/drawings/Cube";
import RainbowLine from "./component/RainbowLine";
import Youtube from "./component/drawings/Youtube";

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
          <Youtube />
        </Container>
      </main>
    </>
  );
}

export default App;
