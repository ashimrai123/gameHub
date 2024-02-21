import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Action", " Adventure", "RPG", "Strategy", "Shooter"];

  return (
    <div>
      <ListGroup items={items} heading="Game Genres List"></ListGroup>
    </div>
  );
}

export default App;
