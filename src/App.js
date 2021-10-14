import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    let updatedList = [...todoList];
    updatedList.push(e.target[0].value);
    setTodoList(updatedList);
    console.log(updatedList);
    setInput('');
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Form
        handleInput={handleInput}
        onInputChange={onInputChange}
        input={input}
      />
      <Display todos={todoList} />
    </>
  );
};

export default App;
