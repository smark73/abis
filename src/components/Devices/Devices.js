import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Devices.css';
import CPUMetrics from '../Metrics/CPUMetrics';
import NetworkMetrics from '../Metrics/NetworkMetrics';
import MemMetrics from '../Metrics/MemMetrics';


const ShowMetricOptions = (props) => {

  if (props.serv === 'Linux_CPU') {
    return (
      <CPUMetrics 
        setMetric={props.setMetric}
      />
    );

  } else if (props.serv === 'Linux_Network') {
    return (
      <NetworkMetrics 
        setMetric={props.setMetric}
      />
    );

  } else if (props.serv === 'Linux_Memory') {
    return (
      <MemMetrics 
        setMetric={props.setMetric}
      />
    );

  } else {
    return ('');
  }
}


class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  componentDidMount() {
  }

  render() {
    
    return (

      <div className="device-options-wrap">


            <div className="device-options device-options__dev">
              <label>Your Devices</label><br/>
              <select name="device" onChange={this.props.setDevice}>
                <option value="" defaultValue>Select Device</option>
                <option value="logic-dev-01">Device 1</option>
                <option value="logic-dev-02">Device 2</option>
              </select>

            </div>

            <div className="device-options device-options__serv">
              <label>Monitor Service</label><br/>
              {
                this.props.deviceSelected
                ? (
                  <select name="serv" onChange={this.props.setService}>
                    <option value="" defaultValue>Select Service</option>
                    <option value="Linux_CPU">Linux CPU</option>
                    <option value="Linux_Network">Linux Network</option>
                    <option value="Linux_Memory">Linux Memory</option>
                  </select>
                ) : (
                  <select name="serv" disabled>
                    <option value="" defaultValue>Select Service</option>
                  </select>
                )
              }

            </div>

            <div className="device-options device-options__met">

              {
                this.props.serviceSelected
                ? (
                  <ShowMetricOptions serv={this.props.serv} serviceSelected={this.props.serviceSelected} setMetric={this.props.setMetric} />
                ) : (
                  <div>
                    <label>Metrics</label><br/>
                    <select name="metric" disabled>
                      <option value="" defaultValue>Select Service</option>
                    </select>
                  </div>
                )
              }


            </div>

            <div className="device-options device-options__btn">
            {
                this.props.deviceSelected && this.props.serviceSelected && this.props.metricSelected
                ? (
                  <Button onClick={this.props.updateChart} >Get Data</Button>
                  
                ) : (
                  <Button disabled >Waiting...</Button>
                )
            }

            </div>

      </div>

    );
  }
}

export default Devices;
