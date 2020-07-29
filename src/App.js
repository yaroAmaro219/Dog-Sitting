import React, {Component} from "react";
import Dog from './images/IMG_0541 (2).JPG'
import artemie from './images/MTenn.JPG'
import Nav from "./components/Nav";
import './styles/Nav.css'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  render() {
    return (
      <div class="App">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div class="nav-container">
          <Nav />
        </div>
        <div class='first'>
          <div class='left-container'>
            <img src={Dog} class="home-img"  >
          </img>
        </div>
          <div class='right-container'>
            <div class='text-container'>
              <div class='title-container'>
                <h1 class='title'>Dog sitting & boarding</h1>
                </div>
              <p class='sub-title'>A loving and friendly environment for pups</p>
              {/* <p class='sub-title'>Call 357-400-6623</p> */}
              <div class='enroll-button-container'>
                <p class='enroll-button'><a class='enroll-home' href='#enroll'>Get In Touch</a></p>
                {/* <h2 class='enroll-sub'>Spots are still available!</h2> */}
            </div>
            </div>
          
          </div>
        </div>
        <div class='second' id='dates'>
          <div class='second-text-container'>
          <h1 class='sub-title'>Pickup - Drop-off:</h1>
          <h1>-</h1>
          <h2>7 days a week</h2>
            <h2>9am - 5pm</h2>
            <h4>If alternative times need to be scheduled let us know!</h4>
            </div>
        </div>
        <div class="third" id='location'>
          <h1>Where Are We?</h1>
          <h1>-</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.4947619732498!2d-73.9951001850894!3d40.66306634854562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ae5db7de327%3A0x14762ef6036e8691!2s219%2019th%20St%2C%20Brooklyn%2C%20NY%2011232!5e0!3m2!1sen!2sus!4v1596047870580!5m2!1sen!2sus" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
         
        </div>
        <div class='pricing' id='pricing'>
          <h1>Pricing:</h1>
          <h1>-</h1>
          <h2> $80/night per dog</h2>
          <h2>Pick up and drop off included!</h2>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our Sitters</h1>
          <h1>-</h1>
          <h2>Marissa Cole</h2>
          <h3>Dog Mom</h3>
          <h2>Artemie Amari</h2>
          {/* <p class='blurb'>​
            Artemie is one of the top ranked Tennis Pros in the U.S.A. Artemie has a passion for dogs and is the Dad of Sunny, a blue heeler</p> */}
          <img class="profile-img" src={artemie} />
        <h3>Dog Dad</h3>
        </div>
        <div class="enroll" id='enroll'>
          <h1>Ready to Start?</h1>
          <h1>-</h1>
          <h3>Call this number to enroll: </h3>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
          <h3>or email:</h3>
          <h3><a class='phone' href="mailto:nycdogsitting@gmail.com">NYCdogsitting@gmail.com</a></h3>
        </div>
        {/* <div class='bring' id='bring'>
          <h1>What to Bring?</h1>
          <h1>-</h1>
          <h3>A Racket! We will have extras for those that need.</h3>
          <h3>Lunch, for those doing full sessions.</h3>
          <h3>A water bottle!</h3>
        </div> */}
      </div>
  
    );
  }
}

export default App;

