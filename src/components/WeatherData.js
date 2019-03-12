import React from 'react';
import { jsx, css } from '@emotion/core';

const WeatherData = props => (
    <div style={{ display: 'flex', justifyContent: 'center', }}>
        {props.city && props.country && <p style={{ display: 'flex' }}>Location: {props.city}, {props.country}</p>}
        {props.temperature && <p>Temp: {props.temperature} {'\u00b0'}F</p>}

        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);
export default WeatherData;

