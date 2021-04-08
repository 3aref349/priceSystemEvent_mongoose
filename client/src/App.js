import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout/Layout';
import Backdrop from './components/Backdrop/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import MobileNavigation from './components/Navigation/MobileNavigation/MobileNavigation';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import FeedPage from './pages/Feed/Feed';
import SinglePostPage from './pages/Feed/SinglePost/SinglePost';
import LoginPage from './pages/Auth/Login';
import SignupPage from './pages/Auth/Signup';
import LoginAdminPage from './pages/Auth/LoginAdmin'
import './App.css';
import AddPRice from './pages/Feed/addPrice';
import FakeApi from './pages/apis/titlesapi/FakeApi';
import Post from './components/Reports/post'
import AddPrice from './components/price/AddPrice'
import ConfirmPrice from './components/price/ConfirmPrice'
import FormPrice from './components/price/form-price'
import StationEventLog from './components/Reports/StationEventLog'
import FusionStatus from './components/Reports/FusionStatus'
import UserForm from './components/forms/stepForm/UserForm'

import { Provider } from 'react-redux'
import store from './store'
import PriceEvent from './components/Reports/PriceEvent';
import NewPriceEvent from './components/Reports/NewPriceEvent';
import Dashboard from './components/Reports/Dashboard';
import Main from './components/formss/main'
import MasterForm from './components/SForm/test'
import Reportone from  './components/Reports/Priceevents'

class App extends Component {
  state = {
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
  
    isAdminAuth:false,
    token: null,
    userId: null,
    status:null,
    authLoading: false,
    error: null
  };



  mobileNavHandler = isOpen => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };



  



  

  errorHandler = () => {
    this.setState({ error: null });
  };

  render() {
    let routes = (
      <Switch>

               <Route
            path="/"
            exact
            render={props => (
              <Dashboard userId={this.state.userId} token={this.state.token} />
            )}
          />
     
               <Route
            path="/stepform"
            exact
            render={props => (
              <MasterForm userId={this.state.userId}  token={this.state.token} />
            )}
            
          />

<Route
            path="/confirm-price"
            exact
            render={props => (
              <ConfirmPrice userId={this.state.userId}   token={this.state.token} />
            )}
            
          />
      </Switch>
    );
  
 

 

 



    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} />
        )}
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <Layout
          header={
            <Toolbar>
              <MainNavigation
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                onLogout={this.logoutHandler}
                isAuth={this.state.isAuth}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isAuth={this.state.isAuth}
            />
          }
        />
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
