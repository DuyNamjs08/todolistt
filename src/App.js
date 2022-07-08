// component
import React, { useState,useEffect } from "react";
import Header from "./componentss/Header";
import Form from "./componentss/Form";
import Todolist from "./componentss/Todolist";
// csss
import "./css/App.css";
function App() {
  const initialState=JSON.parse(localStorage.getItem('todos')) || []
  console.log(initialState);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [edit , setEdit] =useState(null)
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <div className=" bg-[#f5f5f5] h-screen w-full">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        edit={edit}
        setEdit={setEdit}
      />
      <Todolist todos={todos} setTodos={setTodos} setEdit={setEdit} />
    </div>
  );
}

export default App;
