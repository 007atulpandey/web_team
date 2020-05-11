import React ,{Component} from 'react'

import Nav from '../nav/Nav'
import Display from './Display'
import Cards from './Cards'
function Explore(){
    return(
        <div >
            <Nav/>
           

             <Display/>
             <Cards  />
            </div>
    )
}

export default Explore