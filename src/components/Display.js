import React from 'react';
import { TodosDiv, TodosPara, SubmitBtn } from './Style';

const Display = (props) => {
  // const removeTodo = (idx) => {
  //   let updatedList = [...props.todos];
  //   updatedList.splice(idx, 1);
  // };
  return (
    <>
      <TodosDiv>
        {props.todos.map((todo, idx) => {
          return (
            <>
              <TodosPara key={idx}>{todo}</TodosPara>
              <SubmitBtn
                type='button'
                // onClick={() => removeTodo(idx)}
                value='Delete'
              />
            </>
          );
        })}
      </TodosDiv>
    </>
  );
};

export default Display;
