import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import FilterButton from '../FilterButton/FilterButton';
import {
	selectActiveTodosLength, selectCompletedTodosLength, removeCompletedTodos
} from '../../features/todosSlice';
import styles from './footer.module.css';

const { footer, footer__span, footer__button_clear_completed } = styles;

export default function Footer() {
	const todosLength = useAppSelector(selectActiveTodosLength);
	const completedTodosLength = useAppSelector(selectCompletedTodosLength);

	const dispatch = useAppDispatch();

	return (
		<footer className={footer}>
			<span className={footer__span}>{todosLength} items left</span>
			<div>
				<FilterButton text="all" dispatch={dispatch}/>
				<FilterButton text="active" dispatch={dispatch}/>
				<FilterButton text="completed" dispatch={dispatch}/>
				{
					completedTodosLength !== 0 &&
					<button className={footer__button_clear_completed}
									onClick={() => dispatch(removeCompletedTodos())}>
						clear completed
					</button>
				}
			</div>
		</footer>
	);
}