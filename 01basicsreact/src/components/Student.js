import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
        <h2>Subject: {this.props.hocSub}</h2>
      </div>
    )
  }
}