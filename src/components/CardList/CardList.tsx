import React from 'react';
import {useAppSelector} from '../../store/hooks';
import Card from '../Card/Card';
import { selectTodos } from '../../features/todosSlice';

export default function CardList() {
	const todos = useAppSelector(selectTodos)

	return (
		<main>
			<ul>
				{
					todos.map(({todo, id, isCompleted}) => {
						return <Card key={id} id={id} todo={todo} isCompleted={isCompleted}/>
					})
				}
			</ul>
		</main>
	);
}