import React,{ Component } from 'react';
import store from './store';
import TodoListUI from './TodoListUI';
import {getTodoList,getInputChangeAction,getAddItemAction,getdeleteItemAction} from './store/actionCreators';

  

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
        <TodoListUI 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
            list={this.state.list}
        />
        )
    }
    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)

    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = getdeleteItemAction(index);
        store.dispatch(action)
    }
}
export default TodoList;