import React from "react";

import classNames from "classnames";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import landing1 from '../assets/images/landing1.jpg';
import landing2 from '../assets/images/landing2.jpeg';
import landing3 from '../assets/images/landing3.jpg';

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import data from 'data.json';


const useStyles = makeStyles(headersStyle);

export default function SectionHeaders() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="cd-section">
      <div>
        <Header
          absolute
          brand=""
          color="transparent"
          links={
            <List className={classes.list + " " + classes.mlAuto}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#home"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"

                >
                  <h6 style={{ margin: 0, fontWeight: 600 }}>Home</h6>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#about"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  <h6 style={{ margin: 0, fontWeight: 600 }}>About us</h6>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#services"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  <h6 style={{ margin: 0, fontweight: 600 }}>Services</h6>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#reservation"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  <h6 style={{ margin: 0, fontWeight: 600 }}>Reservation</h6>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#contact"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  <h6 style={{ margin: 0, fontweight: 600 }}>Contact Us</h6>
                </Button>
              </ListItem>
            </List>
          }
        />
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${landing1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h3 style={{ fontFamily: 'Arizonia', marginBottom: 0 }}>Welcome to </h3>
                    <h1 style={{ marginTop: 0, marginBottom: '1vh' }} className={classes.title}>{data.name}</h1>
                    <h5 style={{ color: data.color.word1, marginTop: 0 }}>
                      Where Style is Created
                    </h5>
                    <br />
                    <br />
                    
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${landing2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h3 >Welcome to </h3>
                    <h1 style={{ marginTop: 0, marginBottom: '1vh' }} className={classes.title}>{data.name}</h1>
                    <h5 style={{ color: data.color.word2, marginTop: 0 }}>
                      Where Style is Created
                    </h5>
                    <br />
                    <br />
                    {/* <div>
                      <Button size="lg" target="blank"
                        href={data.reservation.website}
                        style={{ backgroundColor: data.color.theme }}
                      >
                        <i class="far fa-calendar-alt" />
                        Book Now
                      </Button>
                    </div> */}
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${landing3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h3 >Welcome to </h3>
                    <h1 style={{ marginTop: 0, marginBottom: '1vh' }} className={classes.title}>{data.name}</h1>
                    <h5 style={{ color: data.color.word1, marginTop: 0 }}>
                      Where Style is Created
                    </h5>
                    <br />
                    <br />
                    <div>
                      <Button size="lg" target="blank"
                        href={data.reservation.website}
                        style={{ backgroundColor: data.color.theme }}>
                        <i class="far fa-calendar-alt" />
                        Book Now
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
      </div>
    </div>
  );
}
