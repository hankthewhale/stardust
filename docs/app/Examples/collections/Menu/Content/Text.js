import React, { Component } from 'react'
import { Header, Menu } from 'stardust'

export default class Text extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item
          active={activeItem === 'promotions'}
          onClick={() => this.handleItemClick('promotions')}
        >
          <Header.H4>Promotions</Header.H4>
          <p>Check out our new promotions</p>
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'coupons'}
          onClick={() => this.handleItemClick('coupons')}
        >
          <Header.H4>Coupons</Header.H4>
          <p>Check out our collection of coupons</p>
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'rebates'}
          onClick={() => this.handleItemClick('rebates')}
        >
          <Header.H4>Rebates</Header.H4>
          <p>Visit our rebate forum for information on claiming rebates</p>
        </Menu.Item>
      </Menu>
    )
  }
}
