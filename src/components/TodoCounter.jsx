import React from "react";
import styled from "styled-components";

function TodoCounter({ todosCheck, totalTodos }) {
  return (
    <>
      <Counter>
        Has completado {todosCheck} de {totalTodos} pendientes
      </Counter>
    </>
  );
}

export default TodoCounter;

const Counter = styled.h2`
color: #5333ed;
`;
