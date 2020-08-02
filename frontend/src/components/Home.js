import React, { Component } from 'react'
import Dog from '../images/IMG_0541 (2).JPG'
import artemie from '../images/MTenn.JPG'
import Marissa from '../images/56859254072__D0AB336A-94B5-4C39-A7FA-813540F25E2D.JPG'

export default class Home extends Component {
  render() {
    return (
      <div>
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
          <h1 class='sub-title'>We Pickup & Drop-off:</h1>
          <h1>-</h1>
          <h2>7 days a week</h2>
            <h2>9am - 5pm</h2>
            <h4 class='blurb'>*If alternative times need to be scheduled let us know!</h4>
            </div>
        </div>
        <div class="third" id='location'>
          <h1>Where Are We?</h1>
          <h1>-</h1>
          <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.4947619732498!2d-73.9951001850894!3d40.66306634854562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ae5db7de327%3A0x14762ef6036e8691!2s219%2019th%20St%2C%20Brooklyn%2C%20NY%2011232!5e0!3m2!1sen!2sus!4v1596047870580!5m2!1sen!2sus" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
         
        </div>
        <div class='pricing' id='pricing'>
          <h1>Pricing:</h1>
          <h1>-</h1>
          <h2> $80/night per dog</h2>
          <h2> $350/week per dog</h2>
          <h2>Pick up and drop off included!</h2>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our Sitters</h1>
          <h1>-</h1>
          <h2>Marissa Cole</h2>
          <img class="profile-img" src={Marissa} />
          <h3>Dog Mom</h3>
          <h2>Artemie Amari</h2>
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
        <div class='bring' id='bring'>
          <h1>What to Know?</h1>
          <h1>-</h1>
          <h3>We feed the pups twice a day.</h3>
          <h3>We take them on a minimum of 2 walks</h3>
          <h3>Dogs will have access to large backyard during the day</h3>
          <h3>Sleeping will happen inside and we will provide a dog bed</h3>
        </div>
      </div>
    )
  }
}
