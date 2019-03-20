import React from 'react';

const Form = (props) => {
    return (
      <form onSubmit={props.loadWeather}>
        <input type="text" name="city" placeholder="City Name"/>
        <input type="text" name="country" placeholder="Country Name" />
        <button> Get Weather </button>
      </form>
    )
  }

export default Form;