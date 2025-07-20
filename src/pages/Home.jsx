import React from 'react';
import HeroSearch from '../components/HeroSearch';
import PropertyTypeBlock from '../components/PropertyTypeBlock';
import HotProperties from '../components/HotProperties';
import PropertiesByLocation from '../components/PropertiesByLocation';
import AdZone from '../components/AdZone';  // ✅ Reusable banner component
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      {/* ✅ Announcement / Notification Bar (optional) */}
      <AdZone zone="announcement-bar" />

      {/* ✅ Hero Top Banner */}
      <AdZone zone="hero-top" />

      <HeroSearch />

      {/* ✅ Property Categories */}
      <PropertyTypeBlock />

      {/* ✅ Middle Page Banner */}
      <AdZone zone="home-middle" />

      {/* ✅ Hot Properties */}
      <HotProperties />

      {/* ✅ Inline Banner Between Listings */}
      <AdZone zone="inline-listing-3" />

      {/* ✅ Properties By Location */}
      <PropertiesByLocation />

      {/* ✅ Welcome Block */}
      <Container fluid className="my-5">
        <h2 className="text-center mb-4">Welcome to EasyLeaze</h2>
        <p className="text-center">
          Discover rental and property deals across India’s top cities with EasyLeaze.
        </p>
      </Container>

      {/* ✅ Footer Banner */}
      <AdZone zone="footer-above" />

      {/* ✅ Sidebar Ad (right side) */}
      <AdZone zone="sidebar-right" />

      {/* ✅ Sticky Bottom Banner */}
      <AdZone zone="bottom-stick" />

      {/* ✅ Popup Modal Banner */}
      <AdZone zone="popup-home" />
    </>
  );
};

export default Home;