import React, { Component } from "react";
import Slider from "react-slick";
import  './style.css'

export default class Slick extends Component {
    render(){const settings = {
        className: "center",
        infinite: true,
        leftPadding: "100px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
      const s = "<<-- scroll  -->>";
    return (
   
      < div  className="container hand  mt-4 mb-5  " style={{"text-align":"right"}}>
        <h2 className ="heading-com"> From the Coursera community</h2>
        <Slider {...settings}>
          <div style={{"background-image":"linear-gradient(90deg, rgba(7,13,74,1) 3%, rgba(255,0,0,1) 18%, rgba(255,0,108,1) 75%, rgba(255,0,164,1) 100%)"}} >
            <h3>4</h3>
            
            <img className="image"  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Kara A.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> iMBA Graduate, University of Illinois Gies College of Business</p>
          </div>
          <div>
            <h3>1</h3>
            
            <img className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/julio.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Julio R.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Web Developer ,Chile</p>
          
          </div>
          <div>
            <h3>2</h3>
            
            <img className="image" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/mirela-decorative.png?auto=format%2Ccompress&dpr=1&w=270&h="/>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> Mirela I.</p>
            <p className="mt-3 " style ={{"font-weight":"bold","text-align":"center"}}> IBM Data Science Professional Certificate Alumna</p>
          </div>
          <div>
            <h3>3</h3>
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