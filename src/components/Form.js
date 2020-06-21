import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    phone: "",
    option: "",
    message: "",
    errors: {
      name: false,
      phone: false,
      option: false,
      message: false,
    }
  };
  
  render() {
    const {name, phone, option,message} = this.state;
    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
    const validation = (name,phone,option, message) => {
      if(name && name.length > 0) {
        this.setState({
          errors: {
            name: true,
          }
        })
      }
      if(option) {
        this.setState({
          errors: {
            option: true,
          }
        })
      }
      if(message && message.length > 0) {
        this.setState({
          errors: {
            message: true,
          }
        })
      }
      if(phone && phone.length > 9) {
        this.setState({
          errors: {
            message: true,
          }
        })
      }
    }
    const onSubmit = (e) => {
      e.preventDefault();
      validation(name, phone,option,message);
    }
    console.log(this.state.errors);
    return (
      <div className="form__wrapper">
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <div className="form__div">
            <label className="form__label">
              Name
              <input onChange={(e) => handleChange(e)} value={name}  name="name" className="form__input" type="text" placeholder="Jack" />
            </label>
          </div>
          <div className="form__div">
            <label className="form__label">
              Telephone number
              <input value={phone} onChange={(e) => handleChange(e)} name="phone" className="form__input" type="Telephone" placeholder="313-313-312" />
            </label>
          </div>
          <div className="form__div">
            <label className="form__label">Subject of message</label>
            <select value={option} onChange={(e) => handleChange(e)} name="option" className="form__select" id="cars">
              <option className="form__option" value="enquiry">
                Enquiry
              </option>
              <option className="form__option" value="complaint">
                Complaint
              </option>
              <option className="form__option" value="compliment">
                Compliment
              </option>
              <option  className="form__option" value="message">
                General Message
              </option>
            </select>
          </div>
          <div className="form__div">
            <label className="form__label">
              Message
              <textarea name="message" value={message} onChange={(e) => handleChange(e)} className="form__input" type="text" placeholder="Lorem Ipsum..." />
            </label>
          </div>
          <input className="form__btn" type="submit" value="Send" />
        </form>
        {this.state.errors.name && this.state.errors.phone && this.state.errors.option && this.state.errors.message}
      </div>
    );
  }
}
