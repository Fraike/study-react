import React,{ Component } from 'react';
import 'antd/dist/antd.css'; 
import { Input,Button,List   } from 'antd';



class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input 
                    value={this.props.inputValue} 
                    placeholder="请输入" 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={this.props.handleInputChange}
                    ></Input>
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                    style={{marginTop: '10px',width: '300px'}}
                />
            </div>
        )
    }
}

export default TodoListUI;