import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }
  //鼠标移入、移除的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  //勾选、取消勾选某一个todo的回调

  render() {
    const { name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ background: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
