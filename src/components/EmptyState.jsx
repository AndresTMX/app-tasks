import React from 'react';
import { BsEmojiLaughingFill } from "react-icons/bs";
import styled from 'styled-components';

function EmptyState() {
    return ( 
        <Container>
        <span>¡Felicidades, no tienes ningun pendiente!</span>
        <Icon>
            <BsEmojiLaughingFill/>
        </Icon>
        </Container>
     );
}

export default EmptyState;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 80px;
  font-size: 70px;
  color: white;
`;