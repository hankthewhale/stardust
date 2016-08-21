import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class LinkItem extends Component {
  handleClick = (name) => this.setState({ message: 'onClick handled' })

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item href='http://www.google.com'>Visit Google</Menu.Item>
          <Menu.Item link>Link via prop</Menu.Item>
          <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
        </Menu>

        <p>{this.state.message}</p>
      </div>
    )
  }
}
