import  React,{Component} from "react"
import New from './body/New'
import Color from './body/Color_div'

import Nav from './nav/Nav'
import Banner from './nav/banner'
import Company from './body/Company'
import Bodybanner from './body/Bodybanner'
import Slick from './body/Slick'
function Combine(){

    return (
        <div>
            <Nav/>
             <Banner />
      <Company/>
      <New/>
      <Color/>
      <Bodybanner/>
      <Slick/>
            </div>

    )
}





export default Combine