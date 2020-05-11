import React,{Component} from 'react'

import './Nav.css'
class Search extends React.Component{
      
    constructor(props){
        super(props);
        this.state={
            value :''
        }
    }
    
    
     handle=(event)=>{
        console.log(event.target.value)
         this.setState({
             value:event.target.value
         })
         console.log(event.target.value)
     }
    
      
     render(){
       

    return (
       <div className=" Nav-align "style={{"margin-top":"200px"}}>
         <input value={this.state.value} onChange={this.handle} type="text"  />
            <button className="btn" onClick ={()=>{alert(this.state.value)}} >
                search 
            </button >
       </div>

    )
}
}

export default Search
