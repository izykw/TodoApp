import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../features/todosSlice';
import styles from './header.module.css';

const { header, header__title, header__input } = styles;

export default function Header() {
	const [todo, setTodo] = useState('');
	const dispatch = useAppDispatch();

	const onKeyDown = (e: React.KeyboardEvent) => {
		if(e.key === 'Enter' && todo) {
			dispatch(addTodo({ todo }));
			setTodo('');
		}
	}

	return (
		<header className={header}>
			<h1 className={header__title}>todos</h1>
			<input type="text"
						 value={todo}
						 onChange={(e) => setTodo(e.target.value)}
						 onKeyDown={onKeyDown}
						 placeholder="What we need todo?"
						 className={header__input}/>
		</header>);
}