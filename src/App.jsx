import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Jumbotron, Grid, Image, Button, ButtonToolbar,  Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';



import Button1 from "./components/CustomButtons/Button.jsx";




// import {
//   Button, UncontrolledAlert, Card, CardImg, CardBody,
//   CardTitle, CardSubtitle, CardText
// } from 'reactstrap';

// const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';


// const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';




class App extends Component {
  render() {
    return (


<div>


<br/>
<Button variant="contained" color="primary">
    Hello World
  </Button>
  <br/>


<Button1
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button1>


<h1> </h1>
</div>

//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Hello World!</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
        
// <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
// 		Launch demo modal
// 	</button>
// <br/><br/><br/>
//      </div>


// <div>
//       <Grid>
//         <Jumbotron>
//           <h2> Hello World </h2>
          
// <nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>                        
//       </button>
//       <a class="navbar-brand" href="#">Logo</a>
//     </div>
//     <div class="collapse navbar-collapse" id="myNavbar">
//       <ul class="nav navbar-nav">
//         <li class="active"><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Projects</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//       <ul class="nav navbar-nav navbar-right">
//         <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>

//         </Jumbotron>
//       </Grid>


// <ButtonToolbar>
//   {/* Standard button */}
//   <Button>Default</Button>

//   {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
//   <Button bsStyle="primary">Primary</Button>

//   {/* Indicates a successful or positive action */}
//   <Button bsStyle="success">Success</Button>

//   {/* Contextual button for informational alert messages */}
//   <Button bsStyle="info">Info</Button>

//   {/* Indicates caution should be taken with this action */}
//   <Button bsStyle="warning">Warning</Button>

//   {/* Indicates a dangerous or potentially negative action */}
//   <Button bsStyle="danger">Danger</Button>

//   {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
//   <Button bsStyle="link">Link</Button>
// </ButtonToolbar>

// </div>

/*   
  <UncontrolledAlert color="danger" className="d-none d-lg-block">
    <strong>Account not activated.</strong>
  </UncontrolledAlert>
  
  <Card>
    <CardImg  width="100%" src={BANNER} alt="banner" />
    <CardBody>
      <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Glad Chinda</CardTitle>
      <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>Web Developer, Lagos</CardSubtitle>
      <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast. Hacking stuffs @theflutterwave.</CardText>
      <Button color="success" className="font-weight-bold">View Profile</Button>
    </CardBody>
  </Card>
   */

  // </div>

    );
  }
}

export default App;


/*
<div>
<Button color="primary">primary</Button>{' '}
<Button color="secondary">secondary</Button>{' '}
<Button color="success">success</Button>{' '}
<Button color="info">info</Button>{' '}
<Button color="warning">warning</Button>{' '}
<Button color="danger">danger</Button>{' '}
<Button color="link">link</Button>
</div>

*/

// {/* <Navbar default collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             {/* <Link to="/">CodeLife</Link> */}
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <Nav pullRight>
            
//           <NavItem eventKey={1}   href="/" to="/">
//               Home

//                         <h2> Hello World k</h2>

//             </NavItem>


//             <NavItem eventKey={2} href="/about" to="/about">

//                       <h2> Hello World k</h2>

//               About
//             </NavItem>



//             <NavItem eventKey={3}  href="/news" to="/news">

//                       <h2> Hello World k</h2>

//               News
//               </NavItem>


//           </Nav>
//         </Navbar.Collapse>
//       </Navbar> */}

// <nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>                        
//       </button>
//       <a class="navbar-brand" href="#">Logo</a>
//     </div>
//     <div class="collapse navbar-collapse" id="myNavbar">
//       <ul class="nav navbar-nav">
//         <li class="active"><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Projects</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//       <ul class="nav navbar-nav navbar-right">
//         <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>

// <div id="myCarousel" class="carousel slide" data-ride="carousel">
//     <!-- Indicators -->
//     <ol class="carousel-indicators">
//       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//       <li data-target="#myCarousel" data-slide-to="1"></li>
//     </ol>

//     <!-- Wrapper for slides -->
//     <div class="carousel-inner" role="listbox">
//       <div class="item active">
//         <img src="https://placehold.it/1200x400?text=IMAGE" alt="Image">
//         <div class="carousel-caption">
//           <h3>Sell $</h3>
//           <p>Money Money.</p>
//         </div>      
//       </div>

//       <div class="item">
//         <img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image">
//         <div class="carousel-caption">
//           <h3>More Sell $</h3>
//           <p>Lorem ipsum...</p>
//         </div>      
//       </div>
//     </div>

//     <!-- Left and right controls -->
//     <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
// </div>
  
// <div class="container text-center">    
//   <h3>What We Do</h3><br>
//   <div class="row">
//     <div class="col-sm-4">
//       <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
//       <p>Current Project</p>
//     </div>
//     <div class="col-sm-4"> 
//       <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
//       <p>Project 2</p>    
//     </div>
//     <div class="col-sm-4">
//       <div class="well">
//        <p>Some text..</p>
//       </div>
//       <div class="well">
//        <p>Some text..</p>
//       </div>
//     </div>
//   </div>
// </div><br>

// <footer class="container-fluid text-center">
//   <p>Footer Text</p>
// </footer>

// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>


// <blockquote class="blockquote text-center">
//   <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//   <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
// </blockquote>


// <div class="alert alert-light" role="alert">
//   A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
// </div>
// <div class="alert alert-dark" role="alert">
//   A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
// </div>

// <div class="card">
//   <div class="card-header">
//     Featured
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
  
// <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
//   <div class="btn-group mr-2" role="group" aria-label="First group">
//     <button type="button" class="btn btn-secondary">1</button>
//     <button type="button" class="btn btn-secondary">2</button>
//     <button type="button" class="btn btn-secondary">3</button>
//     <button type="button" class="btn btn-secondary">4</button>
//   </div>
//   <div class="btn-group mr-2" role="group" aria-label="Second group">
//     <button type="button" class="btn btn-secondary">5</button>
//     <button type="button" class="btn btn-secondary">6</button>
//     <button type="button" class="btn btn-secondary">7</button>
//   </div>
//   <div class="btn-group" role="group" aria-label="Third group">
//     <button type="button" class="btn btn-secondary">8</button>
//   </div>
// </div>
