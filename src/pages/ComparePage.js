// src/pages/ComparePage.js

import React, { useState, useEffect } from 'react';
import '../styles.css';
import CarCard from '../components/CarCard';

function ComparePage() {
  const [carsData, setCarsData] = useState([]);
  const [selectedCar1, setSelectedCar1] = useState(null);
  const [selectedCar2, setSelectedCar2] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ferrari_data.json`)
      .then(response => response.json())
      .then(data => {
        setCarsData(data);
      });
  }, []);

  const handleCarSelect1 = (event) => {
    const car = carsData.find(c => c.id === event.target.value);
    setSelectedCar1(car);
  };

  const handleCarSelect2 = (event) => {
    const car = carsData.find(c => c.id === event.target.value);
    setSelectedCar2(car);
  };

  return (
    <div className="container my-4 compare-page">
      <h1 className="text-center my-4">Compare Ferrari Models</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="carSelect1" className="form-label">Select Ferrari 1</label>
            <select id="carSelect1" className="form-select" onChange={handleCarSelect1}>
              <option value="">Select a car</option>
              {carsData.map(car => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))}
            </select>
          </div>
          <CarCard car={selectedCar1} />
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="carSelect2" className="form-label">Select Ferrari 2</label>
            <select id="carSelect2" className="form-select" onChange={handleCarSelect2}>
              <option value="">Select a car</option>
              {carsData.map(car => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))}
            </select>
          </div>
          <CarCard car={selectedCar2} />
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
