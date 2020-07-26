import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import data from 'data.json';


const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div id="about" className="cd-section" style={{ minHeight: '81vh', backgroundColor: data.color.background }}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <h3 style={{ textAlign: 'center', marginTop: 0, padding: '4vh', color: data.color.word4 }}
          >
            About Us
            <GridContainer>
              <GridItem xs={12} sm={4} md={4} />
              <GridItem xs={12} sm={4} md={4} >
                <CustomLinearProgress
                  variant="determinate"
                  color="warning"
                  value={100}
                />
              </GridItem>
            </GridContainer>
          </h3>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div style={{ textAlign: 'center' }}>
                <img src={data.about.image} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} className={classes.mlAuto}>
              <h5 style={{ marginTop: '7vh', marginBottom: '5vh', marginLeft: '2vh', marginRight: '2vh' }} >
                {data.about.description}
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
