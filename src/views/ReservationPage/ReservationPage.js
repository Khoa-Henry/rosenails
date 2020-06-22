import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import bg0 from "assets/img/background/light/bg0.jpg";
import bg7 from "assets/img/background/light/bg7.jpg";


const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  return (
    <div id="reservation" className="cd-section" {...rest}>
      < div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${bg0}")` }
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Host A Party?</h1>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href=""
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
