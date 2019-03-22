import axios from 'axios'

export function mockChartData() {
    return axios.get('/api/mock_chart_data')
}
