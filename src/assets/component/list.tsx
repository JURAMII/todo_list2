import { Del, Edit, Check, Undo } from "../img/img";
import "../../App.scss";
import { useState } from "react";


const Event = ({ data, deleteTodo, updateTodo, markTodo} ) => {

  const [onUpdate, setOnUpdate] = useState(true);

  const [edits, setEdits] = useState({
    id: data.id,
    todo: data.todo,
  });

  function deleteBtn() {
    deleteTodo(data.id);
    setEdits({
      id: "",
      todo: "",
    });
  }
  function editBtn() {
    // console.log(edits)
    setOnUpdate(false);
    setEdits({
      id: data.id,
      todo: data.todo,
    });
  }

  function cancleBtn() {
    setOnUpdate(true);
  }

  function changeTxt(e) {
    const { name, value } = e.target;

    setEdits({
      ...edits,
      [name]: value,
    });
    // console.log(e.target)
  }

  function changeBtn() {
    updateTodo(edits.id, edits.todo);
    setOnUpdate(true);
    // console.log(edits.todo)
  }

  function checkBtn() {
    markTodo(data.id);
  }

  return (
    <li className="lists_wrap">
      {onUpdate ? (
        <div className="lists">
          <input type="checkbox" onClick={checkBtn} />
          <p
            className="todo"
            style={{ textDecoration: data.checks ? "Line-through" : "none" }}
          >
            {data.todo}
          </p>
          <div className="list_btns">
            <span onClick={editBtn}>
              <img src={Edit} alt="수정" />
            </span>
            <span onClick={deleteBtn}>
              <img src={Del} alt="삭제" />
            </span>
          </div>
        </div>
      ) : (
        <div className="edits">
          <input
            type="text"
            name="todo"
            value={edits.todo}
            onChange={changeTxt}
          />
          <div className="edit_btns">
            <span onClick={changeBtn}>
              <img src={Check} alt="수정완료" />
            </span>
            <span onClick={cancleBtn}>
              <img src={Undo} alt="수정취소" />
            </span>
          </div>
        </div>
      )}
    </li>
  );
};

export default function List({ datas, deleteTodo, updateTodo, markTodo }) {
    
  return (
    <div>
      <ul>
        {datas.map((data) => (
          <Event
            key={data.id}
            data={data}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            markTodo={markTodo}
          />
        ))}
      </ul>
    </div>
  );
}
