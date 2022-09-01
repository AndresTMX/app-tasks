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
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: 100px;
  left: calc(50vw - 170px);
  width:300px;
  height: 300px;
  background-color: #3a3939;
  border-radius: 4px;
`;

