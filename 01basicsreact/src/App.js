import React, { Component } from 'react'
import Counter from './components/counter';
import Counter1 from './components/counter1';
import HOC from './components/HOC';
import Props from './components/props';
import UseStatetut from './components/useStatetut';
import Memo from './components/Memo';
import Parent from './components/Parent';
import HookArray from './components/HookArray';
import HooksRevision from './components/HooksRevision';
import Functioncounterone from './components/functioncounterone';
import PostsList from './components/PostsList';
import MapFunction from './components/MapFunction';
import PostForm from './components/axiospostform';

import subjects from './components/HOC1';   // ✅ import HOC function
import Student from './components/Student';     // ✅ import component to wrap

const StudentWithSubject = subjects(Student);   // ✅ create wrapped component

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      count: 0
    }
  }

  increment (){
    this.setState({count: this.state.count + 1})
  }

  componentDidMount(){
    console.log("componentDidMount: when component renders first time")
  }

  componentWillUnmount (){
    console.log("component removed")
  } 

  render() {
    return (
      <div>
      
       
        <HOC />

        {/* HOC wrapped component */}
        <StudentWithSubject />

        <Counter1 number={this.state.count}></Counter1>

        <button onClick={() => {this.increment()}}>
          Click me
        </button>
         
        <Props name="Qasim" last="Rehmat">
  <p>Qasim is a good boy</p>
</Props>
      
       <UseStatetut/> 


       <Memo/>

       <Parent/>

       <HookArray/>
       <HooksRevision/>

       <Functioncounterone/>
       <PostsList/>
       <MapFunction/>

       <PostForm/>
    
      </div>
     
    )
  }
}