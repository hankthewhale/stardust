import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
} from '../../lib'

function MenuMenu(props) {
  const { children, className, position } = props
  const classes = cx(
    className,
    position,
    'menu'
  )
  const rest = getUnhandledProps(MenuMenu, props)

  return <a {...rest} className={classes}>{children}</a>
}

MenuMenu._meta = {
  name: 'MenuMenu',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    position: ['right'],
  },
}

MenuMenu.propTypes = {
  /** Primary content of the MenuMenu. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuMenu className. */
  className: PropTypes.string,

  /** A sub menu can take right position. */
  position: PropTypes.oneOf(MenuMenu._meta.props.position),
}

export default MenuMenu
