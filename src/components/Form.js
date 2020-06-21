import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    phone: "",
    option: "",
    message: "",
    errors: true,
  };

  render() {
    const { name, phone, option, message, errors } = this.state;
    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(errors);
      if (name.length > 0 && phone.length > 8 && option && message.length > 0) {
        this.setState({
          errors: false,
        });
      }
    };

    return (
      <div className="form__wrapper">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__div">
            <label className="form__label" htmlFor="user">
              Name:
              <input
                className="form__input"
                type="text"
                id="user"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div className="form__div">
            <label className="form__label" htmlFor="user">
              Phone:
              <input
                className="form__input"
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form__div">
            <label className="form__label">
              Topic:
              <select
                className="form__select"
                value={option}
                onChange={handleChange}
                name="option"
              >
                <option value="enquiry">Enquiry</option>
                <option value="complaint">Complaint</option>
                <option value="compliment">Compliment</option>
                <option value="generalMessage">General Message</option>
              </select>
            </label>
          </div>
          <div className="form__div">
            <label className="form__label" htmlFor="user">
              Message:
              <textarea
                className="form__input"
                name="message"
                value={message}
                onChange={handleChange}
              />
            </label>
          </div>
          <input className="form__btn" type="submit" value="Send" />
        </form>
        {errors ? null : <div className="form__send" onClick={() => {
          this.setState({
            errors: true,
          })
        }}>Send</div>}
      </div>
    );
  }
}

export default Form;
