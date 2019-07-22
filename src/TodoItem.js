import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	// 当组件从父组件接收参数
	// 如果此组件第一次存在与父组件中，不会被执行
	// 如果此组件之前已经存在与父组件中，才会被执行
	componentWillReceiveProps() {
		console.log('child componentWillReceiveProps');
	}

	// 当此组件即将被从页面剔除的时候执行
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}


	handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}

	render() {
		const { content } = this.props;
		//JSX -> createElement -> 虚拟DOM（JS对象）-> 真实的DOM
		// return <div>item</div>
		// return React.createElement('div',{},'item');
		return <div onClick = { this.handleClick }>
			{content}
		</div>
	}
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
	content: '123'
}

export default TodoItem;