import React from 'react';
import Nav from "../Nav/Nav";
import Todos from "../Todos/Todos";
import styled from "styled-components";
import Input from "../Input/Input";

const AppComponent = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: #333;
`

const Container = styled.div `
	position: relative;
	
	width: 600px;
	height: 800px;
	background-color: #fff;
	border-radius: 20px;
	
	@media (max-width: 992px) {
    width: 450px;
    height: 650px;
    border-radius: 13px;
	}

  @media (max-width: 600px) {
    width: 350px;
    height: 500px;
  }
`

function App(): JSX.Element {
	return (
		<AppComponent>
			<Container>
				<Input/>
				<Todos/>
				<Nav/>
			</Container>
		</AppComponent>
	);
}

export default App;
