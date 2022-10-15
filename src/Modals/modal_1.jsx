import React from 'react';
import  ReactDOM  from 'react-dom';
import styled from 'styled-components';

function Modal({children}) {
    return ReactDOM.createPortal( 
       <ModalBox>
        {children}
       </ModalBox>,
        document.getElementById('modal')
     );
}

export default Modal;

const ModalBox = styled.div`
  display: flex;
  padding: 20px;
  align-items:center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:80%;
  max-width: 500px;
  height: 60%;
  border-radius: 4px;
  border:1px solid #0f0c2924;
  background: #0f0c29;
  background: -webkit-linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  box-shadow: 0px 15px 10px -15px #111;
`;

