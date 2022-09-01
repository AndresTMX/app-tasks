import React from "react";
import styled from "styled-components";
import { AiTwotoneDelete, AiOutlineCheck } from "react-icons/ai";

function TodoItem(props) {

  return (
    <ContentItem>
      <ContentIconCheck onClick={props.onComplete} completed={props.completed}>
        <AiOutlineCheck />
      </ContentIconCheck>
      <Item completed={props.completed}>
        {props.text}
        <ContentIconDelete onClick={props.onDelete}>
          <AiTwotoneDelete />
        </ContentIconDelete>
      </Item>
    </ContentItem>
  );
}

export default TodoItem;

const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentIconCheck = styled.span`
  display: flex;
  background-color: ${(props) => (props.completed === true ? "green" : "red")};
  padding: 8px;
  border-radius: 4px;
  color: white;
  :hover {
    border: solid 2px #ffffff93;
  }
`;

const ContentIconDelete = styled.span`
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 20px;
  padding: 10px;
  margin: 15px;
  background-color: #f5f5f5da;
  border-radius: 4px;
  color: black;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  text-decoration: ${(props) => props.completed === true ? "line-through" : "none"};
`;
