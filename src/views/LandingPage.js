import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";




const useStyles = makeStyles(headersStyle);

export default function SectionHeaders(props) {
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
                  Home
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#about"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  About us
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#services"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  Services
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#reservation"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  Reservation
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#contact"
                  className={classes.navLink}
                  color="transparent"
                  size="lg"
                >
                  Contact us
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
              style={{ backgroundImage: `url("${props.object.image}")` }}
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
                    <h3 style={{ fontFamily: 'Arizonia' }}>Welcome to </h3>
                    <h1 style={{ marginTop: "0px" }} className={classes.title}>{props.object.name}</h1>
                    <h6 style={{ color: "white", marginTop: "20px" }}>
                      Where Style is Created
                    </h6>
                    <br />
                    <div>
                      <Button color="primary" size="lg" href={props.object.reservation.website}>
                        <EventAvailableIcon /> Book Now
                      </Button>
                    </div>
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
              style={{ backgroundImage: `url("${props.object.image1}")` }}
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
                    <h1 style={{ marginTop: "0px" }} className={classes.title}>{props.object.name}</h1>
                    <h6 style={{ color: "white", marginTop: "20px" }}>
                      Where Style is Created
                    </h6>
                    <br />
                    <div>
                      <Button color="primary" size="lg" href={props.object.reservation.website}>
                        <EventAvailableIcon /> Book Now
                      </Button>
                    </div>
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
              style={{ backgroundImage: `url("${props.object.image2}")` }}
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
                    <h1 style={{ marginTop: "0px" }} className={classes.title}>{props.object.name}</h1>
                    <h6 style={{ color: "white", marginTop: "20px" }}>
                      Where Style is Created
                    </h6>
                    <br />
                    <div>
                      <Button color="primary" size="lg" href={props.object.reservation.website}>
                        <EventAvailableIcon /> Book Now
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
