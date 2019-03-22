import * as React from 'react'
import Echarts from 'echarts'
import { mockChartData } from '@/services'
import styles from './index.less'

import BaseEChart from '@/components/BaseEChart'

export default class SiteMonitorBarChart extends React.PureComponent<any, any> {
    state = {
        chartOptions: {}
    }

    componentDidMount() {
        mockChartData()
            .then(({
                data: {
                    data
                }
            }) => {
                const dateData = data.map(d => d.date)
                const pvData = data.map(d => d.pv)
                const uvData = data.map(d => d.uv)

                this.setState({
                    chartOptions: {
                        title: {
                            text: '站点监控图'
                        },
                        xAxis: {
                            data: dateData,
                            type: 'category',
                            axisLabel: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            z: 10
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        dataZoom: [
                            {
                                type: 'inside'
                            }
                        ],
                        series: [
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#9cf8d1',
                                    }
                                },
                                barGap: '-100%',
                                barCategoryGap: '0',
                                data: pvData,
                                animation: false
                            },
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#725cfc',

                                    }
                                },
                                barCategoryGap: '1', // 柱间距离
                                data: uvData
                            }
                        ]

                    }
                })
            })
    }

    render() {
        return (
            <main>
                <h1>site monitor bar chart</h1>
                <BaseEChart {...this.state.chartOptions} />
            </main>
        )
    }
}
