import React, { Component } from "react";

export default class Show extends Component {
  constructor() {
    super();
    this.state = {
      enroll: "",
    };
  }

  componentDidMount() {
    this.props.getEnroll()
  }

  render() {
    const enroll =
      this.props.enroll
      &&
      this.props.enroll.map((enroll, index) => {
        return (
          <div class='enroll-one'>
            <h2>{`First Name: ${enroll.firstname}`}</h2>
            <h2>{`Last Name: ${enroll.lastname}`}</h2>
            <h2>{`Phone: ${enroll.phone}`}</h2>
            <h2>{`Email: ${enroll.email}`}</h2>
            <h2>{`Child Age: ${enroll.dogage}`}</h2>
            <h2>{`Child Name: ${enroll.dogname}`}</h2>
            <h2>{`Start Date: ${enroll.startdate}`}</h2>
            <h2>{`End Date: ${enroll.enddate}`}</h2>
            <h2>{`Question: ${enroll.question}`}</h2>
            <h2>{`Consent: ${enroll.consent}`}</h2>
            <h2>{`Type of day: ${enroll.vaccine}`}</h2>
            <h2>{`Created at: ${enroll.created_at}`}</h2>
            </div>
      )
    })
    return (
      <div class='show-page'>
        <h1>Show</h1>
        {enroll}
      </div>
    );
  }
}
