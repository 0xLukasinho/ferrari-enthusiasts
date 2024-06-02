import React, { useState, useEffect } from 'react';
import '../styles.css';

function SuperTrumpPage() {
  const [carsData, setCarsData] = useState([]);
  const [userCar, setUserCar] = useState(null);
  const [computerCar, setComputerCar] = useState(null);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [gameResult, setGameResult] = useState('');
  const [computerCarRevealed, setComputerCarRevealed] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ferrari_data.json`)
      .then(response => response.json())
      .then(data => {
        setCarsData(data);
        startGame(data);
      });
  }, []);

  const getRandomCar = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  const startGame = (data) => {
    let newUserCar, newComputerCar;
    do {
      newUserCar = getRandomCar(data);
      newComputerCar = getRandomCar(data);
    } while (newUserCar.id === newComputerCar.id);

    setUserCar(newUserCar);
    setComputerCar(newComputerCar);
    setComputerCarRevealed(false);
    setGameResult('');
  };

  const playTurn = (attribute) => {
    let userValue = userCar[attribute];
    let computerValue = computerCar[attribute];
    let userWins;

    if (attribute === 'acceleration') {
      userWins = userValue < computerValue;
    } else {
      userWins = userValue > computerValue;
    }

    let resultMessage;
    if (userWins) {
      setPlayerPoints(playerPoints + 1);
      resultMessage = `You win! Your ${attribute} (${userValue}) beats computer's ${attribute} (${computerValue})`;
    } else if (userValue === computerValue) {
      resultMessage = `It's a draw! Both have the same ${attribute} (${userValue})`;
    } else {
      setComputerPoints(computerPoints + 1);
      resultMessage = `You lose! Your ${attribute} (${userValue}) is less than computer's ${attribute} (${computerValue})`;
    }

    setGameResult(resultMessage);
    setComputerCarRevealed(true);
  };

  const resetPoints = () => {
    setPlayerPoints(0);
    setComputerPoints(0);
    setGameResult('');
    startGame(carsData);
  };

  return (
    <div className="container my-4 super-trump">
      <h1 className="my-4 text-center">Ferrari Super Trump Game</h1>
      <div className="d-flex justify-content-around mb-4">
        <div id="userCard" className="card">
          <img id="userCarImg" className="card-img-top" src={userCar ? `${process.env.PUBLIC_URL}${userCar.image}` : ''} alt="User Car" />
          <div className="card-body">
            <h5 id="userCarTitle" className="card-title">{userCar?.name}</h5>
            <ul id="userCarText" className="card-text">
              <li>Year: {userCar?.year}</li>
              <li>Top Speed: {userCar?.topSpeed} km/h</li>
              <li>Horsepower: {userCar?.horsepower} hp</li>
              <li>Acceleration: 0-100 km/h in {userCar?.acceleration} seconds</li>
              <li>Engine Displacement: {userCar?.cc} cc</li>
            </ul>
          </div>
        </div>
        <div id="computerCard" className="card">
          <img id="computerCarImg" className="card-img-top" src={computerCarRevealed ? `${process.env.PUBLIC_URL}${computerCar.image}` : `${process.env.PUBLIC_URL}/media/dummy-photo.jpg`} alt="Computer Car" />
          <div className="card-body">
            <h5 id="computerCarTitle" className="card-title">{computerCarRevealed ? computerCar?.name : '???'}</h5>
            <ul id="computerCarText" className="card-text">
              <li>Year: {computerCarRevealed ? computerCar?.year : '???'}</li>
              <li>Top Speed: {computerCarRevealed ? computerCar?.topSpeed : '???'} km/h</li>
              <li>Horsepower: {computerCarRevealed ? computerCar?.horsepower : '???'} hp</li>
              <li>Acceleration: {computerCarRevealed ? `0-100 km/h in ${computerCar?.acceleration} seconds` : '??? seconds'}</li>
              <li>Engine Displacement: {computerCarRevealed ? computerCar?.cc : '???'} cc</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="attributeButtons" className="text-center">
        <button className="btn btn-danger mx-2" onClick={() => playTurn('topSpeed')}>Top Speed</button>
        <button className="btn btn-danger mx-2" onClick={() => playTurn('horsepower')}>Horsepower</button>
        <button className="btn btn-danger mx-2" onClick={() => playTurn('acceleration')}>Acceleration</button>
        <button className="btn btn-danger mx-2" onClick={() => playTurn('cc')}>Engine Displacement</button>
      </div>
      {gameResult && (
        <div id="gameResult" className="alert alert-danger mt-4">{gameResult}</div>
      )}
      <div className="d-flex justify-content-center mt-4">
        <button id="nextButton" className="btn btn-primary" onClick={() => startGame(carsData)}>Next</button>
      </div>
      <div className="text-center mt-4">
        <p>Player Points: <span id="playerPoints">{playerPoints}</span> | Computer Points: <span id="computerPoints">{computerPoints}</span></p>
        <button className="btn btn-warning" onClick={resetPoints}>Reset Points</button>
      </div>
    </div>
  );
}

export default SuperTrumpPage;
