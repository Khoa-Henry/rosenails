import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";



const useStyles = makeStyles(productStyle);

export default function FooterPage(props) {
  const classes = useStyles();

  return (
    <div className="cd-section">
      <Footer
        theme="dark"
        content={
          // <div>
          //   <div className={classes.left}>
          //     <a
          //       href="https://www.smallneighborhood.com"
          //       className={classes.footerBrand}
          //     >
          //       SMALLNEIGHBORHOOD
          //   </a>
          //   </div>
          //   <div className={classes.right}>
          //     Copyright &copy;  {1900 + new Date().getYear()} {props.object.name}. All Rights Reserved.
          //   </div>
          // </div>

          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.smallneighborhood.com"
                    target="blank"
                    className={classes.block}
                  >
                    SMALLNEIGHBORHOOD
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              {props.object.name}.
              All Rights Reserved.
            </div>
          </div>
        }
      />
    </div>
  );
}

