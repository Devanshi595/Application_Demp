import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store  from './store';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route,Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Loginpage from './components/login/Loginpage';
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Board/Dashboardpage';
import Inbox from './components/Dashboard/Inbox';
import CompMap from './components/Map/CompMap';
import Reports from './components/Reports/Reports';
import UserMaster from './components/Usermaster/UserMaster';
import IncidentLogged from './components/IncidentLogged/IncidentLogged';
import Assetonboard from './components/AssetOnbord/Assetonboard';
import ActivityCalender from './components/CalenderActivity/ActivityCalender';
import TrainAssets from './components/Dashboard/TrainAssets';
import Help from './components/Dashboard/Help';
import ModalComp from './components/Board/ModalComp';
import DisplayVendor from './components/Board/DisplayVendor';
import DisplayComplaint from './components/Board/DisplayComplaint';
import Registerpagee from './components/login/Registerpagee';
import Reset from './components/login/ResetPasswordPage';
import ResetPasswordPage from './components/login/ResetPasswordPage';


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./loginpage";
  }
}











const rootElement = document.getElementById("root");






    ReactDOM.render(



      
      <Provider store={store}>
      <BrowserRouter>
      
      
       <Switch>
       <Route exact path="/loginpage" exact component={Loginpage} />
       <Route exact path="/register" component={Registerpagee} />
        <Route exact path="/" component={App} />
        <PrivateRoute exact path="/homepage"  component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/map" component={CompMap} />
        <Route path="/reports" component={Reports} />
        <Route path="/usermaster" component={UserMaster} />
        <Route path="/incidentlogged" component={IncidentLogged} />
        <Route path="/assetonboard" component={Assetonboard} />
        <Route path="/activitycalender" component={ActivityCalender} />
        <Route path="/trainassets" component={TrainAssets} />
        <Route path="/help" component={Help} />
        <Route path="/modalcomp" component={ModalComp} />
        <Route path="/displayvendor" component={DisplayVendor} />
        <Route path="/displaycomp" component={DisplayComplaint} />
        <Route path="/resetpassword" component={ResetPasswordPage} />
        
       
      </Switch>
     
      </BrowserRouter>
      </Provider>,
      
      rootElement
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
