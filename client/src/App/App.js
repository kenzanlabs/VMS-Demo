import React, { Component } from 'react';
import $ from 'jquery';
import { selectedResort, fullUrl } from '../../../config';
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
        console.log('results', results);

        this.setState({
          loadingHeading: false
        });
      })
      .fail((err) => {
        console.log('err', err);

        this.setState({
          loadingHeading: false,
        });
      });
  }

  componentWillUnmount() {
    this.pageRequest.abort();
  }

  render() {
    // const loadingClass = classNames({
    //   loading: true,
    //   'loading-active': this.state.loadingHeading,
    //   'loading-disabled': !this.state.loadingHeading,
    // });

    return (
      <div className="container clearfix">
        <main>
          <header>
            <h1>Snowday</h1>
            <p>Determine the most-likely snow day for this week</p>
          </header>
          <DaysList/>
        </main>
        <Report resort={selectedResort} />
    </div>
    );
  }
}

export default App;
