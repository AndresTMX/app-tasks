import React from 'react';
import styled from 'styled-components';
import { TodoContext } from '../TodoContext/index';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChangue = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }
 
    return ( 
        <Input onChange={onSearchValueChangue} value={searchValue} placeholder='Search todo'></Input>
     );
}

export default TodoSearch;

const Input = styled.input`
  margin: 10px;
  height: 20px;
  width: 300px;
  padding: 10px;
  border: none;
`;