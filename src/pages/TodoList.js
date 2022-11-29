// import { useState } from "react";
import styled from "styled-components"
import color from "../Color";
import GroupNav from "../components/GroupNav";
import Inner from "../components/Inner";

const TodoInput = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  background-color: #eee;
  border: 0;
  border-radius: .5em;
  outline: none;
  box-sizing: border-box;
  padding: 1em;
`;
const Todo = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${color.secondary};
  padding: 0;
  &:hover:after {
    position: absolute;
    right: 2em;
    color: ${color.primary};
    font-size: 20px;
    font-family: "Material Icons";
    content: "delete";
  }
`;

const CheckBox = styled.span`
  color: ${color.primary};
  text-align: center;
  cursor: pointer;
  width: 1.2em;
  height: 1.2em;
  border: 1px solid ${color.primary};
  border-radius: .4em;
  margin-right: .5em;
`

const items = [
  "Get a new helmet",
  "Purchase Milk & Corn Flakes",
  "Pay Mortgage",
  "Complete Assignments",
  "Replace laptop's screen"
]

export default function TodoList() {
  return (
    <>
      <GroupNav />
      <Inner>
        <h1>Todo List</h1>
        <TodoInput  placeholder="Todo 내용을 입력해주세요."/>
        <div>
        {items.map((item) =>
            <Todo><CheckBox>{false?"✔":""}</CheckBox>{item}</Todo>
        )}
        </div>
      </Inner>
    </>
  )
}