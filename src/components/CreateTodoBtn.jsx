import React from 'react'
import styled from 'styled-components';
import { AiOutlinePlus } from "react-icons/ai";

function CreateTodoBtn(props) {

  const OnclickButton = () => {
    props.setOpenModal(true);
  };

    return ( 
        <Btn onClick={ OnclickButton } > Agregar pendiente <AiOutlinePlus  /> </Btn>
     );
}

export default CreateTodoBtn;

const Btn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 15px;
  margin: 15px;
  background-color: #5333ed;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  transition: all 500ms ease;
  box-shadow: 0px 15px 10px -15px #111;   
  color: #0f0c29; 
  :hover {
    color: whitesmoke;
    background: #ff00cc;
    background: -webkit-linear-gradient(to right, #ff00cc, #5333ed);
    background: linear-gradient(to right, #ff00cc, #5333ed);
  }
  :focus {
    background: #ff00cc;
    background: -webkit-linear-gradient(to right, #ff00cc, #5333ed);
    background: linear-gradient(to right, #ff00cc, #5333ed);
    outline: 1px solid #0f0c29;
  }
`;