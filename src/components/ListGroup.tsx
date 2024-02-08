import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Action", " Adventure", "RPG", "Strategy", "Shooter"];

  //Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>Game Genres List</h1>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className=" list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
