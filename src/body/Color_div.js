import React,{Component} from 'react'
import './style.css'
import '../nav/Nav.css'
function Color(){
 
    return (

        <div style={{"height":"400px","width":"100%","background-color":"grey"}}>
        <div className="container">
        <div className="row half-back" >
        <div className="col-md-6 ">
         </div>
         <div className="col-md-6 half-text">
         <h1>Learner outcomes on Coursera</h1>
         <p  style={{"font-size":"20px"}}>
<b>87% of people learning </b>for professional development report career benefits like getting a promotion, a raise, or starting a new career
           </p>
          <div className="row mt-5">
          <div className="col-md-6">
          <button className="btn btn-search "> Join for Free
              </button>
          </div>
          <div className="col-md-6">
          <button className="btn btn-search btn-check "> Try COURSERA for Business
          </button>
          </div>
          </div>
         </div>
        </div>
        </div>
        </div>
    )

}

export default Color 