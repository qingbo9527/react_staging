import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" />
          </label>
          <span>
            <span>已完成0</span> / 全部2
          </span>
          <button className="btn btn-danger">清除任务已完成</button>
        </div>
      </div>
    )
  }
}
