import { useCallback, useReducer, useRef } from "react";
import { Contents, Reducer } from "./data";
import Create from "./assets/component/create";
import List from "./assets/component/list";
import "./App.scss";

function App() {

  const [state, dispatch] = useReducer(Reducer,Contents)
  const {datas} = state;
  const {todo} = state.inputs;
  const userId = useRef(3);

  const CreateTodo = useCallback((todo:string)=>{
    dispatch({
      type: 'create',
      dic: {
        id: userId.current,
        todo
      }
    })
    userId.current++
  },[todo])

  const deleteTodo = (id:Number) => {
    // console.log(id)
    dispatch({
      type: 'delete',
      id
    })
    // console.log(datas)
  }

  const updateTodo = (id:Number, todo:string) => {
    // console.log(id,todo)
    dispatch({
      type: 'update',
      id, todo
    })
  }

  const markTodo = (id:Number) =>{
    dispatch({
      type: 'mark',
      id
    })
  }

  const currentDate = new Date();
  const options:any = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="App">
      <div className="todo_wrap">
        <div className="top">
          <h2>my task</h2>
          <p>{currentDate.toLocaleDateString("en-us", options)}</p>
          <List
            datas={datas}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            markTodo={markTodo}
          />
          <Create CreateTodo={CreateTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
