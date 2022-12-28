import React, {useState} from "react";
import {addTodo} from "../../features/todosSlice";
import styled from "styled-components";
import {useAppDispatch} from "../../store/hooks";

const InputWrapper = styled.div`
  padding: 0 50px;
  margin-bottom: 40px;
  margin-top: 15px;

  @media (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 25px;
  }
`

const InputComponent = styled.input.attrs<React.HTMLInputTypeAttribute>({placeholder: 'Write your todos here'})`
  width: 100%;

  border: 0;
  border-bottom: 1px solid #6b6666;

  font-family: inherit;
  font-size: inherit;
	font-weight: 600;
  line-height: inherit;
  text-align: center;

  margin: 0;
  padding: 15px;

  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &:focus {
    outline: 0;
    border-bottom-color: #ca79aa;
    box-shadow: 0 3px 6px 4px rgba(202, 121, 170, 0.2);
  }
`

export default function Input(): JSX.Element {
	const [userInput, setUserInput] = useState('');
	const dispatch = useAppDispatch();

	const addTodoToStore = (e: React.KeyboardEvent): void => {
		if(e.key !== 'Enter' || userInput.trim() === '') return;

		dispatch(addTodo({todo: userInput}));
		setUserInput('');
	}

	return (
		<InputWrapper>
			<InputComponent onKeyDown={addTodoToStore} value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
		</InputWrapper>
	)
}