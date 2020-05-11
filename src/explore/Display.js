import React, { Component } from "react";
import Slider from "react-slick";
import  './explore.css'
import { Card,Button } from 'react-bootstrap';

export default class Display extends Component {
    render(){
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
     

    return (
   
      < div  className="container hand   " style={{"text-align":"center"}}>
        <h1 style ={{"padding-top":"8rem","margin-bottom":"4rem","font-family":"'Advent Pro', sans-serif"} } >Explore Topics And Skills  </h1>
        <Slider {...settings}>
         
          
         
            <div>
             <div  className ="row">
             < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> computer_science  </h2>
            </div>
            < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> personal_development  </h2>
            </div>
            
            </div>
            </div>
            <div>
             <div className ="row">
             < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> physical_science and engineering </h2>
            </div>
            < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> Learning Language  </h2>
            </div>
            
            </div>
            </div>
            <div>
             <div className ="row">
             < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> Information Technology </h2>
            </div>
            < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/health.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> Business  </h2>
            </div>
            
            </div>
            </div>
            <div>
             <div className ="row">
             < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
           
            <h2 className="header-name"> Art and  Humanity </h2>
            </div>
            < div className ="col-md-6">
            
            <img height ="400px" width="100%" className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"/>
            <h2 className="header-name"> Health  </h2>
            </div>
            
            </div>
            </div>
      
        </Slider>
      </div>
    );
  }
}






