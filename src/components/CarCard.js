// src/components/CarCard.js

import React from 'react';

function CarCard({ car }) {
  if (!car) {
    return null;
  }

  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}${car.image}`} className="card-img-top" alt="Car Image" />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">{car.description}</p>
        <table className="table">
          <tbody>
            <tr>
              <th>Year</th>
              <td>{car.year}</td>
            </tr>
            <tr>
              <th>Top Speed</th>
              <td>{car.topSpeed} km/h</td>
            </tr>
            <tr>
              <th>Horsepower</th>
              <td>{car.horsepower} hp</td>
            </tr>
            <tr>
              <th>Acceleration (0-100 km/h)</th>
              <td>{car.acceleration} seconds</td>
            </tr>
            <tr>
              <th>Engine Displacement (cc)</th>
              <td>{car.cc}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarCard;
