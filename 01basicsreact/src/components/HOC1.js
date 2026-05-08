import { Component } from "react"



const HOC1 = (HOC2) => {
  
   
    
     class Subject extends Component {
      render() {
        return (

          <HOC2 Subjectupdation= "Java"></HOC2>
        )
      }
    }
    return Subject;
    
}

export default HOC1