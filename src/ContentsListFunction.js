import React, {useState} from "react";
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
  ${props => props.isSelected &&
    `color: #e66;
    font-weight: 700;`
}
`
const ContentWindow = styled.div`
  width: 100%;
  padding: 2em 2em 0;
`

export default function ContentsListFunction(){
    const [content, setContent] = useState('todo_list')

    const handleButtonClick  = (e, content) =>{
        setContent(content);
    }

    return (
        <div style={{display: "flex", maxWidth: "100vw"}}>
            <ButtonWrap>
                <Button isSelected = {content === 'todo_list'} onClick={(e)=>handleButtonClick(e, 'todo_list')}>Todo List</Button>
                <Button isSelected = {content === 'weather'} onClick={(e)=>handleButtonClick(e, 'weather')}>Weather</Button>
            </ButtonWrap>
            <ContentWindow>
                {content==="todo_list" ? <TodoList /> : <></>}
                {content==="weather" ? <Whether /> : <></>}
            </ContentWindow>
        </div>
    );
}