import React from 'react'
import styled from 'styled-components';
import { AiOutlinePlus } from "react-icons/ai";

const styles = {
  position: 'relative',
  left: '-15px',
  fontWeight:'600',
  fontSize:'20px',
  color:'white'
}


function CreateTodoBtn(props) {

  const OnclickButton = () => {
    props.setOpenModal(true);
  };

    return ( 
        <Btn onClick={ OnclickButton } > Agregar pendiente <AiOutlinePlus style={styles} /> </Btn>
     );
}

export default CreateTodoBtn;

const Btn = styled.button`
  display: flex;
  justify-content: space-between;
  width:300px;
  padding: 10px;
  margin: 15px;
  background-color: red;
  align-items: center;
  font-weight: 600;
  color: white;
  :hover {
    border: 1px solid white;
  }
`;