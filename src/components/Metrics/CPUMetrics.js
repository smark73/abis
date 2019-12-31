import React, { Component } from 'react';

class CPUMetrics extends Component {
  constructor(props){
    super(props);
    this.state = {
      metric: '',
      cpu_metrics: ['Select', 'idle', 'user', 'system', 'iowait', 'steal'],
    }

  }

  render() {

    return (
      <div>
        <label>CPU Metrics</label><br/>
        <select name="metric" onChange={this.props.setMetric} className="metric__ul">
        {
          this.state.cpu_metrics.map((met) => {
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
export default CPUMetrics;