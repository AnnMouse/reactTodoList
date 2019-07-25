import { 
	CHANGE_INPUT_VALUE, 
	ADD_TODO_ITEM, 
  DELETE_TODO_ITEM,
  INIT_LIST_ITEM
} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = (value) => ({
  type:ADD_TODO_ITEM
})

export const getDeleteTodoItemAction = (index) => ({
  type:DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type:INIT_LIST_ITEM,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res)=>{
			const data = res.data;
			const action = initListAction(data);
			dispatch(action);
		}).catch(()=>{
			const data = ['dell','lee'];
			const action = initListAction(data);
			dispatch(action)
		})
  }
}