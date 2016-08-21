import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Width extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          active={activeItem === 'editorials'}
          onClick={() => this.handleItemClick('editorials')}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick.bind('reviews')}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'events'}
          onClick={this.handleItemClick.bind('events')}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
  }
}
