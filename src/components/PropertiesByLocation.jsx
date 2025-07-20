import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const sampleProperties = [
  { id: 101, title: '2 BHK Flat', area: '1200 sq.ft', price: '₹85 Lac', location: 'Dwarka Sector-3', purpose: 'For Sale' },
  { id: 102, title: '3 BHK Builder Floor', area: '1500 sq.ft', price: '₹1.10 Cr', location: 'Dwarka Sector-4', purpose: 'For Sale' },
  { id: 103, title: '1 BHK Apartment', area: '800 sq.ft', price: '₹55 Lac', location: 'Dwarka Sector-7', purpose: 'For Sale' },
  { id: 104, title: 'Plot for Sale', area: '200 sq.yd', price: '₹1.25 Cr', location: 'Dwarka Sector-9', purpose: 'For Sale' },
  { id: 105, title: 'Office Space', area: '2200 sq.ft', price: '₹1.8 Cr', location: 'Dwarka Sector-6', purpose: 'For Sale' },
  { id: 106, title: 'Shop', area: '300 sq.ft', price: '₹45 Lac', location: 'Dwarka Sector-5', purpose: 'For Sale' },
  { id: 107, title: '4 BHK House', area: '2000 sq.ft', price: '₹2.1 Cr', location: 'Dwarka Sector-2', purpose: 'For Sale' },
  { id: 108, title: '2 BHK Builder Floor', area: '1150 sq.ft', price: '₹80 Lac', location: 'Dwarka Sector-1', purpose: 'For Sale' },
  { id: 109, title: 'Commercial Land', area: '500 sq.yd', price: '₹3.75 Cr', location: 'Dwarka Sector-10', purpose: 'For Sale' },
  { id: 110, title: 'Warehouse', area: '3000 sq.ft', price: '₹1.95 Cr', location: 'Dwarka Sector-21', purpose: 'For Sale' },
  { id: 111, title: 'Industrial Shed', area: '5000 sq.ft', price: '₹2.9 Cr', location: 'Dwarka Sector-14', purpose: 'For Sale' },
  { id: 112, title: 'Showroom Space', area: '1800 sq.ft', price: '₹1.35 Cr', location: 'Dwarka Sector-12', purpose: 'For Sale' },
  { id: 113, title: 'Independent House', area: '2500 sq.ft', price: '₹2.5 Cr', location: 'Dwarka Sector-8', purpose: 'For Sale' },
  { id: 114, title: '3 BHK Flat', area: '1350 sq.ft', price: '₹95 Lac', location: 'Dwarka Sector-15', purpose: 'For Sale' },
  { id: 115, title: 'Office on Rent', area: '1100 sq.ft', price: '₹45,000/mo', location: 'Dwarka Sector-13', purpose: 'For Rent' },
  { id: 116, title: 'Commercial Building', area: '8000 sq.ft', price: '₹7 Cr', location: 'Dwarka Sector-18', purpose: 'For Sale' },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PropertiesByLocation = () => {
  const navigate = useNavigate();
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    setPropertyList(shuffleArray(sampleProperties));
  }, []);

  const getCardGroups = () => {
    const totalCards = 4;
    const propertiesPerCard = 5;
    const required = totalCards * propertiesPerCard;
    const list = propertyList.slice(0, required);

    const groups = [];
    for (let i = 0; i < totalCards; i++) {
      groups.push(list.slice(i * propertiesPerCard, (i + 1) * propertiesPerCard));
    }

    return groups;
  };

  return (
    <div className="location-block-section container my-5">
      <h3 className="text-center mb-4">Properties by Locations in Dwarka</h3>
      <div className="row">
        {getCardGroups().map((cardProps, cardIndex) => (
          <div className="col-md-3 col-sm-6 mb-4" key={cardIndex}>
            <div className="location-card">
              {cardProps.map((prop, idx) => (
                <div
                  className="location-card-section clickable-hover"
                  key={idx}
                  onClick={() => navigate(`/property/${prop.id}`)}
                >
                  <div className="property-info">
                    <div className="title">{prop.title}</div>
                    <div className="area">{prop.area} | {prop.price}</div>
                    <div className="location-name">{prop.purpose} | {prop.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesByLocation;