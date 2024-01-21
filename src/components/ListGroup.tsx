function ListGroup() {
  const items = ["Action", " Adventure", "RPG", "Strategy", "Shooter"];

  return (
    <>
      <h1>Game Genres List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className=" list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
