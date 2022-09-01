import React from 'react';
import { BsFillEmojiFrownFill } from "react-icons/bs";
import styled from 'styled-components';

function ErrorState (props) {

    if(!props.error){
        console.log('Error al cargar elementos :' + props.error)
    } else {
        return 0;
    }

    return ( 
        <Container>
        <span>Ha ocurrido un error, intenta recargar la pagina</span>
        <Icon>
            <BsFillEmojiFrownFill/>
        </Icon>
        </Container>
     );
}

export default ErrorState ;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  padding:20px;
  color: white;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 80px;
  font-size: 70px;
  color:white;
`;