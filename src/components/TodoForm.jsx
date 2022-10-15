import React from "react";
import styled from "styled-components";
import NoPendingState from "./NoPendingState";
import Modal2 from "../Modals/modal_2";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [validate, setValidate] = React.useState(false);
  const validator = newTodoValue.length;

  const onChangue = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onAdd = (event) => {
    event.preventDefault();
    if (validator > 0) {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      setValidate(true);
    }
  };

  const onKeyUp = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      if (validator > 0) {
        addTodo(newTodoValue);
        setOpenModal(false);
      } else {
        setValidate(true);
      }
    }
  };

  return (
    <Formulario onSubmit={onAdd} onKeyPress={onKeyUp}>
      {!validator && validate && (
        <Modal2>
          <NoPendingState validate={validate} setValidate={setValidate} />
        </Modal2>
      )}
      <label>¿Qué tienes por hacer?</label>
      <Input
        value={newTodoValue}
        onChange={onChangue}
        placeholder="Escribe tu pendiente"
      />
      <ContenedorBtn>
        <BotonCancel onClick={onCancel}>Cancelar</BotonCancel>
        <BotonAdd type="submit">Agregar</BotonAdd>
      </ContenedorBtn>
    </Formulario>
  );
}

export default TodoForm;

const Formulario = styled.form`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 90%;
  color: #5333ed;
  font-weight: 600;
  text-align: center;
`;

const ContenedorBtn = styled.div`
  display: flex;
`;

const BotonCancel = styled.button`
  width: 110px;
  margin: 10px;
  background-color: #0f0c29;
  color: white;
  padding: 15px;
  :hover {
    border: solid 1px #5333ed;
  }
`;

const BotonAdd = styled.button`
  width: 110px;
  margin: 10px;
  background-color: #5333ed;
  color: white;
  padding: 15px;
  :hover {
    border: solid 1px #0f0c29;
  }
`;

const Input = styled.textarea`
  padding: 15px;
  margin: 10px;
  background-color: #0f0c29;
  color: white;
  line-height: 120%;
  border: none;
  border-radius: 4px;
  width: 90%;
  outline: 1px solid #5333ed;
`;
