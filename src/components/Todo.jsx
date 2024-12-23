import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../redux/action/actiontypes";
import FilterButton from "./FilterButton";
import { FaSearch } from "react-icons/fa";
import List from "./List";

const Todo = () => {
  const saveTodo = () => {
    if (todotext.trim() !== "") {
      handleAddTodo(todotext.trim());
      setTodoText("");
    }
  };

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  
  const handleSearchTodo=(value)=>{
    setSearchText(value)
dispatch(updateSearchTodo(value))
  }
  //dispatch is ued to send your action to the store
  const dispatch = useDispatch();
  const [todotext, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-blue-700 uppercase">
        TODO LIST APP
      </h2>
      {/* input and buttons  */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="enter task"
          className="flex-grow p-2 border border-gray-300 rounded border-b-2 focus:outline-none focus:border-blue-500"
          name="text"
          id="addTodo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none
        "
          onClick={saveTodo}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* Filter search */}

      <div className="flex items-center justify-between flex-wrap">
        <FilterButton />
        {/* search */}
        <div className="flex items-center justify-end mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="search"
            value={searchText}
            name="text"
            onChange={(e) => handleSearchTodo(e.target.value)}
            id="addTodo"
            className="flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500
          sm:mr-4"
          />
          <button 
          onClick={saveTodo}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <FaSearch />
          </button>
        </div>
      </div>

      <List/>
    </div>
  );
};

export default Todo;
