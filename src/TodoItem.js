import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
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