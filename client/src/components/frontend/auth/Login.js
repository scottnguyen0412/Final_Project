import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/frontend/css/login-signup.css";
import login from "../../../assets/frontend/img/travel.svg";
function Login() {
  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-at"></i>
                {/* input email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value=""
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value=""
                />
              </div>
              <button type="submit" className="btn solid mt-3">
                Login
              </button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link to="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Create New Account ?</h3>
            <p>Join us for safe travels</p>
            <Link to="" className="btn transparent" id="sign-up-btn">
              Sign up
            </Link>
          </div>
          <img src={login} className="image" alt="Register here" />
        </div>
      </div>
    </div>
  );
}

export default Login;
