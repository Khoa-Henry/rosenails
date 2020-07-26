import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import data from 'data.json';

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders() {
  const classes = useStyles();
  return (
    <div id="reservation" className="cd-section">
      < div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${data.reservation.image}")` }
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} className={classes.mlAuto}>
              <h2 className={classes.title.mlAuto} style={{ color: data.color.word5 }}>Host A Party?</h2>
              <h5 style={{ color: data.color.word5 }}>
                {data.reservation.description}
              </h5>
              <br />
              <Button
                style={{ backgroundColor: data.color.theme }}
                size="lg"
                target="blank"
                href={data.reservation.website}
              >
                <i className="fas fa-ticket-alt" />
                Reserve Now
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div >
    </div >
  );
}
