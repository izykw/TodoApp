import React from 'react';
import {ITodo} from '../../features/todoSlice.types';
import { removeTodo, setTodoStatus } from '../../features/todosSlice';
import { useAppDispatch } from '../../store/hooks';
import styles from './card.module.css';

const {
	card,
	card__text,
	card__text_completed,
	card__checkbox,
	card__button
} = styles;

export default function Card({ todo, id, isCompleted }: ITodo) {
	const dispatch = useAppDispatch();

	const changeStatus = (e: React.ChangeEvent) => {
		const target = e.target as HTMLElement;
		dispatch(setTodoStatus({ id: target.id }));
	};

	const removeCard = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		dispatch(removeTodo({ id: target.id }));
	};

	return (
		<li className={card}>
			<label className={`${card__checkbox}`}>
				<input type="checkbox"
							 id={id}
							 defaultValue={`${isCompleted}`}
							 onChange={changeStatus}
				/>
				<span className={`${card__text} ${isCompleted && card__text_completed}`}>
					{todo}
				</span>
			</label>
			<button className={card__button} id={id} onClick={removeCard}>X</button>
		</li>
	);
}