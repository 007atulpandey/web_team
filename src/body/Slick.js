import React, { Component } from "react";
import Slider from "react-slick";
import  './style.css'
import "./slick.css"

export default class Slick extends Component {
    render(){
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const s = "<<-- scroll  -->>";
    return (
  
   
      < div  className="container hand  mt-4 mb-5  " style={{"text-align":"center","justify-content":"center"}}>
        <h2 className ="heading-com"> From the Coursera community</h2>
        <Slider {...settings}>
        
          <div  >
           
            
            <img className="image"  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Kara A.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> iMBA Graduate, University of Illinois Gies College of Business</p>
          </div>
          <div >
           
            
            <img className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/julio.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Julio R.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Web Developer ,Chile</p>
          
          </div>
          <div  >
           
            
            <img className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/mirela-decorative.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Mirela I.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> IBM Data Science Professional Certificate Alumna</p>
          </div>
          <div  >
           
            <img className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/sabrina.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Sabrina M.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> HR MANAGER United State</p>
           </div>
         
        </Slider>
        <p style={{"text-align":"center" , "font-size":"20px","font-weight":"bold"}}> {s} </p>
        <hr style ={{"width":"100%"}}  />

      </div>
    );
  }
}