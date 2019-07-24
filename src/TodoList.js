import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { 
	getInputChangeAction,
	getAddItemAction,
	getDeleteTodoItemAction 
} from './store/actionCreators';

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		// console.log(store.getStore());
		// console.log(this.state);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		store.subscribe(this.handleStoreChange);
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
			<div style={{ marginTop: 10, marginLeft: 10 }}>
				<div>
					<Input 
						value = {inputValue} 
						placeholder = "Todo Info" 
						style = {{ width: 300, marginRight: 10 }}
						onChange = {this.handleInputChange}
					/>
					<Button 
						type = "primary"
						onClick = {this.handleBtnClick}
					>提交</Button>
				</div>
				<div>
					<List
					  style = {{ marginTop: 10, width: 300}}
						// size="small"
						// header={<div>Header</div>}
						// footer={<div>Footer</div>}
						// 每一项是否加边框
						bordered
						dataSource={list}
						renderItem={(item,index) => 
							<List.Item onClick = { this.handleItemDelete.bind(this, index)}>{item}</List.Item>
						}
					/>
				</div>
			</div>			
		)
	}
}

export default TodoList