import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Info from "components/Typography/Info.js";

import CardHeader from "components/Card/CardHeader.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import Card from "components/Card/Card.js";
import card from "assets/img/vertical/card.png";
import card0 from "assets/img/vertical/card0.jpg";
import card1 from "assets/img/vertical/card1.png";



const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div id="about" className="cd-section" style={{ minHeight: '100vh' }} {...rest}>
      <div className={classes.blog}>
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
                        <img src={card} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(card)`,
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
      </div>
    </div>
  );
}
