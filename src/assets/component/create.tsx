import { useState } from "react";
import "../../App.scss";

export default function Create({ CreateTodo }) {
  const [inputs, setInputs] = useState({
    todo: "",
  });

  const { todo } = inputs;

  function newTodo(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function createBtn() {
    CreateTodo(todo);
    setInputs({
      todo: "",
    });
  }

  return (
    <div className="create_wrap">
      <input type="text" name="todo" value={todo} onChange={newTodo} />
      <div onClick={createBtn} className="addBtn">
        Add task
      </div>
    </div>
  );
}
