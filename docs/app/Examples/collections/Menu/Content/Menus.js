import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Menus extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          active={activeItem === 'browse'}
          onClick={() => this.handleItemClick('browse')}
        >
          Browse
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'submit'}
          onClick={() => this.handleItemClick('submit')}
        >
          Submit
        </Menu.Item>

       <Menu.Menu position='right'>
         <Menu.Item
           active={activeItem === 'signup'}
           onClick={() => this.handleItemClick('signup')}
         >
           Sign Up
         </Menu.Item>

         <Menu.Item
           active={activeItem === 'help'}
           onClick={() => this.handleItemClick('help')}
         >
           Help
         </Menu.Item>
       </Menu.Menu>
      </Menu>
    )
  }
}
