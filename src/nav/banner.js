import React,{Component} from 'react'

import './Nav.css'
import {Link} from 'react-router-dom'
function Banner(){


    return (
        // bannerbody
 
    
        <div className="table banner">
       <div className="row ">
         <div  className="col  bannerhead   ">
         Your Course to Success
        </div>
        </div>
        <div className="row mt-2">
        <div className="col bannerbody ">
        Build skills with courses, certificates, and degrees online from world-class universities and companies
        </div>
        </div>
        <div className="row"  >
        <div className="col-md-3">
      <  Link to= "/explore"><button className="btn btn-search" >COURSES</button>
      </Link> </div>
       </div></div>
     
   

    )

}

export default Banner