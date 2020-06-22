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
import TodayIcon from '@material-ui/icons/Today';
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import bg from "assets/img/background/dark/bg.jpg";
import bg0 from "assets/img/background/dark/bg0.jpg";
import bg1 from "assets/img/background/dark/bg1.jpg";
import bg2 from "assets/img/background/dark/bg2.jpeg";
import bg7 from "assets/img/background/dark/bg7.jpg";
import Card from "components/Card/Card.js";
import card from "assets/img/vertical/card.png";
import card0 from "assets/img/vertical/card0.jpg";
import card1 from "assets/img/vertical/card1.png";


const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      <div>
        <Header
          absolute
          brand=""
          color="transparent"
          links={
            <List className={classes.list + " " + classes.mlAuto}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  color="transparent"
                >
                  Home
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#about"
                  className={classes.navLink}
                  color="transparent"
                >
                  About us
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#reservation"
                  className={classes.navLink}
                  color="transparent"
                >
                  Reservation
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#contact"
                  className={classes.navLink}
                  color="transparent"
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
              style={{ backgroundImage: `url("${bg2}")` }}
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
                    <h1 style={{ marginTop: "0px" }} className={classes.title}>"Shop name"</h1>
                    <h6 style={{ color: "white", marginTop: "20px" }}>
                      Where Style is Created
                    </h6>
                    <br />
                    <div>
                      <Button color="primary" size="lg">
                        <TodayIcon /> Book Now
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
              style={{ backgroundImage: `url("${bg7}")` }}
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
                    <h1 style={{ marginTop: "0px" }} className={classes.title}>"Shop name"</h1>
                    <h6 style={{ color: "white", marginTop: "20px" }}>
                      Where Style is Created
                    </h6>
                    <br />
                    <div>
                      <Button color="primary" size="lg">
                        <TodayIcon /> Book Now
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
              style={{ backgroundImage: `url("${bg1}")` }}
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
                    <h1 style={{ marginTop: "0px" }} className={classes.title}>"Shop name"</h1>
                    <h6 style={{ color: "white", marginTop: "20px" }}>
                      Where Style is Created
                    </h6>
                    <br />
                    <div>
                      <Button color="primary" size="lg">
                        <TodayIcon /> Book Now
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


      {/* Contact info */}
      {/* <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title} style={{ textAlign: "center" }}>About Us</h2>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={card0} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${card0})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                      <h6 className={classes.cardCategory}>Lorem ipsum</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Lorem ipsum
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div> */}


    </div>
  );
}
