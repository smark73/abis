import React, { Component } from 'react';

class NetworkMetrics extends Component {
  constructor(props){
    super(props);
    this.state = {
      metric: '',
      network_metrics: ['Select', 'eth0_txbyt', 'eth0_txerrs', 'eth0_rxbyt', 'eth0_rxerrs'],
    }

  }

  render() {

    return (
      <div>
        <label>Network Metrics</label><br/>
        <select name="metric" onChange={this.props.setMetric} className="metric__ul">
        {
          this.state.network_metrics.map((met) => {
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
export default NetworkMetrics;
