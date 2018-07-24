import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as types from './actions';
import { bindActionCreators } from 'redux';
import User from './components/User';
import Reminder from './components/Reminder';

function testable(target) {
  target.isTestable = true;
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch);
};

@testable
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="container">
        {/* <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrement()} className="btn btn-danger my-2">Decrease</button>
        </p>
        <User /> */}
        <Reminder />
      </div>
    );
  }
}

export default App;