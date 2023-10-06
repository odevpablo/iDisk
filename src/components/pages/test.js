import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      user:"",
      password: "" 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert("Nome: " + this.state.username +
    "\nUser: " +
    this.state.user +
    "\nSenha: " + this.state.password );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form id="cadastro" onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            User:
          <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" id="enviar" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default NameForm;
