import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 绑定键盘事件
  handleKeyUp = (event) => {
    //解构赋值
    const { key, target } = event
    //判断是否是回车键，13是回车键的编号
    if (key !== 13) return
    // 准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
  }

  render() {
    return (
      <div>
        <div className="todo-header">
          <input
            onKeyUp={this.handleKeyUp}
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    )
  }
}
