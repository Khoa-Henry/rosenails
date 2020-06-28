import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardHeader from "components/Card/CardHeader.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import Card from "components/Card/Card.js";



const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures(props) {
  const classes = useStyles();
  return (
    <div id="about" className="cd-section" style={{ minHeight: '85vh', backgroundColor: '#fdf7ff' }}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title} style={{ textAlign: "center" }}>About Us</h2>
              <GridContainer >
                <GridItem xs={12} sm={4} md={4}>
                  <CardHeader>
                    <img src={props.object.about.image} alt="..." />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `("${props.object.about.image}")`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7} >
                  <h5 className={classes.cardTitle} style={{ color: "#575757", padding: '5vw' }}>
                    {props.object.about.description}
                  </h5>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
