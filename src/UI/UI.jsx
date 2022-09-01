import React from "react";
import { TodoContext } from "../TodoContext";
import TodoSearch from "../components/TodoSearch";
import TodoItem from "../components/TodoItem";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";
import CreateTodoBtn from "../components/CreateTodoBtn";
import Modal from "../Modal";
import CloseModal from "../components/CloseModal";
import TodoForm from "../components/TodoForm";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import "../App.css";

function UI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, } =
  React.useContext(TodoContext);
  return (
    <div className="App">
      <h1 className="title">Lista de pendientes</h1>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <ErrorState error={error} />}
        {loading && <LoadingState/> }
        {(!loading && !searchedTodos.length) && <EmptyState/> }

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
          <CloseModal setOpenModal={setOpenModal}/>
          <TodoForm/>
      </Modal>
      )}

      <CreateTodoBtn
      setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default UI;
