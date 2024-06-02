import React, { useState, useEffect } from 'react';
import '../styles.css';

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
          {selectedCar1 && (
            <div id="car1Details" className="card">
              <img id="car1Img" src={`${process.env.PUBLIC_URL}${selectedCar1.image}`} className="card-img-top" alt="Car Image" />
              <div className="card-body">
                <h5 id="car1Title" className="card-title">{selectedCar1.name}</h5>
                <p id="car1Description" className="card-text">{selectedCar1.description}</p>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Year</th>
                      <td id="car1Year">{selectedCar1.year}</td>
                    </tr>
                    <tr>
                      <th>Top Speed</th>
                      <td id="car1TopSpeed">{selectedCar1.topSpeed} km/h</td>
                    </tr>
                    <tr>
                      <th>Horsepower</th>
                      <td id="car1Horsepower">{selectedCar1.horsepower} hp</td>
                    </tr>
                    <tr>
                      <th>Acceleration (0-100 km/h)</th>
                      <td id="car1Acceleration">{selectedCar1.acceleration} seconds</td>
                    </tr>
                    <tr>
                      <th>Engine Displacement (cc)</th>
                      <td id="car1Cc">{selectedCar1.cc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
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
          {selectedCar2 && (
            <div id="car2Details" className="card">
              <img id="car2Img" src={`${process.env.PUBLIC_URL}${selectedCar2.image}`} className="card-img-top" alt="Car Image" />
              <div className="card-body">
                <h5 id="car2Title" className="card-title">{selectedCar2.name}</h5>
                <p id="car2Description" className="card-text">{selectedCar2.description}</p>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Year</th>
                      <td id="car2Year">{selectedCar2.year}</td>
                    </tr>
                    <tr>
                      <th>Top Speed</th>
                      <td id="car2TopSpeed">{selectedCar2.topSpeed} km/h</td>
                    </tr>
                    <tr>
                      <th>Horsepower</th>
                      <td id="car2Horsepower">{selectedCar2.horsepower} hp</td>
                    </tr>
                    <tr>
                      <th>Acceleration (0-100 km/h)</th>
                      <td id="car2Acceleration">{selectedCar2.acceleration} seconds</td>
                    </tr>
                    <tr>
                      <th>Engine Displacement (cc)</th>
                      <td id="car2Cc">{selectedCar2.cc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
