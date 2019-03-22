import * as React from 'react'
import echarts from 'echarts'
import _isEqual from 'lodash/isEqual'
import styles from './index.less'

interface IProps {
    title?: string,
    xAxis?: any,
    yAxis?: any,
    dataZoom?: any,
    series?: any,
}

export default class BaseEChart extends React.Component<IProps, any> {
    chartDom: HTMLDivElement
    graph: echarts

    componentDidMount() {
        this.graph = echarts.init(this.chartDom)
        this._update()
    }

    componentDidUpdate(prevProps) {
        if (!_isEqual(prevProps, this.props)) {
            this._update()
        }
    }

    _update() {
        if (this.graph) {
            this.graph.setOption({
                ...this.props
            })
        }
    }

    render() {
        return (
            <div 
                className={styles.chartArea}
                ref={ele => { this.chartDom = ele }} 
            />
        )
    }
}
