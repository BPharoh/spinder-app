import React, { useState } from "react";
import MatchCard from 'react-tinder-card';
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {

const characters = [
  {
    name: 'Richard Hendricks',
    url: 'https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg'
  },
  {
    name: 'Monica Hall',
    url: 'https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg'
  }
]


const [lastDirection, setLastDirection] = useState()

const swiped = (direction, nameToDelete) => {
  console.log('removing: ' + nameToDelete)
  setLastDirection(direction)
}

const outOfFrame = (name) => {
  console.log(name + ' left the screen!')
}
  
  return (
    <div className="dashboardContainer">
    <div className="dashboardHeader">
      <h1>Dashboard </h1>
      <h2>Name : </h2>
      <h2>Email : </h2>
      <button>Log out</button> 
    </div>
    <div className="dashboard" >
      <ChatContainer/> 
      <div className="swipe-container">
        <div className="card-container">
        {characters.map((character) =>
          <MatchCard 
          className='swipe' 
          key={character.name} onSwipe={(dir) => swiped(dir, character.name)} 
          onCardLeftScreen={() => outOfFrame(character.name)}>
          <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
          className='card'>
              <h3>{character.name}</h3>
            </div>
          </MatchCard>
        )}
        <div className="swipe-info">
          {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
       </div>
       </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
