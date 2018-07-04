import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Jumbotron, Grid, Image, Button, ButtonToolbar,  Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

//import Button from '@material-ui/core/Button';

//import Button1 from "./components/CustomButtons/Button.jsx";


//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";

import classNames from "classnames";


// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";


// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

const dashboardRoutes = [];

//

// import {
//   Button, UncontrolledAlert, Card, CardImg, CardBody,
//   CardTitle, CardSubtitle, CardText
// } from 'reactstrap';


class App extends Component {
  render() {

    const { classes, ...rest } = this.props;


    //console.log(this.props);


    return (


<div>
<br/>

<Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        /> 


<Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}> Front Page Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>



 <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />




</div>

    );
  }
}

export default withStyles(landingPageStyle)(App);
//export default App;


// <Button variant="contained" color="primary">
//     Hello World
//   </Button>
//   <br/>


//               <Button
//                   color="danger"
//                   size="lg"
//                   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fas fa-play" />Watch video
//                 </Button>



//                 <GridContainer justify="center">
//           <GridItem xs={12} sm={12} md={8}>
//             <h2 className={"te"}>Let's talk product</h2>
//             <h5 className={"test"}>
//               This is the paragraph where you can write more details about your
//               product. Keep you user engaged by providing meaningful
//               information. Remember that by this time, the user is curious,
//               otherwise he wouldn't scroll to get here. Add a button if you want
//               the user to see more.
//             </h5>
//           </GridItem>
//         </GridContainer>



// <GridContainer justify="center">
//               <GridItem xs={12} sm={12} md={8}>
//                 <Button>Default</Button>
//                 <Button color="primary">Primary</Button>
//                 <Button color="info">Info</Button>
//                 <Button color="success">Success</Button>
//                 <Button color="warning">Warning</Button>
//                 <Button color="danger">Danger</Button>
//                 <Button color="rose">Rose</Button>
//               </GridItem>
//             </GridContainer>
