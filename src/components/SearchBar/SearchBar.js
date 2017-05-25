import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Paper, TextField } from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'
import CancelIcon from 'material-ui/svg-icons/navigation/cancel'
import { colors } from 'material-ui/styles'

const styles = {
  root: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconButton: {},
  input: {
    width: '100%'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: '100%'
  }
}
/**
 * Material design search bar
 * @see [Search patterns](https://material.io/guidelines/patterns/search.html)
 */
export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false,
      value: '',
      active: false
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

  handleInput = (e) => {
    this.setState({value: e.target.value})
    this.props.onChange(e.target.value)
  }

  handleCancel = () => {
    this.setState({active: false, value: ''})
    this.props.onChange('')
  }

  render () {
    const value = this.props.value || this.state.value

    const nonEmpty = value.length > 0

    return (
      <Paper
        style={{
          ...styles.root,
          ...this.props.style
        }}
      >
        <div style={styles.searchContainer}>
          <TextField
            hintText={this.props.hintText}
            onBlur={this.handleBlur}
            value={value}
            onChange={this.handleInput}
            onFocus={this.handleFocus}
            style={styles.input}
            underlineShow={false}
          />
        </div>
        <IconButton
          onTouchTap={this.props.onRequestSearch}
          iconStyle={{
            opacity: nonEmpty ? 0 : 1,
            transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
          }}
          style={{
            transform: nonEmpty ? 'scale(0, 0)' : 'scale(1, 1)',
            transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            marginRight: -48
          }}
        >
          {this.props.searchIcon}
        </IconButton>
        <IconButton
          onTouchTap={this.handleCancel}
          iconStyle={{
            opacity: nonEmpty ? 1 : 0,
            transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
          }}
          style={{
            transform: nonEmpty ? 'scale(1, 1)' : 'scale(0, 0)',
            transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
          }}
        >
          <CancelIcon color={colors.blue500} />
        </IconButton>
      </Paper>
    )
  }
}

SearchBar.defaultProps = {
  hintText: 'Search',
  searchIcon: <SearchIcon color={colors.blue500} />
}

SearchBar.propTypes = {
  hintText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onRequestSearch: PropTypes.func.isRequired,
  searchIcon: PropTypes.node,
  style: PropTypes.object,
  value: PropTypes.string
}
