import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const { 
    inputValue,
    changeInputValue,
    handleClick,
    list,
    handleLiClick
  } = props;
  return (
    <div>
      <div>
        <input 
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => (
            <li 
              key = {index}
              onClick={() => handleLiClick(index)}
            >{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

// class TodoList extends Component {

//   render() {
//     const { 
//       inputValue,
//       changeInputValue,
//       handleClick,
//       list,
//       handleLiClick
//     } = this.props;
//     return (
//       <div>
//         <div>
//           <input 
//             value={inputValue}
//             onChange={changeInputValue}
//           />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => (
//               <li 
//                 key = {index}
//                 onClick={() => handleLiClick(index)}
//               >{item}</li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type:'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      const action = {
        type:'add_list_value',
      }
      dispatch(action);
    },
    handleLiClick(index){
      const action = {
        type:'delete_list_value',
        index
      }
      console.log(index);
      dispatch(action);
    }
  }
}

// connect 让组件与store做链接,链接规则(即映射关系)在mapStateToProps存着
// mapDispatchToProps 表示将store.dispatch 挂载到props
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

// TodoList只是一个ui组件.无任何逻辑时,可以改为无状态组件,提高性能.
// connect将ui组件与业务逻辑相结合,返回的结果是容器组件