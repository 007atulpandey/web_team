import React,{Component} from 'react'
import './style.css'

function Bodybanner(){

   return (
       <div>
             <div className="heading">
            World-class learning for anyone, anywhere
            </div>
            <div className="row ">
            <div className="col-md-5 " style={{"text-align":"left","padding-top":"5em","padding-left":"2em"}}> 
            <p className="ml-5 text-muted " style={{"font-size":"2rem","font-weight":"bold"}}>TOP QUALITY </p>
               <p className="ml-5 " style={{"font-family":"OpenSans,Arial,sans-serif","font-size":"25px"}} > Learn from leading universities and companies</p>
               <p className="ml-5  ">
                Start streaming on-demand video lectures today from top instructors in subjects like business,
                computer science, data science, language learning, & more.
                </p>
                </div>
            <div className="col-md-7 float-left"> 
                <img src ="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/andrewng.png?auto=format%2Ccompress&dpr=1&w=695&h=" height="100%" width="80%"/>
                </div>                
            </div>
            <div className="row  " style={{"margin-top":"4rem"}}>
            <div className="col-md-7 float-left"> 
                <img src ="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/offerings2.png?auto=format%2Ccompress&dpr=1&w=386&h=" height="70%" width="60%"/>
                </div>
            <div className="col-md-5 " style={{"text-align":"left","padding-top":"5em","padding-left":"2em"}}> 
            <p className="ml-5 text-muted " style={{"font-size":"2rem","font-weight":"bold"}}>ACCESSIBLE </p>
               <p className="ml-5 " style={{"font-family":"OpenSans,Arial,sans-serif","font-size":"25px"}} > Find flexible, affordable options</p>
               <p className="ml-5  ">
               Choose from many options including free courses and university degrees a
               t a breakthrough price. Learn at your own pace, 100% online.
                </p>
                </div>                
            </div>

            <div className="heading">
            World-class learning for anyone, anywhere
            </div>
            <div className="row ">
            <div className="col-md-4 " style={{"text-align":"left","padding-top":"5em","padding-left":"2em"}}> 
            <p className="ml-5 text-muted " style={{"font-size":"2rem","font-weight":"bold"}}>APPLIED LEARNING </p>
               <p className="ml-5 " style={{"font-family":"OpenSans,Arial,sans-serif","font-size":"25px"}} > Master skills with in-depth learning</p>
               <p className="ml-5  ">
               Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners
                </p>
                </div>
            <div className="col-md-8 float-left"> 
                <img src ="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/quizCompletion.png?auto=format%2Ccompress&dpr=1&w=820&h=" height="100%" width="80%"/>
                </div>                
            </div>
            <div className="row  " style={{"margin-top":"4rem"}}>
            <div className="col-md-6 float-right mt-5"> 
                <img src ="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/certificates4.png?auto=format%2Ccompress&dpr=1&w=546&h=" height="80%" width="80%"/>
                </div>
            <div className="col-md-6 " style={{"text-align":"left","padding-top":"5em","padding-left":"2em"}}> 
            <p className="ml-5 text-muted float-left  " style={{"font-size":"2rem","font-weight":"bold"}}>SHAREABLE CERTIFICATES </p>
               <p className="ml-5 float-left " style={{"font-family":"OpenSans,Arial,sans-serif","font-size":"25px"}} >Earn industry-recognized credentials</p>
               <p className="ml-5 float-left ">
               Demonstrate your new skills by sharing your Course Certificate, Professional Certificate, MasterTrack™ Certificate, or diploma with your network.
                </p>
                </div>                
            </div>


       </div>
   )

}


export default Bodybanner
