import { observable, reaction, computed, action } from "mobx";

interface Todo {
    task: string
    isComplete: boolean
}

class TodoStore {
    @observable todoList: Todo[] = []

    constructor() {
        reaction(
            () => this.todoList.filter(todo => !todo.isComplete),
            incompletedTasks => {
                if (incompletedTasks.length > 5) {
                    alert('lots in your plate')
                }
            }
        )
    }

    @computed
    get completedTasks() {
        return this.todoList.filter(todo => todo.isComplete).length
    }

    @action
    addTodo(task: string) {
        this.todoList.push({ task, isComplete: false })
    }

    @action
    completeTodo(completeTodo: Todo) {
        this.todoList.find(todo => todo === completeTodo).isComplete = true
    }
}

export const todoStore = new TodoStore()