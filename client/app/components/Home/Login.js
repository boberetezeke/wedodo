import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

import * as actions from '../../../store/loginState/actions'

class Login extends Component {

  login(evt) {
    evt.preventDefault();
    console.log("clicked");
    this.props.loginSuccess()
  }

  logout() {
    this.props.logoutSuccess()
  }

  render () {
    console.log("Login#render")
    return (
        <>
          { (this.props.loggedIn) ? (
              <>
                <div>You are logged in</div>
                <a href="#" onClick={() => this.logout()}>Logout</a>
              </>
            )
            :
            (<form>
               <div>
                 <label htmlFor="username">Username:</label>
                 <input type="text" id="username"/>
               </div>
               <div>
                 <label htmlFor="password">Password</label>
                 <input type="password" id="password"/>
               </div>
               <div>
                 <input type="submit" onClick={(evt) => this.login(evt)}/>
               </div>
             </form>)
           }
        </>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginStateReducer.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  console.log("in mapDispatchToProps")
  return {
    loginSuccess: () => dispatch(actions.loginSuccess()),
    logoutSuccess: () => dispatch(actions.logoutSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
