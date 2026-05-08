import React, { Component } from 'react'

export default class HOC extends Component {

state = {
    marks: 0
}

marksincremented =() =>{
    this.setState 
        ({ marks: this.state.marks + 1})
    }

  render() {
    return (
      <div>
        <h2  onMouseOver={this.marksincremented}> vikas marks{this.state.marks} </h2>
      </div>
    )
  }
}
