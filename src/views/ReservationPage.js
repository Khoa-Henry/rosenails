import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import object from 'nailshopData';



const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  return (
    <div id="reservation" className="cd-section" {...rest}>
      < div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${object.reservation.image}")` }
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Host A Party?</h1>
              <h4>
                {object.reservation.description}
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href={object.reservation.website}
                target="_blank"
                rel=""
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
