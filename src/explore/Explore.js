import React ,{Component} from 'react'

import Nav from '../nav/Nav'
import Display from './Display'
import Cards from './Cards'
import Footer from '../nav/Footer'
function Explore(){
    return(
        <div >
            <Nav/>
           

             <Display/>
             <Cards  />
             <Footer/>
            </div>
    )
}

export default Explore