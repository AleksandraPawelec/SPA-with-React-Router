import React from "react";
import { Prompt } from "react-router-dom";
import contact from "../styles/contact.css";

class ContactPage extends React.Component {
  state = {
    value: ""
  };
  handelSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handelSubmit}>
          <h3> Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość"
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Masz niewypełniony formularz. Czy chcesz przejść do innej zakładki?"
        />
      </div>
    );
  }
}

export default ContactPage;
