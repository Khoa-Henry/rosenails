import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";



const useStyles = makeStyles(contactsStyle);

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 - 0.025 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);

export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div id="contact" className="cd-section" {...rest}>
      <div className={classes.contacts2}>
        <div className={classes.map}>
          <RegularMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <GridItem xs={12} sm={6} md={3}>
          <Card className={classes.card2}>
            <CardHeader contact color="primary" className={classes.textCenter}>
              <h4 className={classes.cardTitle}>Contact Us</h4>
            </CardHeader>
            <CardBody className={classes.textCenter} >
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} >
                  <InfoArea
                    className={classes.infoArea2}
                    title="Phone"
                    description={
                      <span>
                        +40 762 321 762
                        </span>
                    }
                    icon={Phone}
                    iconColor="primary"

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InfoArea
                    className={classes.infoArea2}
                    title="Address"
                    description={
                      <span>
                        1111 W. Milwaukee
                        <br /> Milwaukee, WI
                      </span>
                    }
                    icon={PinDrop}
                    iconColor="primary"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InfoArea
                    className={classes.infoArea2}
                    title="Hours of Operation"
                    description={
                      <span>
                        Monday-Thursday: 9AM-8PM
                          <br /> Friday-Saturday:
                          <br /> Sunday:
                          <br />
                        <br />

                      </span>
                    }
                    icon={BusinessCenter}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </div>
    </div>
  );
}
