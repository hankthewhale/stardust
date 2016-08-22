import { PropTypes } from 'react'
import { META } from '../../lib'

// This is an abstract component
// it is only used by the user to configure a Table
const TableColumn = () => null

TableColumn.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /**
   * A function that returns the cell contents.
   * Receives the row data as its only argument.
   */
  cellRenderer: PropTypes.func,

  /** Additional classes */
  className: PropTypes.string,

  /** The table data key that this column should render */
  dataKey: PropTypes.string,

  /**
   * A function that returns the header contents.
   * Receives the row data as its only argument.
   */
  headerRenderer: PropTypes.func,
}

TableColumn._meta = {
  name: 'TableColumn',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

export default TableColumn
