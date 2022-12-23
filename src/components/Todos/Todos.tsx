import React from "react";
import styled from "styled-components";
import Todo from "../Todo/Todo";

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

export default function Todos() {
	return (
		<TodosComponent>
			<Todo/>
			<Todo/>
		</TodosComponent>
	)
}