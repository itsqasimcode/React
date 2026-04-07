import React, { Component } from 'react'
import axios from 'axios';

 class MapFunction extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
        posts: [],
        error: ''
      }
    }

    componentDidMount (){
        axios.get ("https://jsonplaceholder.typicode.com/posts985843")

        .then (Response =>{
          this.setState({posts: Response.data});
            console.log (Response);

        })
        .catch (error => {
          this.setState({error:'URL error'});

            console.log (error);
        });
        
        
    }


  render() {
    const {posts, error} = this.state
    return (
      <div>Lists Posts data using map function
      
      {
        posts.length ?
        posts.map(post => <div key={post.id}>{post.title}</div>):null
      }
      {
        error ? <div>{error}</div>: null
      }


      </div>
    )
  }
}

export default MapFunction