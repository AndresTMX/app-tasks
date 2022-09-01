import React from 'react';
import { TodoContext } from '../TodoContext';
import styled from 'styled-components';

function TodoCounter() {
   const {todosCheck, totalTodos} = React.useContext(TodoContext);

    return ( 
        <>
           <Counter>Has completado {todosCheck} de {totalTodos} pendientes</Counter>
        </>
     );
}

export default TodoCounter;

const Counter = styled.h2`
  color:white;
`;