import React, { Component, Fragment } from 'react'

export default class Form extends Component {
  render() {
    return (
      <Fragment>

        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name='country' placeholder='Country' />
          <button>Get The Weather</button>
        </form>
      </Fragment>

    )
  }
}