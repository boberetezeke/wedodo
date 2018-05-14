import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header'
import { userActions } from '../authentication/actions/user.actions'

class StatefulHeader extends React.Component {
  onSelect() {
    this.props.logout();
  }

  render() {
    const onSelect2 = () => {this.onSelect()}
    return (<Header loggingIn={this.props.loggingIn} loggedIn={this.props.loggedIn} onSelect={onSelect2} />)
  }
}

function mapStateToProps(state) {
  return {
    loggingIn: state.auth.authentication.loggingIn,
    loggedIn:  state.auth.authentication.loggedIn,
    user:      state.auth.authentication.user
  };
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(userActions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatefulHeader);
