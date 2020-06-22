import React from 'react';
import LandingPage from 'views/LandingPage/LandingPage';
import AboutPage from 'views/AboutPage/AboutPage';
import AboutPage2 from 'views/AboutPage/AboutPage2';
import ReservationPage from 'views/ReservationPage/ReservationPage';
import ContactPage from 'views/ContactPage/ContactPage';
import Footer from 'views/Footer/Footer';

export default function App() {
  return (
    <>
      <LandingPage />
      <AboutPage />
      <ReservationPage />
      <ContactPage />
      <Footer />
    </>
  )
}