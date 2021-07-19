import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  //对接收的props进行类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    //父组件向子组件传值，用props
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
