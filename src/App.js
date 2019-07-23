import React, { Component, Fragment } from 'react';
import './style.css';
// 动画组件
import { CSSTransition } from 'react-transition-group';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			show: true
		}
		this.handleToggole = this.handleToggole.bind(this);
	}

	handleToggole() {
		this.setState(() => ({
			show : this.state.show ? false : true
		}))
	}

	render() {
		return (
			<Fragment>
				<CSSTransition 
					// 用于感知动画状态
					in = { this.state.show }
					// 动画执行时间
					timeout={2000}
					// 与fade-enter等对应，如果是test-enter，则此处为test
					classNames="fade"
					// 隐藏后dom跟着删除
					unmountOnExit
					// 入场动画结束后执行的钩子
					onEnter={(el) => { el.style.color = 'blue'}}
					// 第一次加载的时候也要有动画效果，设置为true，则增加了fade-appear类名
					appear={true}
					// onExited={() => setShowButton(true)}
				>
					<div>Hello</div>
				</CSSTransition>
				{/* <div className = { this.state.show? 'show' : 'hide'}>Hello</div> */}
				<button onClick = { this.handleToggole }>toggle</button>
			</Fragment>
		)
	}
}

export default App;