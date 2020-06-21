import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="form__wrapper">
        <form className="form">
          <div className="form__div">
            <label className="form__label">Name</label>
            <input className="form__input" type="text" />
          </div>
          <div className="form__div">
            <label className="form__label">Telephone number</label>
            <input className="form__input" type="Telephone" />
          </div>
          <div className="form__div">
            <label className="form__label">Subject of message</label>
            <select id="cars">
              <option value="enquiry">Enquiry</option>
              <option value="complaint">Complaint</option>
              <option value="compliment">Compliment</option>
              <option value="message">General Message</option>
            </select>
          </div>
          <div className="form__div">
            <label className="form__label">Message</label>
            <input className="form__input" type="text" />
          </div>
          <input className="form__btn" type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
