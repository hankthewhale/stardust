import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Header extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Our Company</Menu.Item>

        <Menu.Item
          active={activeItem === 'about'}
          onClick={() => this.handleItemClick('about')}
        >
          About us
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'jobs'}
          onClick={this.handleItemClick.bind('jobs')}
        >
          Jobs
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'locations'}
          onClick={this.handleItemClick.bind('locations')}
        >
          Locations
        </Menu.Item>
      </Menu>
    )
  }
}
