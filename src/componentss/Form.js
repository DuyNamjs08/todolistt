import React from "react";
import { useEffect } from "react";

function Form({ input, setInput, todos, setTodos, edit, setEdit }) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { title, id, completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput( edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  const onchangInput = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!input){
      return alert('you need fill input ...')
    }
    if (!edit) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          title: input,
          completed: false,
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        className="py-[16px] pl-[64px] pr-[16px] text-[24px] shadow-input-shadow 
          "
        type="text"
        value={input}
        placeholder="What need to be done ..."
        onChange={onchangInput}
      />
      <button
        type="submit"
        className="text-center p-[16px] bg-[#ba9282] text-[#fff]
        text-[18px]
         hover:bg-[#e3543e] hover:transition-colors "
      >
        {edit ? 'OK' : 'Add'}
      </button>
    </form>
  );
}

export default Form;
