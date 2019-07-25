import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { 
	getInputChangeAction,
	getAddItemAction,
	getDeleteTodoItemAction,
	// initListAction,
	// getTodoList,
	getInitList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
// import axios from 'axios';

// 容器组件
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		// console.log(store.getStore());
		// console.log(this.state);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	componentDidMount() {
		// const action = getTodoList();
		// dispatch action的时候，action会自动执行
		// store.dispatch(action);
		// console.log(action);

		// axios.get('/list.json').then((res)=>{
		// 	const data = res.data;
		// 	const action = initListAction(data);
		// 	store.dispatch(action);
		// }).catch(()=>{
		// 	const data = ['dell','lee'];
		// 	const action = initListAction(data);
		// 	store.dispatch(action)
		// })

		const action = getInitList();
		store.dispatch(action);
	}

	handleInputChange(e) {
		// const action = {
		// 	type:CHANGE_INPUT_VALUE,
		// 	value:e.target.value
		// }
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleBtnClick() {
		// const action = {
		// 	type:ADD_TODO_ITEM,
		// }
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleItemDelete(index) {
		// const action = {
		// 	type:DELETE_TODO_ITEM,
		// 	index
		// }
		const action = getDeleteTodoItemAction(index);
		store.dispatch(action);
	}

	render() {
		const { inputValue, list } = this.state;
		return (
			<TodoListUI 
			  list = { list }
				inputValue = {inputValue }
				handleInputChange = { this.handleInputChange }
				handleBtnClick = { this.handleBtnClick }
				handleItemDelete = { this.handleItemDelete }
			/>
		)
	}
}

export default TodoList