/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "components/Footer/Footer.js";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";



const useStyles = makeStyles(productStyle);

export default function FooterPage({ ...rest }) {
  const classes = useStyles();

  return (
    <div className="cd-section" {...rest}>
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.center}>
              Copyright &copy; {1900 + new Date().getYear()}
            </div>
          </div>
        }
      />
    </div>
  );
}

