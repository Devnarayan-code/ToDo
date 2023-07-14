import { useState, useEffect } from "react";
import ToDo from "./Components/ToDo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/Handlapi";

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isupdating, setisUpdating] = useState(false);
  const [toDoId, settoDoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setisUpdating(true);
    settoDoId(_id);
    setText(text);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo's......."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isupdating
                ? () =>
                    updateTodo(toDoId, text, setText, setTodo, setisUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isupdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
