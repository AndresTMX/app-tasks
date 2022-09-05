import React from "react";
//Style App
import "./App.css"
//Hooks
import { useTodos } from "../Hooks/useTodos";
//Components
import TodoSearch from "../components/TodoSearch";
import TodoItem from "../components/TodoItem";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";
import CreateTodoBtn from "../components/CreateTodoBtn";
import Modal from "../Modal";
import CloseModal from "../components/CloseModal";
//State Aplication Components
import TodoForm from "../components/TodoForm";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState"; 

function App() {
  
  const {
    loading,
    error,
    totalTodos,
    todosCheck,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
  } = useTodos();

  return (
    <div className="App">
      <h1 className="title">Lista de pendientes</h1>

      <TodoCounter totalTodos={totalTodos} todosCheck={todosCheck} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && <ErrorState error={error} />}
        {loading && <LoadingState />}
        {!loading && !searchedTodos.length && <EmptyState />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <CloseModal setOpenModal={setOpenModal} />
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoBtn setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
