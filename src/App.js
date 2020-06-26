import React from 'react';
import LandingPage from 'views/LandingPage';
import AboutPage from 'views/AboutPage';
import ServicesPage from 'views/ServicesPage';
import ReservationPage from 'views/ReservationPage';
import ContactPage from 'views/ContactPage';
import Footer from 'views/Footer';

import bg from "images/bg.jpeg";
import bg2 from "images/bg2.jpg";
import bg1 from "images/bg1.jpg";
import bg0 from "images/bg0.jpg";
import vertical from "images/vertical.png";



class App extends React.Component {

  state = {
    "BusinessID": "magicalnailsmilwaukee",
    "name": "Magical Nails",
    "lat": 43.134312, "lng": -88.005608,

    "image": bg,
    "image1": bg2,
    "image2": bg1,
    "about": {
      "description": "Magical Nails is a Milwaukee beauty professional specializing in nails, waxing, and lashes. Our goal is to have every client walk away feeling more beautiful and confident. Our enthusiastic, professional technicians with immensely experienced always ensure to bring you an impressive beauty, whether you’re preparing for a special event or just know it’s time to treat yourself.",
      "image": vertical
    },
    "services": [
      {
        "services": [
          {
            "name": "Basic",
            "price": 15
          },
          {
            "name": "Delux",
            "price": 25
          },
          {
            "name": "Dipping Powder",
            "price": 35
          },
          {
            "name": "Full-set",
            "price": 35
          },
          {
            "name": "Fill",
            "price": 25
          },
          {
            "name": "Shellac",
            "price": 25
          }
        ],
        "type": "Manicure"
      },
      {
        "services": [
          {
            "name": "Basic",
            "price": 25
          },
          {
            "name": "Delux",
            "price": 35
          },
          {
            "name": "Shellac",
            "price": 45
          }
        ],
        "type": "Pedicure"
      },
      {
        "services": [
          {
            "name": "Eyebrows wax",
            "price": 10
          },
          {
            "name": "Eyelash extension",
            "price": 25
          }
        ],
        "type": "Eyes"
      }
    ],
    "reservation": {
      "description": "Our salon is the perfect place to host a party, corporate event or a just a get-together for friends, family, and co-workers. We have a beautiful and accommodating space, affordable prices to fit everyone's budget, and a large team of technicians to serve your needs so you and your guests can relax and enjoy the party.",
      "website": "https://www.smallneighborhood.com/magicalnailsmilwaukee",
      "image": bg0
    },
    "contactNumber": "(414) 306-2025",
    "address": "6410 N 76th St, Milwaukee, WI 53223",
    "hours": {
      "Monday": "9:00 AM - 7:00 PM",
      "Tuesday": "9:00 AM - 7:00 PM",
      "Wednesday": "9:00 AM - 7:00 PM",
      "Thursday": "9:00 AM - 7:00 PM",
      "Friday": "9:00 AM - 7:00 PM",
      "Saturday": "9:00 AM - 7:00 PM",
      "Sunday": "10:00 AM - 4:30PM"
    }
  }

  componentDidMount() {
    document.title = this.state.name
  }



  render() {
    return (
      <>
        <LandingPage object={this.state} />
        <AboutPage object={this.state} />
        <ServicesPage object={this.state} />
        <ReservationPage object={this.state} />
        <ContactPage object={this.state} />
        <Footer />
      </>
    )
  }
}

export default App