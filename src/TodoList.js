import React, {Component, Fragment} from 'react'
import './style.css'
class TodoList extends Component {
    constructor(props) {
        //继承
        super(props);
        //组件状态
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    {/* 注释 */}
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                    id="insertArea"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                            <li key={index} 
                            onClick={this.handleItemDelete.bind(this, index)}
                            dangerouslySetInnerHTML={{__html: item}}
                            >
                            
                            </li>
                        )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;