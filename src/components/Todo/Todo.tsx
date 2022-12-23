import React from "react";
import styled from "styled-components";
import {reactSvgComponentToMarkupString} from "../../services/services";
import {Colors} from "../../services/enums";
import {BsCheckLg, BsTrash} from 'react-icons/bs'

const TodoWrapper = styled.div`
	display: flex;
	align-items: center;
	
  & > svg {
    margin-left: 5px;
	  margin-top: 15px;
  }

  & > svg:hover {
    fill: ${Colors.MAIN_COLOR};
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
		font-weight: 600;
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

  & > input:focus + .custom-checkbox::before {}

  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */

  & > input:focus:not(:checked) + .custom-checkbox::before {
    background-color: rgba(118, 116, 116, 0.2);
  }

  /* стили для чекбокса, находящегося в состоянии checked */

  & > input:checked + .custom-checkbox::before {
    background-image: url(${reactSvgComponentToMarkupString(BsCheckLg, {fill: Colors.MAIN_COLOR, width: ''})});
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

export default function Todo() {
	return (
		<TodoWrapper>
			<TodoLabel>
				<input type="checkbox"/>
				<span className="custom-checkbox"></span>
				<p className="a">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
				</p>
			</TodoLabel>
			<BsTrash size="24"/>
		</TodoWrapper>
	)
}