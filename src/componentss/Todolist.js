import React from 'react';

function Todolist({todos , setTodos , setEdit}) {
    const handleCheck = (id) => {
        setTodos(todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,completed : !todo.completed}
            }
            return todo
        }));
    };
    const hanleEdit = (id) => {
        const FindTodo=todos.find((todo)=>todo.id === id )
        setEdit(FindTodo);
    };
    
    
    
    const handleDelete = (id) => {
        setTodos(todos.filter((todo)=>todo.id !== id));
    };
    
    return (
      <div className=" mt-[20px] list-none">
        {todos.map((todo) => {
          return (
            <li className="justify-center mb-[10px]   flex" key={todo.id}>
              <input
                className={`${
                  todo.completed ? "completed" : ""
                }  p-[10px] rounded-[10px] mr-[10px] text-[20px] `}
                value={todo.title}
                type="text"
                onChange={(event) => event.preventDefault()}
              />
              <button
                className="mr-[10px] text-[20px] text-[#de4a1e]"
                onClick={() => handleCheck(todo.id)}
              >
                <i className="fa-solid fa-circle-check"></i>
              </button>
              <button
                className="mr-[10px] text-[20px] text-[#bda331]"
                onClick={() => hanleEdit(todo.id)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="mr-[10px] text-[20px] text-[#4a4e82]"
                onClick={() => handleDelete(todo.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          );
        })}
      </div>
    );
}

export default Todolist;