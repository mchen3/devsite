import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import classNames from "classnames";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


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

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';

import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';


import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
//import withStyles from "@material-ui/core/styles/withStyles";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import yellow from '@material-ui/core/colors/yellow';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';


import Button1 from '@material-ui/core/Button';


const styles = theme => ({
 

  root: {
    flexGrow: 1,
  },
  
  orangeTheme: {
    backgroundColor: orange[500],
    color: blue[500],
  },

  tealTheme: {
    backgroundColor: teal['A100'],
    color: teal[400],
  },
  

  blueTheme: {
    backgroundColor: blue['A100'],
    color: blue[400],
  },
  
  redTheme: {
    backgroundColor: red[500],
  },
  
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },

  test: {
    padding: theme.spacing.unit * 2,
  },

  sliderRoot: {
    width:300
  },

  sliderValue: {
    width:40
  },


});

class App extends Component {

  state = {
    spacing: '16',
    sliderValue: 50,
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    console.log(this.state);
  

    return (

    <div>
      <br/><br/>

      <Grid container className={classes.root} spacing={16}>

            {/*  Button1 is from Material UI
            Primary and Secondary are objects that come with Material UI */}
        <Grid item xs={12}>
          <Button1  color="primary">First</Button1>
          <Button1 className={classes.orangeTheme}     >Second</Button1>
          <Button1 color="secondary">Third</Button1>
          <Button1 className={classes.tealTheme}  >Fourth</Button1>
        {/* <Button1 className={classes.theme3} color="secondary">Fifth</Button1> 
      will not workButton1 and Button do not overrid the color properties like you normally do. 
      */}
          <Button1 background-color="red"> Fifth</Button1>
          <Button color="warning"> Sixth</Button>
        </Grid>

        <Grid item xs={10}>
          <Grid container className={classes.demo} justify="center" spacing={8}>
            <Button variant="contained" className={classes.blueTheme} >
              Default
            </Button>
            <Button variant="contained" color="primary" >
              Primary
            </Button>
            <Button variant="contained" className={classes.redTheme} >
              Secondary
            </Button>
            <Button1  className={classes.purpleTheme}> Seventh</Button1>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <br/><br/>
          <List >
            <ListItem  button >
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText inset primary="Photos" secondary="Jan 9, 2014" />
            </ListItem >
            <ListItem>  
              <Avatar  className=  {classes.orangeTheme}>
                <WorkIcon />
              </Avatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
            <ListItem className={classes.tealTheme}>
              <Avatar className={classes.blueTheme}>
                <WorkIcon />
              </Avatar>
              <ListItemText primary="Work" secondary="July 20, 2014" />
            </ListItem>
           </List>
        </Grid>

        <Grid item xs={12}>
          <br/><br/>
          <div className={classes.sliderRoot}>
            <Typography id="label">Slider label</Typography>
            <Slider backgroundcolor="pink"  value={this.state.sliderValue} aria-labelledby="label" onChange={this.handleChange("sliderValue")} />
          </div>
          <br/><br/>
          <IconButton className={classes.margin}>
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
          <Button variant="contained" className={classes.blueTheme} >
            Default
          </Button>
          <Button variant="contained" color="primary" >
           Primary
          </Button>
          <Button variant="contained" className={classes.redTheme} >
            Secondary
          </Button>
          <Button1  className={classes.purpleTheme}> 
           Seventh
           </Button1>
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup name="spacing" aria-label="spacing" value={spacing}
                  onChange={this.handleChange("spacing")} row>
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel value="24" control={<Radio />} label="24" />
                  <FormControlLabel value="32" control={<Radio />} label="32" />
                  <FormControlLabel value="40" control={<Radio />} label="40" />      
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
 </div>

    );

  }
}

export default withStyles(styles)(App);


