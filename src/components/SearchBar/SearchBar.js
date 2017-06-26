import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AutoComplete, IconButton, Paper } from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import { grey500 } from 'material-ui/styles/colors'

const getStyles = (props, state) => {
  const {disabled} = props
  const {value} = state
  const nonEmpty = value ? 0 : value.length

  return {
    root: {
      height: 48,
      display: 'flex',
      justifyContent: 'space-between'
    },
    iconButtonClose: {
      style: {
        opacity: !disabled ? 0.54 : 0.38,
        transform: nonEmpty ? 'scale(1, 1)' : 'scale(0, 0)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
      iconStyle: {
        opacity: nonEmpty ? 1 : 0,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
    },
    iconButtonSearch: {
      style: {
        opacity: !disabled ? 0.54 : 0.38,
        transform: nonEmpty ? 'scale(0, 0)' : 'scale(1, 1)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
        marginRight: -48,
      },
      iconStyle: {
        opacity: nonEmpty ? 0 : 1,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
    },
    input: {
      width: '100%',
    },
    searchContainer: {
      margin: 'auto 16px',
      width: '100%'
    }
  }
}

/**
 * Material design search bar
 * @see [Search patterns](https://material.io/guidelines/patterns/search.html)
 */
export default class SearchBar extends Component {
  static defaultProps = {
    closeIcon: <CloseIcon color={grey500} />,
    dataSource: [],
    dataSourceConfig: {text: 'text', value: 'value'},
    hintText: 'Search',
    searchIcon: <SearchIcon color={grey500} />,
    disabled: false,
    value: '',
    style: null
  }

  static propTypes = {
    /** Override the close icon. */
    closeIcon: PropTypes.node,
    /** Array of strings or nodes used to populate the list. */
    dataSource: PropTypes.array,
    /** Config for objects list dataSource. */
    dataSourceConfig: PropTypes.object,
    /** Sets hintText for the embedded text field. */
    hintText: PropTypes.string,
    /** Fired when the text value changes. */
    onChange: PropTypes.func.isRequired,
    /** Fired when the search icon is clicked. */
    onRequestSearch: PropTypes.func.isRequired,
    /** Override the search icon. */
    searchIcon: PropTypes.node,
    /** Override the inline-styles of the root element. */
    style: PropTypes.object,
    /** The value of the text field. */
    value: PropTypes.string,
    /** Disables text field. */
    disabled: PropTypes.bool
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  state = {
    focus: false,
    value: this.props.value,
    active: false
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({...this.state, value: nextProps.value})
    }
  }

  handleFocus = () => {
    this.setState({focus: true})
  }

  handleBlur = () => {
    this.setState({focus: false})
    if (this.state.value.trim().length === 0) {
      this.setState({value: ''})
    }
  }

  handleInput = e => {
    this.setState({value: e})
    this.props.onChange(e)
  }

  handleCancel = () => {
    this.setState({active: false, value: ''})
    this.props.onChange('')
  }

  render () {
    const styles = getStyles(this.props, this.state)
    const {value} = this.state

    return (
      <Paper
        style={{
          ...styles.root,
          ...this.props.style,
        }}
      >
        <div style={styles.searchContainer}>
          <AutoComplete
            hintText={this.props.hintText}
            onBlur={this.handleBlur}
            searchText={value}
            onUpdateInput={this.handleInput}
            onFocus={this.handleFocus}
            fullWidth
            style={styles.input}
            underlineShow={false}
            dataSource={this.props.dataSource}
            dataSourceConfig={this.props.dataSourceConfig}
            disabled={this.props.disabled}
          />
        </div>
        <IconButton
          onTouchTap={this.props.onRequestSearch}
          iconStyle={styles.iconButtonSearch.iconStyle}
          style={styles.iconButtonSearch.style}
          disabled={this.props.disabled}
        >
          {this.props.searchIcon}
        </IconButton>
        <IconButton
          onTouchTap={this.handleCancel}
          iconStyle={styles.iconButtonClose.iconStyle}
          style={styles.iconButtonClose.style}
          disabled={this.props.disabled}
        >
          {this.props.closeIcon}
        </IconButton>
      </Paper>
    )
  }
}
