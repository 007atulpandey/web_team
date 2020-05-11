import React,{Component} from 'react' ;
import './explore.css'

import { Card,Button,CardGroup } from 'react-bootstrap';

function Cards(){
  
    var cards = [{
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
    {
      src:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/aff5b0f54c11e7b5ae579a0e963c38/Logo_TheScienceofWell-Being.png?auto=format%2Ccompress&dpr=1&w=268",
      title: "Full Stack Developer",
      text:"Yell University"
    } ,
  ]
  var maps =cards.map((card)=>{
    return(<Card className="col-md-3 ml-1 flex mt-4 mb-3">
    <Card.Img variant="top" src=  {card.src}   />
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text>
        {card.text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    )
  });
    return (
        <div style={{"margin-top":"6rem","margin-bottom":"4rem"}}>
        <h2 style={{"margin-top":"6rem","margin-bottom":"4rem"}}> Some More Features and Courses </h2>
       
 
   {maps}
  
    </div>
    )
}


export default Cards 