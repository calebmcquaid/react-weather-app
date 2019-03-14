import React from 'react';
import {jsx, css} from '@emotion/core';

const Form = props => (
    <form onSubmit={props.getWeather} style={{ display: 'flex', flexDirection: 'column' }}>
        <input style={{ padding: 5, fontSize: 15, border: 0, borderBottom: '1px solid red', marginBottom: 10 }} type='text' name='city' placeholder='City...'></input>
        <input style={{ padding: 5, fontSize: 15, border: 0, borderBottom: '1px solid red', marginBottom: 10 }} type='text' name='country' placeholder='Country...'></input>
        <button type='submit'>Get Weather</button>
    </form>
)
export default Form;