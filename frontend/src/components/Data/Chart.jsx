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
                            background: "#e7e7e7",
                            strokeWidth: '100%'
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                }
            },
        };
    }

    render() {
        var data = [this.props.value]

        return (
            <div className="chart">
                <ApexCharts options={this.state.options} series={data} type="radialBar" className="chart-div" />
                <div className="chart-data">
                    <p className="chart-value">{this.props.value}%</p>
                    <p className="chart-name">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default Chart;