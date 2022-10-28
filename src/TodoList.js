import styled from "styled-components"

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
  color: #555;
  padding: 0;
  &:before {
    content: "";
    cursor: pointer;
    display: block;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid #e66;
    border-radius: .3em;
    margin-right: .5em;
  }
  &:hover:after {
    position: absolute;
    right: 2em;
    color: #e66;
    font-size: 20px;
    font-family: "Material Icons";
    content: "delete";
  }
`;

const items = [
  "Get a new helmet",
  "Purchase Milk & Corn Flakes",
  "Pay Mortgage",
  "Complete Assignments",
  "Replace laptop's screen"
]

export default function TodoList() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput  placeholder="Todo 내용을 입력해주세요."/>
      <div>
      {items.map((item) =>
        <Todo>{item}</Todo>
      )}
      </div>
    </div>
  )
}