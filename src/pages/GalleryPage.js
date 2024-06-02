import React, { useState, useEffect } from 'react';
import '../styles.css';

function GalleryPage() {
  const [carsData, setCarsData] = useState([]);
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ferrari_data.json`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Debug log
        setCarsData(data);
        setSelectedCarIndex(0); // Display details of the first car by default
      });
  }, []);

  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleCaptions');
    if (carouselElement) {
      carouselElement.addEventListener('slid.bs.carousel', (event) => {
        const activeElement = document.querySelector('#carouselExampleCaptions .carousel-inner .active');
        const activeIndex = Array.from(activeElement.parentNode.children).indexOf(activeElement);
        console.log('Active carousel index:', activeIndex); // Debug log
        setSelectedCarIndex(activeIndex);
      });
    }
  }, [carsData]);

  const handleThumbnailClick = (index) => {
    console.log('Thumbnail clicked index:', index); // Debug log
    setSelectedCarIndex(index);
    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleCaptions'));
    carousel.to(index);
  };

  return (
    <div className="container my-4">
      <h1 className="my-4 text-center">Ferrari Gallery</h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="20000">
        <div className="carousel-inner" id="carousel-inner">
          {carsData.map((car, index) => {
            const imagePath = `${process.env.PUBLIC_URL}${car.image}`;
            console.log('Image path:', imagePath); // Debug log
            return (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={imagePath} className="d-block w-100" alt={car.name} />
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id="car-details" className="car-details p-2">
        {carsData.length > 0 && (
          <>
            <h5>{carsData[selectedCarIndex].name}</h5>
            <p>{carsData[selectedCarIndex].description}</p>
            <p>
              Year: {carsData[selectedCarIndex].year} | Top Speed: {carsData[selectedCarIndex].topSpeed} km/h |
              Horsepower: {carsData[selectedCarIndex].horsepower} hp | Cylinders: {carsData[selectedCarIndex].cylinders} |
              Acceleration: 0-100 km/h in {carsData[selectedCarIndex].acceleration} seconds | Engine Displacement: {carsData[selectedCarIndex].cc} cc
            </p>
          </>
        )}
      </div>
      <div className="thumbnails" id="thumbnails">
        {carsData.map((car, index) => {
          const imagePath = `${process.env.PUBLIC_URL}${car.image}`;
          return (
            <img
              key={index}
              src={imagePath}
              alt={car.name}
              data-index={index}
              onClick={() => handleThumbnailClick(index)}
              style={{ cursor: 'pointer', margin: '5px', width: '100px' }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GalleryPage;
