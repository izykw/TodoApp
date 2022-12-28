import React from "react";
import styled from "styled-components";
import Todo from "../Todo/Todo";
import {useAppSelector} from "../../store/hooks";
import {selectTodos} from "../../features/todosSlice";

const TodosComponent = styled.div`
  padding: 0 50px;

  max-height: 570px;
	overflow: auto;
	
	@media (max-width: 992px) {
		max-height: 450px;
		padding: 0 35px;
	}

  @media (max-width: 600px) {
    max-height: 330px;
    padding: 0 25px;
  }
`

export default function Todos(): JSX.Element {
	const todos = useAppSelector(selectTodos);

	const mapTodos = (): Array<JSX.Element> => {
		return todos.map((todo) => {
			return <Todo key={todo.id} {...todo}/>
		})
	}

	return (
		<TodosComponent>
			{
				mapTodos()
			}
		</TodosComponent>
	)
}