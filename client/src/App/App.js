import React, { Component } from 'react';
import $ from 'jquery';

import Report from '../Report/Report';
import DaysList from '../DaysList/DaysList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingHeading: true
    };

    this.render = this.render.bind(this);

    console.log('fullUrl', fullUrl);
  }

  componentWillMount() {
    this.pageRequest = $.get('/api/weather')
      .done((results) => {
        cons
        this.setState({
          apiResults: results.weather
        });
      })
      .fail((err) => {
        console.log('err', err);
      });
  }

  componentWillUnmount() {
    this.pageRequest.abort();
  }

  render() {
    return (
      <div className="container clearfix">
        <main>
          <header>
            <h1>Snowday</h1>
            <p>Determine the most-likely snow day for this week</p>
          </header>
          <DaysList data={this.state.apiResults.forecast} />
        </main>
        <Report resort="Vail Mountain Resort" data={this.state.apiResults.snow_report} />
    </div>
    );
  }
}

export default App;
