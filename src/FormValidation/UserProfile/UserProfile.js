import "./UserProfile.css";

import React, { Component } from "react";

import Swal from "sweetalert2";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };
    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
    } else newErrors[name] = "";

    if (type === "email") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(value)) {
        newErrors[name] = name + " is invalid!";
      }
    }

    if (name === "passwordConfirm") {
      if (value !== newValues["password"]) {
        newErrors[name] = name + " is invalid!";
      }
    }
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSubmit = (event) => {
    // Cản trình duyệt submit reload lại trang
    event.preventDefault();
    // Xét điều kiện khi submit
    let { values, errors } = this.state;
    // Biến xác định form hợp lệ
    let valid = true;

    let profileConent = "";
    let errorsConent = "";
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
      profileConent += `<p class="text-left"><b>${key}: </b>${values[key]}</p>`;
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorsConent += `<p class="text-left"><b class="text-danger">${key}: is invalid</b></p>`;
        valid = false;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Your profile!",
        html: errorsConent,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Your profile!",
      html: profileConent,
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form onSubmit={this.handleSubmit} className="w-30 bg-white m-5 p-5">
            <h2 className="text-center">User Profile</h2>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.firstName}
                    type="text"
                    required
                    name="firstName"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>First Name</label>
                  <span className="text text-danger">
                    {this.state.errors.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.lastName}
                    type="text"
                    name="lastName"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Last Name</label>
                  <span className="text text-danger">
                    {this.state.errors.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    value={this.state.values.userName}
                    type="text"
                    name="userName"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Username</label>
                  <span className="text text-danger">
                    {this.state.errors.userName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    value={this.state.values.email}
                    type="email"
                    name="email"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Email</label>
                  <span className="text text-danger">
                    {this.state.errors.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.password}
                    type="password"
                    required
                    name="password"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span className="text text-danger">
                    {this.state.errors.password}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.passwordConfirm}
                    type="password"
                    name="passwordConfirm"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Confirm Password</label>
                  <span className="text text-danger">
                    {this.state.errors.passwordConfirm}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button">
                  <div className="inner"></div>
                  <button>submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
