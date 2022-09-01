import React from 'react'
import { TodoContext } from '../TodoContext';
import styled from 'styled-components';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChangue = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
       setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
     }; 

    const onKeyUp = (event) => {
      if(event.charCode === 13){
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
      } 
    };

    return ( 
        <Formulario onSubmit={onAdd} onKeyPress={onKeyUp} >
            <label>¿Qué tienes por hacer?</label>
            <Input 
             value={newTodoValue}
             onChange={onChangue}
             placeholder='Escribe tu pendiente' />
            <ContenedorBtn>
                <BotonCancel onClick={onCancel} >Cancelar</BotonCancel>
                <BotonAdd type="submit" >Añadir pendiente</BotonAdd>
            </ContenedorBtn>
        </Formulario>
     );
}

export default TodoForm;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 250px;
  color: white;
  font-weight: 600;
  text-align: center;
`;

const ContenedorBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const BotonCancel = styled.button`
  margin: 10px;
  width: 100%;
  background-color: red;
  color: white;
  :hover{
    border: solid 1px white;
  }
`;

const BotonAdd = styled.button`
  margin: 10px;
  width: 100%;
  background-color: green;
  color: white;
  :hover{
    border: solid 1px white;
  }
`;

const Input = styled.textarea`
  padding: 10px;
  margin: 10px;
  background-color: #505050;
  color: white;
  line-height: 120%;
`;