import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
   const {todosCheck, totalTodos} = React.useContext(TodoContext);

    return ( 
        <>
           <h2>Has completado {todosCheck} de {totalTodos} pendientes</h2>
        </>
     );
}

export default TodoCounter;