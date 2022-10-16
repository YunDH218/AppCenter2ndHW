import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Whether from "./Whether";

const ButtonWrap = styled.div`
  width: 20vw;
  height: 100vh;
  padding-top: 15vh;
  border-right: 1px solid #aaa;
  text-align: center;
  box-sizing: border-box;
`
const Button = styled.div`
  color: #555;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1em;
  cursor: pointer;
  &.active {
    color: #e66;
    font-weight: 700;
  }
`
const ContentWindow = styled.div`
  width: 100%;
  padding: 2em 2em 0;
`

export default class ContentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "todo_list"}
    this.setStateTodo = this.setStateTodo.bind(this);
    this.setStateWhether = this.setStateWhether.bind(this);
  }

  setStateTodo(e) {
    this.setState({content: "todo_list"});
    e.target.parentElement.lastChild.classList.remove("active");
    e.target.classList.add("active");
  }

  setStateWhether(e) {
    this.setState({content: "whether"});
    e.target.parentElement.firstChild.classList.remove("active");
    e.target.classList.add("active");
  }

  render() {
    return (
      <div style={{display: "flex", maxWidth: "100vw"}}>
        <ButtonWrap>
          <Button className="active" onClick={(e) => this.setStateTodo(e)}>Todo List</Button>
          <Button onClick={(e) => this.setStateWhether(e)}>Weather</Button>
        </ButtonWrap>
        <ContentWindow>
          {this.state.content==="todo_list" ? <TodoList /> : <></>}
          {this.state.content==="whether" ? <Whether /> : <></>}
        </ContentWindow>
      </div>
    );
  }
}