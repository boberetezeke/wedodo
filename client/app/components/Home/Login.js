import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

import * as actions from '../../../store/loginState/actions'

class Login extends Component {

  constructor(props) {
    super(props);
    console.log("Login:constructor")
    console.log(props)
    this.state = {loggedIn: props.loggedIn}
  }

  login(evt) {
    evt.preventDefault();
    console.log("clicked");
    //this.setState({loggedIn: true})
    this.props.loginSuccess()
  }

  logout() {
    //this.setState({loggedIn: false})
    this.props.logoutSuccess()
  }

  render () {
    return (
        <>
          { (this.state.loggedIn) ? (
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

Login.propTypes = {
  loggedIn: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  console.log("in mapStateToProps");
  console.log(state);
  console.log(state.loginStateReducer.loggedIn);
  console.log("in mapStateToProps: ownProps");
  console.log(ownProps);
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
//export default connect(mapStateToProps)(Login);
