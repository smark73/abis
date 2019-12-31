import React, { Component } from 'react';

class MemMetrics extends Component {
  constructor(props){
    super(props);
    this.state = {
      metric: '',
      mem_metrics: ['Select', 'Active', 'MemUsed', 'MemCached', 'SwapUsed', 'SwapCached'],
    }

  }

  render() {

    return (
      <div>
        <label>Memory Metrics</label><br/>
        <select name="metric" onChange={this.props.setMetric} className="metric__ul">
        {
          this.state.mem_metrics.map((met) => {
            return (
              <option key={met} value={met} className="metric__li">{met}</option>
            )
          })
        }
        </select>
      </div>
    )
  }

}
export default MemMetrics;
