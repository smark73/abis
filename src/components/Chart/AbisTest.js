import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './AbisTest.css';

am4core.useTheme(am4themes_animated);


class AbisTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      device: '',
      menuDropdownOpen: false,
      testAPI: ''
    }
  };


  
  dropdownToggleMenu = () => {
    this.setState({
      menuDropdownOpen: !this.state.menuDropdownOpen
    });
  }

  changeAPI = (dev, devProc, procMetric) => {
    // let APILink = `icinga2.${dev}.services.${devProc}.check_nrpe.perfdata.${procMetric}.value`;
    // console.log(`icinga2.${dev}.services.${devProc}.check_nrpe.perfdata.${procMetric}.value`);
    // return APILink;
  }

  handleChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  updateChart= (e) => {

    // console.log(e.target.name, e.target.value);
    var device_and_process = e.target.value;

    var graph_datapoints = [];
    var id = 'chartdiv';
    // fetch("https://prosyslogic.com/devdata/render?target=aliasByNode(icinga2.logic-dev-0*.services.Linux_CPU.check_nrpe.perfdata.idle.value, 1)&from=-30d&format=json")
    
    var fetchAPI = 'https://prosyslogic.com/devdata/render?target=aliasByNode(' + device_and_process + ', 1)&from=-30d&format=json';
    // var fetchAPI = 'https://prosyslogic.com/devdata/render?target=aliasByNode(icinga2.logic-dev-01.services.Linux_CPU.check_nrpe.perfdata.idle.value, 1)&from=-30d&format=json';

    fetch(fetchAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        // console.log(json[1]['datapoints'].length);
        
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
    var graph_datapoints2 = [];
    for (var i = 0, len = graph_datapoints.length; i < len; i++) {
        if (graph_datapoints[i]['name'] === 'logic-dev-01') {
            graph_datapoints1.push({
                date: graph_datapoints[i]['date'],
                value: graph_datapoints[i]['value']
            })
        } else {
            graph_datapoints2.push({
                date: graph_datapoints[i]['date'],
                value: graph_datapoints[i]['value']
            })
        }
    }
    
    // console.log(graph_datapoints1)
    //chart.data = graph_datapoints;
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.minZoomCount = 5;
    dateAxis.groupData = true;
    dateAxis.groupCount = 500;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 95;
    valueAxis.title.text = 'CPU Idle Percent';
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.name = 'logic-dev-01';
    series.data = graph_datapoints1;
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    
    
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.name = 'logic-dev-02';
    series1.data = graph_datapoints2;
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series1;
    chart.cursor.xAxis = dateAxis;
    
    var bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}%";
    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 95){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    var range = valueAxis.createSeriesRange(series);
    range.value = 95;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;
    
    var bullet1 = series1.bullets.push(new am4charts.Bullet());
    bullet1.tooltipText = "{valueY}%";
    bullet1.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 95){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    var range1 = valueAxis.createSeriesRange(series1);
    range1.value = 95;
    range1.endValue = -1000;
    range1.contents.stroke = am4core.color("#FF0000");
    range1.contents.fill = range.contents.stroke;
    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.numberFormatter.numberFormat = "##'%'" 
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.text = "Series: [bold {color}]{name}[/]";
    chart.label = 'CPU Idle';


    });
  }

  componentDidMount() {

    var graph_datapoints = [];
    var id = 'chartdiv';

    var exampleAPI = "icinga2.logic-dev-0*.services.Linux_CPU.check_nrpe.perfdata.idle.value";
    // var idleAPI = "icinga2.logic-dev-01.services.Linux_CPU.check_nrpe.perfdata.idle.value";
    // var userAPI = "icinga2.logic-dev-01.services.Linux_CPU.check_nrpe.perfdata.user.value";

    var useAPI = exampleAPI;

    var fetchAPI = 'https://prosyslogic.com/devdata/render?target=aliasByNode(' + useAPI + ', 1)&from=-30d&format=json';


    // fetch("https://prosyslogic.com/devdata/render?target=aliasByNode(icinga2.logic-dev-0*.services.Linux_CPU.check_nrpe.perfdata.idle.value, 1)&from=-30d&format=json")
    fetch(fetchAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json[1]['datapoints'].length);
        
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
    var graph_datapoints2 = [];
    for (var i = 0, len = graph_datapoints.length; i < len; i++) {
        if (graph_datapoints[i]['name'] === 'logic-dev-01') {
            graph_datapoints1.push({
                date: graph_datapoints[i]['date'],
                value: graph_datapoints[i]['value']
            })
        } else {
            graph_datapoints2.push({
                date: graph_datapoints[i]['date'],
                value: graph_datapoints[i]['value']
            })
        }
    }
    
    // console.log(graph_datapoints1)
    //chart.data = graph_datapoints;
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.minZoomCount = 5;
    dateAxis.groupData = true;
    dateAxis.groupCount = 500;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 95;
    valueAxis.title.text = 'CPU Idle Percent';
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.name = 'logic-dev-01';
    series.data = graph_datapoints1;
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    
    
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.name = 'logic-dev-02';
    series1.data = graph_datapoints2;
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series1;
    chart.cursor.xAxis = dateAxis;
    
    var bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}%";
    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 95){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    var range = valueAxis.createSeriesRange(series);
    range.value = 95;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;
    
    var bullet1 = series1.bullets.push(new am4charts.Bullet());
    bullet1.tooltipText = "{valueY}%";
    bullet1.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 95){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    var range1 = valueAxis.createSeriesRange(series1);
    range1.value = 95;
    range1.endValue = -1000;
    range1.contents.stroke = am4core.color("#FF0000");
    range1.contents.fill = range.contents.stroke;
    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.numberFormatter.numberFormat = "##'%'" 
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.text = "Series: [bold {color}]{name}[/]";
    chart.label = 'CPU Idle';


    });



  }

  render() {

    let dev = 'logic-dev-01';
    let devProc = 'Linux_CPU';
    let procMetric = 'idle';

    return (

      <div>

        <Button name="device" value="logic-dev-01" onClick={this.handleChangeState} >Device 1</Button>    <Button name="device" value="logic-dev-02" onClick={this.handleChangeState} >Device 2</Button>

        <div id="chartdiv"></div>

        <div>
          <button name="testAPI" value={`icinga2.${dev}.services.${devProc}.check_nrpe.perfdata.${procMetric}.value`} onClick={this.updateChart}>Change API</button>
          <p>{this.state.device}</p>
        </div>
      </div>
    )
  }

}

export default AbisTest;
