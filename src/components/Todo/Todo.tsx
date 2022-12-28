import React from "react";
import styled from "styled-components";
import {useAppDispatch} from "../../store/hooks";
import {changeTodoStatus, removeTodo} from "../../features/todosSlice";

import {reactSvgComponentToMarkupString} from "./todo.services";
import {BsCheckLg, BsTrash} from 'react-icons/bs'
import {ITodo} from "../../features/todoSlice.types";
import {getSvg} from "./todo.services";


const TodoWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 5px;
    margin-top: 15px;
  }

  & > svg:hover {
    fill: #ca79aa;
  }
`

const TodoLabel = styled.label`
  display: flex;
  width: 100%;
  margin-top: 15px;

  /* для элемента input c type="checkbox" */

  & > input {
    position: absolute;
    z-index: -9;
    opacity: 0;
  }

  & > p {
    width: 100%;
    line-height: 1.4;
    font-weight: 500;
  }

  /* для элемента label, связанного с .custom-checkbox */

  & > .custom-checkbox {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  /* создание в label псевдоэлемента before со следующими стилями */

  & > .custom-checkbox::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex: 0 0 1;
    border: 2px solid rgba(118, 116, 116, 0.35);
    border-radius: 7px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 75% 75%;
  }

  /* стили при наведении курсора на checkbox */

  & > input:not(:disabled):not(:checked) + .custom-checkbox:hover::before {
    border-color: rgba(118, 116, 116, 0.5);
    background-color: rgba(118, 116, 116, 0.1);
  }

  /* стили для активного чекбокса (при нажатии на него) */

  & > input:not(:disabled):not(:disabled):active + .custom-checkbox::before {
    border-color: #ca79aa;
  }

  /* стили для чекбокса, находящегося в фокусе */

  & > input:focus + .custom-checkbox::before {
  }

  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */

  & > input:focus:not(:checked) + .custom-checkbox::before {
    background-color: rgba(118, 116, 116, 0.2);
  }

  /* стили для чекбокса, находящегося в состоянии checked */

  & > input:checked + .custom-checkbox::before {
    background-image: url(${reactSvgComponentToMarkupString(BsCheckLg, {fill: '#ca79aa', width: ''})});
  }

  & > input:checked + .custom-checkbox:hover::before {
    border-color: rgba(118, 116, 116, 0.5);
    background-color: rgba(118, 116, 116, 0.1);
  }

  /* стили для чекбокса, находящегося в состоянии disabled */

  & > input:disabled + .custom-checkbox::before {
    background-color: rgba(0, 0, 0, 0.25);
  }

  & > input:checked + .custom-checkbox + p {
    opacity: 50%;
    text-decoration: line-through;
  }
`

const TodoCreatedDate = styled.span`
	color: #ca79aa;
`

export default function Todo({id, todo, createdDate, isCompleted}: ITodo): JSX.Element {
	const dispatch = useAppDispatch();

	const changeTodoStatusInStore = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeTodoStatus({id: e.target.id}));
	}

	const removeTodoFromStore = (e: React.MouseEvent) => {
		const target = getSvg(e.target as HTMLElement);
		if(target) {
			dispatch(removeTodo({id: target.id}))
		}
	}

	return (
		<TodoWrapper>
			<TodoLabel>
				<input id={id} onChange={changeTodoStatusInStore} defaultChecked={isCompleted} type="checkbox"/>
				<span className="custom-checkbox"></span>
				<p>
					{todo}
					<br/>
					<TodoCreatedDate>
						{`Created: ${createdDate}.`}
					</TodoCreatedDate>
				</p>
			</TodoLabel>
			<BsTrash onClick={removeTodoFromStore} size="24" id={id}/>
		</TodoWrapper>
	)
}