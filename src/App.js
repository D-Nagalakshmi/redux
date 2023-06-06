import React from 'react';
import { connect } from 'react-redux';
import { IncAction } from './Action';
import { DecAction } from './Action';
const App = ({ local_variable, IncAction, DecAction }) => {
  return (
    <div>
      <h1>{local_variable}</h1>

      <button onClick={IncAction}>incriment</button>
      <button onClick={DecAction}>decrement</button>
    </div>
  );
};

const mapStateToProps = state => ({
  local_variable: state
});

export default connect(mapStateToProps, { IncAction, DecAction })(App);
