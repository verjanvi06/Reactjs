import React, { Component } from "react";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";

export default class RegistrationForm extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.logo}>
          <img
            alt="logo"
            src="https://img.etimg.com/thumb/msid-59738992,width-480,height-360,imgsize-25499,resizemode-4/amazon.jpg"
          />
        </div>

        <div className={styles.main}>
          <h2>RegistrationForm</h2>
          <div className={styles.form}>
            <div className={styles.input}>
              <label>Enter your First Name</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Enter your Last Name </label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Enter your email</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Enter your Password </label>
              <input type="password" />
            </div>

            <div className={styles.input}>
              <label>Enter your Mobile Number</label>
              <input type="text" />
            </div>

            <div className={styles.sign}>
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>

        <div className={styles.login}>
          <Link to="/" className="chLink">
            <button>Back to login </button>
          </Link>
        </div>
      </div>
    );
  }
}


