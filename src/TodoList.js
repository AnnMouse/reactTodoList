import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleLiClick = this.handleLiClick.bind(this);
	}

	handleInputChange(e) {
		// console.log(this.state.inputValue);
		// this.setState({
		// 	inputValue: e.target.value
		// })
		// const value = e.target.value;
		// 通过真实的DOM获取元素
		const value = this.input.value;
		this.setState(() => ({
				inputValue:value
			})		
		)
	}

	handleBtnClick() {
		this.setState((preState) => ({
			list: [...preState.list, preState.inputValue],
			inputValue:''
		}),()=>{
			console.log(this.ul.querySelectorAll('div').length);
		})
		// 因setState为异步函数，因此操作dom查到的都是改变之前的div长度
		// console.log(this.ul.querySelectorAll('div').length);
	}

	handleLiClick (index) {
		this.setState((preState) => {
			const list = [...preState.list];
			list.splice(index,1); 
			return {list}
		})
	}

	getTodoItem() {
		return this.state.list.map((item,index) => {
			return (
				// <li 
				// 	key = {index} 
				// 	onClick = { this.handleLiClick.bind(this,index) }
				// 	dangerouslySetInnerHTML={{__html:item}}> 
				// 	{/*对内容不转译，直接显示信息*/}
				// </li>
				<TodoItem 
				  key={index}
					content = {item} 
					index={index}
					deleteItem = {this.handleLiClick} />
			)
		})
	}

	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input
					  id="insertArea" 
					  value = { this.state.inputValue }
					  onChange = { this.handleInputChange }
					  ref = {(input) => {this.input = input}}
					/>
					<button 
						onClick = {this.handleBtnClick }>提交</button>
				</div>
				<ul ref={(ul) => this.ul = ul}>
					{
						this.getTodoItem()
					}
				</ul>
				<div><Test content = { this.state.inputValue }/></div>
			</Fragment>
		)
	}
}

export default TodoList;