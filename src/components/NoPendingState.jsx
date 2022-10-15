import React from "react";
import styled from "styled-components";

function NoPendingState({validate, setValidate}) {

    const onclick = () => {
        setValidate(!validate)
    }

  return (
    <>
    <Message>
      ¡Upss!
      <br />
      Parece que haz olvidado escribir
    </Message>
    <Button onClick={onclick}>Ok</Button>
    </>
    
  );
}

export default NoPendingState;

const Message = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 300px;
  height: 80px;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  background-color: #5333ed;
  border-radius: 4px;
  z-index: 21;
`;

const Button = styled.button`
  margin: 30px;
  background-color: #5333ed;
  color: white;
  padding: 15px;
  width: 80px;
`;
