import React from 'react';
import { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from "mobx-react";

import { TodoStore } from "../todo.store";

interface TodoAddProps {
    todoStore?: TodoStore
}

@inject('todoStore')
@observer
export class TodoAdd extends Component<TodoAddProps> {
    @observable private task: string = ''
    handleTaskChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
        this.task = value
    }
    handleAddTodo = () => {
        this.props
            .todoStore.addTodo(this.task)
        this.task = ''
    }
    render() {
        return (
            <>
                <label htmlFor="">New Task</label>
                <input type="text" value={this.task} onChange={this.handleTaskChange} />
                <button onClick={this.handleAddTodo}>Add</button>
            </>
        )
    }
}