import React from 'react'

class HooksRevision extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

   // componentDidMount() {
       // document.title = `clicked ${this.state.count} times`
  //  }

   // componentDidUpdate(prevProps, prevState) {
   // document.title = `clicked ${this.state.count} times`
   // }
   Subscribe (){
   this.setState
   ({ count: this.state.count + 1 })
   }

    render() {
        return (
            <div>
                <h3> count {this.state.count}</h3>
                <button onClick={() =>  {this.Subscribe()}}>
                    Click 
                </button>
            </div>
        )
    }
}

export default HooksRevision





