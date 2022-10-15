import React from 'react';
import styled from 'styled-components';

function CloseModal(props) {

    const BtnClose = () => {
        props.setOpenModal(false);
      };

    return ( 
        <Container>
          <CloseBtn onClick={BtnClose}>X</CloseBtn>
        </Container>
     );
}

export default CloseModal;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #0f0c29;
  width: 100%;
  height:40px;
  position:absolute;
  top:-10px;
  z-index: 4;
`;

const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  position:absolute;
  top:0px;
  align-items: center;
  background-color:transparent;
  height: 40px;
  width: 20px;
  font-size: 20px;
  font-weight:700;
  color: #5333ed;
  z-index: 5;
  :focus{
    outline: none;
    border: none;
  }
`;