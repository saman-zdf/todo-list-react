import React from 'react';
import { TextInput, Wrapper, SubmitBtn } from './Style';

const Form = (props) => {
  const { handleInput, onInputChange, input } = props;
  return (
    <>
      <Wrapper>
        <form onSubmit={handleInput}>
          <TextInput
            placeholder='Write ToDo...'
            onChange={onInputChange}
            value={input}
          />
          <SubmitBtn type='submit' value='Create' />
        </form>
      </Wrapper>
    </>
  );
};

export default Form;
