import React from 'react';
import styled from 'styled-components';

function CloseModal(props) {

    const BtnClose = () => {
        props.setOpenModal(false);
      };

    return ( 
        <CloseBtn onClick={BtnClose} >X</CloseBtn>
     );
}

export default CloseModal;

const CloseBtn = styled.button`
  display: flex;
  position:absolute;
  top:-10px;
  right: -10px;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius:50px;
  height: 50px;
  width: 50px;
  font-size: 20px;
  font-weight:700;
  color: whitesmoke;
  :hover{
    border:solid 1px white;
  }
`;