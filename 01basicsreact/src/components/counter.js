import React, { Component } from 'react'

class counter extends Component {

    componentDidUpdate (prevprops, prevstate)
    {
        if (prevprops.number !== this.props.number)
            console.log ("component updated")
    }

  render() {

    return (
      <h1> {this.props.number} </h1>
    )
  }
}

export default counter;
