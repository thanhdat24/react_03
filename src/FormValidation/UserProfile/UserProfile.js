import "./UserProfile.css";

import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form className="w-30 bg-white m-5 p-5">
            <h2 className="text-center">User Profile</h2>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input type="text" required name="firstName" />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>First Name</label>
                  <span className="text text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input type="text" name="lastName" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Last Name</label>
                  <span className="text text-danger"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input type="text" name="userName" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Username</label>
                  <span className="text text-danger"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input type="email" name="email" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Email</label>
                  <span className="text text-danger"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input type="password" required name="password" />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span className="text text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input type="password" name="passwordConfirm" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Confirm Password</label>
                  <span className="text text-danger"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button">
                  <div class="inner">
                     </div>
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
