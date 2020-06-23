import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardHeader from "components/Card/CardHeader.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import Card from "components/Card/Card.js";

import object from 'nailshopData';


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
                      <img src={object.about.image} alt="..." />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `("${object.about.image}")`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <h5 className={classes.cardTitle} style={{ color: "purple" }}>
                      {object.about.description}
                    </h5>
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
