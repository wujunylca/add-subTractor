import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import {IncreaseAction,Sub } from './action';
import store from './store';

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick,onhandleSub } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>+</button>
        <button onClick={onhandleSub}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

 

const  mapStateToProps= (state)=>{
    return {
        value:state.count
    }
}

const  mapDispatchToProps = (dispatch)=> {
    return {
        onIncreaseClick: () => dispatch(IncreaseAction('increase')),
        onhandleSub:() =>dispatch(Sub('sub'))
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)