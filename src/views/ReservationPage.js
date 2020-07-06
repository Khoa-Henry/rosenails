import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";


const useStyles = makeStyles(headersStyle);

export default function SectionHeaders(props) {
  const classes = useStyles();
  return (
    <div id="reservation" className="cd-section">
      < div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${props.object.reservation.image}")` }
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} className={classes.mlAuto}>
              <h2 className={classes.title.mlAuto} style={{ color: 'white' }}>Host A Party?</h2>
              <h5 style={{ color: 'white' }}>
                {props.object.reservation.description}
              </h5>
              <br />
              <Button
                color="primary"
                size="lg"
                target="blank"
                href={props.object.reservation.website}
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
