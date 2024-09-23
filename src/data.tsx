const Contents = {
    inputs: {
      todo: ""
    },
  
    datas: [
      {
        id: 1,
        todo: "리액트 복습하기",
        checks : false
      },
      {
        id: 2,
        todo: "타입스크립트 공부하기",
        checks : false
      },
    ],
  };
  
  const Reducer = (state:any, action:any) => {
    switch (action.type) {
        case "create":
          return {
            inputs: Contents.inputs,
            datas: state.datas.concat(action.dic)
          };
        case "delete":
          return {
            ...state,
            datas: state.datas.filter((data:any) => data.id !== action.id)
          };
        case "update":
          return {
            ...state,
            datas: state.datas.map((data:any) =>data.id === action.id? 
               { 
                    ...data,
                    todo: action.todo,
                  }  
                : data) };
    
        case "mark" :
          return{
            ...state,
            datas: state.datas.map((data:any)=>{
              if(data.id === action.id){
                return{...data, checks: !data.checks}
              }
              return data
            })
          }
        default:
          return state;
      }
  }

  export {Contents, Reducer}