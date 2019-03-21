import * as React from 'react'
import * as Echarts from 'echarts'
import styles from './index.less'

export default class archeryHitRateHeatMap extends React.Component<any, any> {
    chartDom: HTMLDivElement
    graph: Echarts
    
    componentDidMount() {
        this.graph = Echarts.init(this.chartDom)
        function renderItem(params, api) {
            var values = [api.value(0), api.value(1)];
            return {
                type: 'polygon',
                shape: {
                    points: [
                        ...values[0]
                    ],
                    smooth: 'spline',
                    smoothConstraint: false
                },
                style: api.style({
                    fill: api.visual('color')
                })
            };
        }
        
        var angleArr = [36, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
        var radiusArr = ['1环', '2环', '3环', '4环', '5环', '6环', '7环', '8环', '9环', '10环'];
        this.graph.setOption({
            grid: {
                left: 200,
                right: 0,
                top: 0,
                bottom: 0
            },
            polar: {
                radius: '100%'
            },
            visualMap: {
                type: 'piecewise',
                pieces: [
                    {
                        lte: 10,
                        color: '#65a573'
                    },
                    {
                        gt: 10,
                        lte: 50,
                        color: '#466e8a'
                    },
                    {
                        gt: 50,
                        lte: 100,
                        color: '#943938'
                    }
                ]
            },
            graphic: [
                {
                    type: 'ring',
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#ddd'
                    },
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: 100,
                        r0: 60
                    }
                },
                {
                    type: 'ring',
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#ddd'
                    },
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: 160,
                        r0: 130
                    }
                },
                {
                    type: 'ring',
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#ddd'
                    },
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: 220,
                        r0: 190
                    }
                }
            ],
            angleAxis: {
                type: 'category',
                data: angleArr,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                data: radiusArr,
                z: 100
            },
            series: [{
                name: 'Punch Card',
                type: 'custom',
                coordinateSystem: 'polar',
                itemStyle: {
                    normal: {
                        color: '#d14a61'
                    }
                },
                renderItem: renderItem,
                data: [
                    [[[40, 70], [230, 70], [200, 270], [30, 220]], 10],
                    [[[70, 133], [140, 100], [180, 200], [110, 220]], 40],
                    [[[150, 150], [150, 130], [100, 170], [130, 180]], 60],
                    
                ]
            }]
        })

        console.log(this.graph.getOption())
    }

    render() {
        return (
            <main>
                <h1>archery hit rate heat map</h1>
                <div 
                    ref={(e) => { this.chartDom = e }}
                    className={styles['charts-wrapper']} 
                />
            </main>
        )
    }
}
