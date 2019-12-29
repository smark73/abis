import React from 'react';
import './Chart.css';
import AbisTest from './AbisTest';


const Chart = (props) => {

  return (

    <div className="chart">

      <div className="chart__hdr-wrap">
        <div className="chart__hdr">
          <span className="chart__hdr-hdr">Chart</span>
        </div>

      </div>

      <div className="chart__chart">
        <AbisTest />
      </div>

    </div>

  );
}

export default Chart;
