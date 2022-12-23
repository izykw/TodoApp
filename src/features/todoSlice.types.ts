export interface ITodo {
	id: string,
	todo: string,
	createdDate: string,
	isCompleted: boolean,
}

export interface IInitialState {
	todos: Array<ITodo>,
	displayedTodos: 'all' | 'active' | 'completed',
}

export type DisplayedTodoStatus = 'all' | 'active' | 'completed';