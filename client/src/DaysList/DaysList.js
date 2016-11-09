import React, { Component } from 'react';
import './DaysList.css';

class DaysList extends Component {
  render() {
    return (
      <ul className="list-days">
        <li className="clearfix">
          <h2>Date</h2>
          <div className="day-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
          <div className="day-info night-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
        </li>
        <li className="clearfix winner">
          <h2>Date</h2>
          <div className="day-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
          <div className="day-info night-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
        </li>
        <li className="clearfix">
          <h2>Date</h2>
          <div className="day-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
          <div className="day-info night-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
        </li>
        <li className="clearfix">
          <h2>Date</h2>
          <div className="day-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
          <div className="day-info night-info">
            <div className="weather-icon">icon</div>
            <div className="weather-temps">temp</div>
            <div className="weather-info">weather_text</div>
            <div className="weather-wind">wind_info</div>
          </div>
        </li>
      </ul>
    );
  }
}

export default DaysList;