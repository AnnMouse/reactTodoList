import { 
	CHANGE_INPUT_VALUE, 
	ADD_TODO_ITEM, 
  DELETE_TODO_ITEM,
  INIT_LIST_ITEM,
  GET_INIT_LIST
} from './actionTypes';
// import axios from 'axios';

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

export const getInitList = () => ({
  type: GET_INIT_LIST
})