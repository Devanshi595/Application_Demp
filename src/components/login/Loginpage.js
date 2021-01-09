import React, {Component} from 'react';
import logo1 from '../../logo1.png'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./style.scss";
import BorderWrapper from 'react-border-wrapper'
import "../../styleapp.scss";
import Registerpagee from "../login/Registerpagee"



import HomePage from '../Home/HomePage';
import { Form, Input, Button,Row,Col } from 'antd';
import { Link,BrowserRouter, Route, Switch,useHistory } from "react-router-dom";
import axios from 'axios';
/* 
Login component 
- Display login form 
*/







const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = formErrors =>{
  let valid =true;
  Object.values(formErrors).forEach(val => val.length > 0 && (valid =false));
  return valid;
}
class Loginpage extends Component {
    constructor(props) 
    {
        super(props);

        
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }

//new code

componentDidMount() {
  // If logged in and user navigates to Login page, should redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/homepage");
  }
}






      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/homepage"); // push user to dashboard when they login
        }
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
    const userData = {
          email: this.state.email,
          password: this.state.password
        };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
      };     
//new code









      
// componentDidMount() {
//   this.getLogins();
// }


//       submit =  (event)=> {
//         event.preventDefault();
        
        

//         const payload = {
        
//         username: this.state.username,
//         password: this.state.password,
//         email: this.state.email,
      
       
//         }
//         console.log(payload);
        
//         axios({
//           url: '/api/loginsave',
//           method: 'POST',
//           data: payload
//         })
//         .then(()=>{
//           console.log('Login Comp Data has been sent to server')
         
          
//         })
//         window.location = '/homepage';
//      }
//      getLogins = () => {
//       axios.get('/api/login')
//       .then((response)=>{
//         const data = response.data;
//         this.setState({ logins: data});
//         console.log('Login Data has been recieved')
      
//       })
//       .catch(()=>{
//         //alert('Error retriving data')
//       })
      
//     }
//       handleSubmit = e =>{
//         e.preventDefault();
//         if(formValid(this.state.formErrors)){
//           console.log('subbmtin')
//         }
//         else{
//           console.error('form invalid')
//         }
//       }
//       handleChange = e =>{
//         e.preventDefault();
//         const { name,value } = e.target;
//        let formErrors = this.state.formErrors;
      

//        switch (name){
//          case 'username':
//          formErrors.username = value.length < 3  ? "User name should be minimum 5 chracters "
//          : "";
//          break;
//          case 'email':
//          formErrors.email = emailRegex.test(value) 
//          ? " "
//          : 'invalid email address';
//          break;
//          case 'password':
//          formErrors.password = value.length < 3  ? "Password should be of minimum 8 characters "
//          : "";
//          break;
//          default:
//          break;

//        }
//     this.setState({formErrors, [name]: value}, () => console.log(this.state));
//       }
 
      render() {
        console.log('State', this.state);
        const { errors } = this.state;
        return (
           
              <form noValidate onSubmit={this.onSubmit}>
              
               <div className="body">
               
               
              
          <div className="base-container" ref={this.props.containerRef}>
          
           
             <div className="content">

             

             
              
        <center>
        
        <div className="image">
            <img src={logo1} />
          </div>
          </center>
          <center>
          <div className="label">
              Please fill to login to your account.
              </div>
              </center>
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="user-name">Email:</label>
              <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
               

</div>
            <Row>
              <Col>
            <div className="check-box">
                 <input type="checkbox" className="check-box" name="cb"/>Remember me.
                 </div>
                 </Col>
                 <Col>
                 {/* <Link to="/resetpassword"> <Button type="link" size='small' style={{color:'white'}}> <u><b>Forgot password??.</b></u></Button></Link> */}
                 </Col>
                 </Row>
               </div>
          
              </div>

       
        <div className="footer">
       <center>
       <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
                <Link to="/register" > <Button type="link">Get Register</Button></Link>
                </center>
                </div>
           
           </div>
         
          </div>
         
     
       
         
        </form>
         
        );
      }
    }
    
    Loginpage.propTypes = {
      loginUser: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired,
      errors: PropTypes.object.isRequired
    };
    const mapStateToProps = state => ({
      auth: state.auth,
      errors: state.errors
    });
    export default connect(
      mapStateToProps,
      { loginUser }
    )(Loginpage);;