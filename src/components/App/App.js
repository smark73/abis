import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Devices from '../Devices/Devices';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as ROUTES from '../../constants/routes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      device: '',
      serv: '',
      metric: '',
      deviceSelected: false,
      serviceSelected: false,
      metricSelected: false
    }
  };

  handleChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      deviceSelected: this.state.device === '' ? false : true
    });
  }

  setDevice = (e) => {
    this.setState({
      device: e.target.value,
      deviceSelected: true
    })
  }
  setService = (e) => {
    this.setState({
      serv: e.target.value,
      serviceSelected: true
    })
  }
  setMetric = (e) => {
    this.setState({
      metric: e.target.value,
      metricSelected: true
    })
  }

  updateChart = () => {
    //dont fetch if not all options selected
    if(this.state.device === '' || this.state.serv === '' || this.state.metric === ''){
      console.log('fail');
      return;
    }
    this.fetchChart(this.state.device, this.state.serv, this.state.metric);
  }

  fetchChart = (dev, serv, met) => {

    let fetchAPI = `https://prosyslogic.com/devdata/render?target=aliasByNode(icinga2.${dev}.services.${serv}.check_nrpe.perfdata.${met}.value, 1)&from=-30d&format=json`;

    let graph_datapoints = [];
    let id = 'chartdiv';
    // fetch("https://prosyslogic.com/devdata/render?target=aliasByNode(icinga2.logic-dev-0*.services.Linux_CPU.check_nrpe.perfdata.idle.value, 1)&from=-30d&format=json")
    // var fetchAPI = 'https://prosyslogic.com/devdata/render?target=aliasByNode(' + device_and_serv + ', 1)&from=-30d&format=json';
    // var fetchAPI = 'https://prosyslogic.com/devdata/render?target=aliasByNode(icinga2.logic-dev-01.services.Linux_CPU.check_nrpe.perfdata.idle.value, 1)&from=-30d&format=json';

    fetch(fetchAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        for (var target = 0, target_len = json.length; target < target_len; target++) {
          for (var i = 0, len = json[target]['datapoints'].length; i < len; i++) {
            var date = new Date(json[target]['datapoints'][i][1] * 1000);
            var value = json[target]['datapoints'][i][0];
            var name = json[target]['target'];
            graph_datapoints.push({
              date: date,
              value: value,
              name: name
            })
          }
        }

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        var chart = am4core.create(id, am4charts.XYChart);
        var graph_datapoints1 = [];
        // var graph_datapoints2 = [];
        for (var i = 0, len = graph_datapoints.length; i < len; i++) {
          if (graph_datapoints[i]['name'] === dev) {
            graph_datapoints1.push({
              date: graph_datapoints[i]['date'],
              value: graph_datapoints[i]['value']
            })
          }
          // } else {
          //   graph_datapoints2.push({
          //     date: graph_datapoints[i]['date'],
          //     value: graph_datapoints[i]['value']
          //   })
          // }
        }

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.minZoomCount = 5;
        dateAxis.groupData = true;
        dateAxis.groupCount = 500;
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.baseValue = 95;
        valueAxis.title.text = serv;

        var series = chart.series.push(new am4charts.LineSeries());
        series.name = dev;
        series.data = graph_datapoints1;
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";


        // var series1 = chart.series.push(new am4charts.LineSeries());
        // series1.name = 'logic-dev-02';
        // series1.data = graph_datapoints2;
        // series1.dataFields.valueY = "value";
        // series1.dataFields.dateX = "date";

        chart.cursor = new am4charts.XYCursor();
        // chart.cursor.snapToSeries = series1;
        chart.cursor.xAxis = dateAxis;

        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.tooltipText = "{valueY}%";
        bullet.adapter.add("fill", function (fill, target) {
          if (target.dataItem.valueY < 95) {
            return am4core.color("#FF0000");
          }
          return fill;
        })
        var range = valueAxis.createSeriesRange(series);
        range.value = 95;
        range.endValue = -1000;
        range.contents.stroke = am4core.color("#FF0000");
        range.contents.fill = range.contents.stroke;

        // var bullet1 = series1.bullets.push(new am4charts.Bullet());
        // bullet1.tooltipText = "{valueY}%";
        // bullet1.adapter.add("fill", function (fill, target) {
        //   if (target.dataItem.valueY < 95) {
        //     return am4core.color("#FF0000");
        //   }
        //   return fill;
        // })
        // var range1 = valueAxis.createSeriesRange(series1);
        // range1.value = 95;
        // range1.endValue = -1000;
        // range1.contents.stroke = am4core.color("#FF0000");
        // range1.contents.fill = range.contents.stroke;
        
        //chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();
        chart.numberFormatter.numberFormat = "##'%'"
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.text = "Device: [bold {color}]{name}[/]";
        chart.label = met;


      });
  }


  componentDidMount() { }

  render() {

    return (

      <div className="app">

        <header className="app-hdr">

          <div className="app-hdr__grid">

            <div className="app-hdr__grid-item">
              <span className="app-hdr__name">ABIS Solutions</span>
            </div>

            <div className="app-hdr__grid-item">
              <nav className="app-hdr__nav">
                <Link className="app-hdr__links" to={ROUTES.DEVICES}>Your Devices</Link>
                <Link className="app-hdr__links" to={ROUTES.CONTACT}>Contact Us</Link>
              </nav>
            </div>

          </div>

        </header>

        <div className="app-body">


              <Switch>
                <Route
                  exact path={ROUTES.DEVICES}
                  render={(props) => (
                    <div>

                      <Devices
                      updateChart={this.updateChart}
                      setDevice={this.setDevice}
                      setService={this.setService}
                      setMetric={this.setMetric}
                      device={this.state.device}
                      serv={this.state.serv}
                      metric={this.state.metric}
                      deviceSelected={this.state.deviceSelected}
                      serviceSelected={this.state.serviceSelected}
                      metricSelected={this.state.metricSelected}
                    />

                    <div id="chartdiv"></div>

                  </div>
                  )}
                />

                <Route
                  exact path={ROUTES.CONTACT}
                  render={(props) => (
                    <Contact
                      {...props}
                    />
                  )}
                />
                </Switch>

              
        </div>

        <Footer />

      </div>

    );

  }

}

export default App;
