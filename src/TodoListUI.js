import React from 'react';
import { Input, Button, List } from 'antd'; 

const TodoListUI = (props) => {
  const { 
    inputValue, 
    list, 
    handleInputChange,
    handleBtnClick,
    handleItemDelete
  } = props;
  return (
    <div style={{ marginTop: 10, marginLeft: 10 }}>
    <div>
      <Input 
        value = {inputValue} 
        placeholder = "Todo Info" 
        style = {{ width: 300, marginRight: 10 }}
        onChange = { handleInputChange }
      />
      <Button 
        type = "primary"
        onClick = { handleBtnClick }
      >提交</Button>
    </div>
    <div>
      <List
        style = {{ marginTop: 10, width: 300}}
        bordered
        dataSource={list}
        renderItem={(item,index) => 
          <List.Item onClick = {() => { handleItemDelete(index) }}>{item}</List.Item>
        }
      />
    </div>
  </div>
  )
}

// UI组件
// class TodoListUI extends Component {

//   render() {
//     const { 
//       inputValue, 
//       list, 
//       handleInputChange,
//       handleBtnClick,
//       handleItemDelete
//     } = this.props;
//     return (
//       <div style={{ marginTop: 10, marginLeft: 10 }}>
//       <div>
//         <Input 
//           value = {inputValue} 
//           placeholder = "Todo Info" 
//           style = {{ width: 300, marginRight: 10 }}
//           onChange = { handleInputChange }
//         />
//         <Button 
//           type = "primary"
//           onClick = { handleBtnClick }
//         >提交</Button>
//       </div>
//       <div>
//         <List
//           style = {{ marginTop: 10, width: 300}}
//           // size="small"
//           // header={<div>Header</div>}
//           // footer={<div>Footer</div>}
//           // 每一项是否加边框
//           bordered
//           dataSource={list}
//           renderItem={(item,index) => 
//             <List.Item onClick = {(index) => { handleItemDelete(index) }}>{item}</List.Item>
//           }
//         />
//       </div>
//     </div>
//     )
//   }
// }

export default TodoListUI;