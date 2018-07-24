import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './actions';
// import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrement()} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

// const mapDispatchToProps = (dispatch) => {
// 第一种：
// return {
//   increment: bindActionCreators(increment, dispatch),
//   decrement: bindActionCreators(decrement, dispatch)
// }
// 第二种：
//   return bindActionCreators({ increment, decrement }, dispatch);
// };

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
// 第一、二种：
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// 第三种：
export default connect(mapStateToProps, { increment, decrement })(App);