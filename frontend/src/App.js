import React, {Component} from "react";
import Nav from "./components/Nav";
import Home from './components/Home'
import Enroll from './components/Enroll'
import Payment from './components/Payment'
import './styles/Nav.css'
import "./App.css";
import {
  postEnroll,
  showEnroll,
  destroyEnroll
} from './services/api-helper'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      enroll: ''
    }
  }

  addEnroll = async (firstname, lastname, phone, email, dogname, dogage, question, consent, startdate, enddate, vaccine) => {
    const newEnroll = await postEnroll({
       firstname: firstname,
       lastname: lastname,
       phone: phone,
       email: email,
       dogname: dogname,
       dogage: dogage,
       breed: breed,
       question: question,
       consent: consent,
       startdate: startdate,
       enddate: enddate,
       vaccine: vaccine
    })
     this.setState(prevState => ({
       enroll: newEnroll,
     }))
   }
 
   getEnroll = async () => {
     const enroll = await showEnroll();
     if (enroll) {
       this.setState({ enroll })
     }
   }
 
   handleChange = (e) => {
     const value = e.target.value;
     this.setState({
       ...this.state,
       [e.target.name]: value
     })
   }
 
   deleteEnroll = async (id) => {
     await destroyEnroll(id);
     this.setState(prevState => ({
       personalPost: {
         ...prevState.personalPost,
         posts: prevState.personalPost.posts.filter((post) => {
           return post.id !== id 
         })
       }
     }))
   }

  render() {
    return (
      <div class="App">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div class="nav-container">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/enrolls" render={(props) => (
            <Enroll
              addEnroll={this.addEnroll}
            />
          )}/>
          <Route exact path="/" render={(props) => (
            <Home
            />
          )}/>
           <Route exact path="/payment" render={(props) => (
            <Payment
            />
          )}/>
          <Route exact path="/show" render={(props) => (
            <Show
              getEnroll={this.getEnroll}
              enroll={this.state.enroll}
              destroyEnroll={this.destroyEnroll}
            />
          )}/>
        </Switch>
      </div>
  
    );
  }
}

export default App;

