import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Header from '../header/Header'

export default class WithRouter extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    const { match, location, history } = this.props
    return (
     <Header {...propTypes}/>
    )
  }
}
