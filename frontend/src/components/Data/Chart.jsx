import React, { Component } from 'react';
import ApexCharts from 'react-apexcharts'

import "../../styles/css/chart.css"

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -120,
                        endAngle: 120,
                        track: {
                            strokeWidth: '95%'
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                show: false
                            }
                        }
                    },
                },
                colors: [props.color]
            }
        };
    }

    render() {
        var data = [this.props.value]

        return (
            <div className="chart">
                <ApexCharts options={this.state.options} series={data} type="radialBar" className="chart-div" height="300px" />
                <div className="chart-data">
                    <p className="chart-value">{this.props.value}%</p>
                    <p className="chart-name">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default Chart;