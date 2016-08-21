import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Vertical extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>

          <Menu>
            <Menu.Item
              active={activeItem === 'enterprise'}
              onClick={() => this.handleItemClick('enterprise')}
            >
              Enterprise
            </Menu.Item>

            <Menu.Item
              active={activeItem === 'consumer'}
              onClick={() => this.handleItemClick('consumer')}
            >
              Consumer
            </Menu.Item>
          </Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu>
            <Menu.Item
              active={activeItem === 'rails'}
              onClick={() => this.handleItemClick('rails')}
            >
              Rails
            </Menu.Item>

            <Menu.Item
              active={activeItem === 'python'}
              onClick={() => this.handleItemClick('python')}
            >
              Python
            </Menu.Item>

            <Menu.Item
              active={activeItem === 'php'}
              onClick={() => this.handleItemClick('php')}
            >
              PHP
            </Menu.Item>
          </Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu>
            <Menu.Item
              active={activeItem === 'shared'}
              onClick={() => this.handleItemClick('shared')}
            >
              Shared
            </Menu.Item>

            <Menu.Item
              active={activeItem === 'dedicated'}
              onClick={() => this.handleItemClick('dedicated')}
            >
              Dedicated
            </Menu.Item>
          </Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu>
            <Menu.Item
              active={activeItem === 'email'}
              onClick={() => this.handleItemClick('email')}
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              active={activeItem === 'faq'}
              onClick={() => this.handleItemClick('faq')}
            >
              FAQs
            </Menu.Item>
          </Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
