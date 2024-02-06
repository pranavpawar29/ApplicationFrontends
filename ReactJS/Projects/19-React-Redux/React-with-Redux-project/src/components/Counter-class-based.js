import { Component } from 'react';
import classes from './Counter.module.css';
import { connect } from 'react-redux';

class Counter extends Component {

  handleIncrement() {
    this.props.increment();
  }
  handleDecrement() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.handleIncrement.bind()}>Increment</button>
          <button onClick={this.handleDecrement.bind()}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind()}>Toggle Counter</button>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch){
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
