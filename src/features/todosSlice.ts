import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { nanoid } from 'nanoid';
import { IInitialState, DisplayedTodoStatus } from './todoSlice.types';

const initialState: IInitialState = {
	todos: [],
	displayedTodos: 'all',
};

const todosSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<{ todo: string }>) => {
			const dateNow = new Date().toString();
			const dateWithoutTimezone = dateNow.slice(0, dateNow.lastIndexOf('GMT'));
			state.todos.push(
				{
					id: nanoid(),
					todo: action.payload.todo,
					createdDate: dateWithoutTimezone,
					isCompleted: false,
				});
		},
		removeTodo: (state, action: PayloadAction<{ id: string }>) => {
			return {
				todos: state.todos.filter(item => item.id !== action.payload.id),
				displayedTodos: state.displayedTodos,
			};
		},
		changeTodoStatus: (state, action: PayloadAction<{ id: string }>) => {
			const todo = state.todos.find((todo) => todo.id === action.payload.id);
			if (todo) {
				todo.isCompleted = !todo.isCompleted;
			}
		},
		changeDisplayedTodos: (state, action: PayloadAction<DisplayedTodoStatus>) => {
			state.displayedTodos = action.payload;
		}
	},
});

export const {
	addTodo,
	removeTodo,
	changeTodoStatus,
	changeDisplayedTodos,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => {
	switch (state.todo.displayedTodos) {
		case 'all': {
			return state.todo.todos;
		}
		case 'active': {
			return state.todo.todos.filter(todo => !todo.isCompleted);
		}
		case 'completed': {
			return state.todo.todos.filter(todo => todo.isCompleted);
		}
	}
};

export const selectDisplayedTodosStatus = (state: RootState) => state.todo.displayedTodos;

export default todosSlice.reducer;