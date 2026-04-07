import React, { Component } from 'react'
import axios from 'axios';

 class PostsList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {

        posts :[]
         
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        
        .then(response => {
            console.log (response);

        })
        .catch(error => {
            console.log (error);

        });
        
    }
  render() {
    return (
      <div>Lists Posts Data</div>
    )
  }
}

export default PostsList