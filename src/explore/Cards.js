import React,{Component} from 'react' ;
import './explore.css'

import { Card,Button,CardGroup } from 'react-bootstrap';

function Cards(){
  
    var cards = [{
      title: "title",
      text:"text-body"
    } ,
    {
      title: "title 2",
      text:"text-body 2"
    },
    {
      title:"title 3",
      text:"text-body 3"
    }
  ]
  var maps =cards.map((card)=>{
    return(<Card>
    <Card.Img variant="top" src="holder.js/100px160" />
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
        <div className="container" style={{"margin-top":"6rem","margin-bottom":"4rem"}}>
        <h2 style={{"margin-top":"6rem","margin-bottom":"4rem"}}> Some More Features and Courses </h2>
        <CardGroup >
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
   {maps}
  
</CardGroup>
    </div>
    )
}


export default Cards 