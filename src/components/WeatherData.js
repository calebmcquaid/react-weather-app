import React from "react";
import { jsx, css } from "@emotion/core";

const WeatherData = props => (
  <div style={{ display: "flex" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {props.city && props.country && (
        <h2 style={{ display: "flex" }}>
          {props.city}, {props.country}
        </h2>
      )}
      {props.temperature && (
        <p>
          Temp: {props.temperature} {"\u00b0"}F
        </p>
      )}
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.description && <p>Description: {props.description}</p>}
    </div>
    <div style={{ display: "flex", alignSelf: "flex-end" }}>
      {props.icon && <img style={{ width: 60, height: 60 }} src={props.icon} />}
      {props.error && <p>{props.error}</p>}
    </div>
  </div>
);
export default WeatherData;
