import React, { Component } from 'react';
import './Report.css';

class Report extends Component {
  render() {
    return (
      <aside>
        <h2>Location Snow Report</h2>
        <div className="report-depths">lower_snow_depth - upper_snow_depth inches</div>
        <div className="report-conditions">conditions as of report_date</div>
        <div className="report-date">Last snowed: last_snow_date</div>
      </aside>
    );
  }
}

export default Report;
