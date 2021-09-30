import React from 'react';
import LandingPage from 'views/LandingPage';
import AboutPage from 'views/AboutPage';
import ServicesPage from 'views/ServicesPage';
import ReservationPage from 'views/ReservationPage';
import ContactPage from 'views/ContactPage';
import Footer from 'views/Footer';



class App extends React.Component {


  render() {
    return (
      <>
        <LandingPage />
        <AboutPage />
        <ServicesPage />
        {/* <ReservationPage /> */}
        <ContactPage />
        <Footer />
      </>
    )
  }
}

export default App