import React, {Component} from 'react';
import {useState} from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import logo1 from '../../logo1.png'
import "./style.scss";
import "../../styleapp.scss";
import intelense from '../../intelense.png'
import Axios from 'axios';
import Loginpage from '../login/Loginpage'
import {Button} from 'antd';


class Registerpagee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }
  }







  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }





  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
   
    return (
        <body>
          <form noValidate onSubmit={this.onSubmit}>
          <div className="body">
          
      <div className="base-container" ref={this.props.containerRef}>
   
        <div className="content">
        <center>
        <div className="image">
            <img src={logo1} />
          </div>
          </center>
          <div className="label">
             <center> Enter your details to get registered.</center>
              </div>
          
          <div className="form">
           
            <div className="form-group">
              <label htmlFor="email">User Name</label>
              <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <span className="red-text">{errors.name}</span>
              <label htmlFor="email">Email:</label>
              <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
              <label htmlFor="email">Password:</label>
              <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.password}</span>
              <label htmlFor="email">Confirm Password:</label>
              <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <span className="red-text">{errors.password2}</span>
           
            </div>
            
          </div>
        </div>
        <div className="footerr">
        <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btnr"
                >
          Register
          </button>
          <Link to="/loginpage"> <Button type="link">Already have an acoount?</Button></Link>
          </div>
      </div>
      </div>
  
      </form>
      </body>
    );
  }
}

Registerpagee.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Registerpagee));