import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const LoginForm = () => {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <img
          alt="logo"
          src="https://img.etimg.com/thumb/msid-59738992,width-480,height-360,imgsize-25499,resizemode-4/amazon.jpg"
        />
      </div>
      <div className={styles.main}>
        <h2>Sign In</h2>
        <div className={styles.form}>
          <div className={styles.input}>
            <label>Enter your email</label>
            <input type="text" />
          </div>
          <div className={styles.input}>
            <label>Enter your Password </label>
            <input type="password" />
          </div>

          <div className={styles.login}>
            <button type="button">Login</button>
          </div>
        </div>
      </div>
      <div className={styles.register}>
        <Link to="/RegistrationForm" className="chLink">
          <button>Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
