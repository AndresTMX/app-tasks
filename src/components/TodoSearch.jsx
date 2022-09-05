import React from 'react';
import styled from 'styled-components';

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChangue = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }
 
    return ( 
        <Input onChange={onSearchValueChangue} value={searchValue} placeholder='Buscar pendientes'></Input>
     );
}

export default TodoSearch;

const Input = styled.input`
  margin: 10px;
  height: 20px;
  width: 300px;
  padding: 10px;
  border: none;
  background-color: #3b3b3b;
  border: solid 1px #272727;
  color: white;
`;