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
  padding: 15px;
  border-radius: 4px;
  color: #0f0c29;
  font-weight: 500;
  font-size: 1rem;
  outline: 1px solid #333399;
  border: 1px solid #5333ed;
  background-color: transparent;
  box-shadow: 0px 15px 10px -15px #111;   
  ::placeholder{
    color: #0f0c29;
  } 
`;