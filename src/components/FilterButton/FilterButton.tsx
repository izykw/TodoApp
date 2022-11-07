import React from 'react';
import { type Dispatch } from '@reduxjs/toolkit';
import { useAppSelector } from '../../store/hooks';
import {
	selectDisplayedTodosStatus, setDisplayedTodos
} from '../../features/todosSlice';
import { DisplayedTodoStatus } from '../../features/todoSlice.types';
import styles from './filterButton.module.css';

const { filter_button, filter_button__active } = styles;

export default function FilterButton({
	text,
	dispatch
}: { text: DisplayedTodoStatus, dispatch: Dispatch }) {
	const displayedTodos = useAppSelector(selectDisplayedTodosStatus);

	const active = text === displayedTodos ? filter_button__active : '';
	return (
		<button type="button"
						onClick={() => dispatch(setDisplayedTodos(text))}
						className={`${filter_button} ${active}`}>
			{text}
		</button>
	);
}