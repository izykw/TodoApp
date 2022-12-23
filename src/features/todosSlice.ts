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
			state.todos.push(
				{
					id: nanoid(),
					todo: action.payload.todo,
					createdDate: new Date(),
					isCompleted: false,
				});
		},
		removeTodo: (state, action: PayloadAction<{ id: string }>) => {
			return {
				todos: state.todos.filter(item => item.id !== action.payload.id),
				displayedTodos: state.displayedTodos,
			};
		},
		removeCompletedTodos: (state) => {
			return {
				todos: state.todos.filter(item => !item.isCompleted),
				displayedTodos: state.displayedTodos,
			}
		},
		setTodoStatus: (state, action: PayloadAction<{ id: string }>) => {
			const todo = state.todos.find((todo) => todo.id === action.payload.id);
			if (todo) {
				todo.isCompleted = !todo.isCompleted;
			}
		},
		setDisplayedTodos: (state, action: PayloadAction<DisplayedTodoStatus>) => {
			state.displayedTodos = action.payload;
		}
	},
});

export const {
	addTodo,
	removeTodo,
	removeCompletedTodos,
	setTodoStatus,
	setDisplayedTodos,
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

export const selectActiveTodosLength = (state: RootState) => (state.todo.todos.filter(todo => !todo.isCompleted).length);
export const selectCompletedTodosLength = (state: RootState) => (state.todo.todos.filter(todo => todo.isCompleted).length)
export const selectDisplayedTodosStatus = (state: RootState) => state.todo.displayedTodos;

export default todosSlice.reducer;