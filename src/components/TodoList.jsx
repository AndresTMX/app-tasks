import React from 'react';
import styled from 'styled-components';

function TodoList( props ) {
    return (
        <section>

            <Lista>
                {props.children}
            </Lista>

        </section>
    );
}

export default TodoList;

const Lista = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items:center;
`;