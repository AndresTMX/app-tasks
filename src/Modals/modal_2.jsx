import React from 'react';
import  ReactDOM  from 'react-dom';
import styled from 'styled-components';

function Modal2({children}) {
    return ReactDOM.createPortal( 
       <ContainerShadow>
        {children}
       </ContainerShadow>,
        document.getElementById('modal_2')
     );
}

export default Modal2;

const ContainerShadow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000c0;
  z-index: 20;
`;