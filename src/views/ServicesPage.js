/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Table from "components/Table/Table.js";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";



const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div id="services" className={classes.main} style={{ marginBottom: '5%' }}>
      <div className={classes.container}>
        <h2 className={classes.title} style={{ textAlign: "center", color: "#3C4858" }}>Services</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
            <NavPills
              alignCenter
              tabs={props.object.services.map(item => {
                let tabButton = item.type
                let tabContent = <Table
                  tableData={item.services.map(i => [i.name, `$${i.price}`])}
                />
                return { tabButton, tabContent }
              }
              )}
            />
            <div className={classes.tabSpace} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
