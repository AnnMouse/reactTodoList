import { 
	CHANGE_INPUT_VALUE, 
	ADD_TODO_ITEM, 
	DELETE_TODO_ITEM
} from './actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

// state为上一次的数据，action是用户传来的
// reducer可以接收state,但不能修改state
export default (state = defaultState,action) => {
	const newState = JSON.parse(JSON.stringify(state));
	if(action.type === CHANGE_INPUT_VALUE) {
		// 若此处改为 = new Date()，则不再是纯函数。
		newState.inputValue = action.value;
		return newState;
	}

	if(action.type === ADD_TODO_ITEM) {
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if(action.type === DELETE_TODO_ITEM){
		newState.list.splice(action.index,1);
		return newState;
	}

  return state;
}