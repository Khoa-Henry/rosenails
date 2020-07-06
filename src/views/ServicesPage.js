import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Table from "components/Table/Table.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";



const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div id="services" className={classes.main} style={{ marginTop: '1vh', marginBottom: '1vh', minHeight: '70vh' }}>
      <div className={classes.container}>
        <h3 className={classes.title} style={{ textAlign: "center", color: "#3C4858", paddingTop: '5vh', marginTop: 0, marginBottom: '4vh' }}>Services
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
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} className={classes.textCenter}>
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
