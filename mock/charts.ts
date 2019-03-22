import Mock from 'mockjs'

function mockData() {
    return Mock.mock({
        'data|70-80': [
            {
                'fromNowOn|+1': 1,
                'date': function () {
                    const now = new Date()
                    now.setTime(Date.now() - this.fromNowOn * 24 * 60 * 60 * 1000)
                    const year = now.getFullYear()
                    const month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
                    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
                    return year + '-' + month + '-' + day
                },
                'uv|40-100': 100,
                'pv': function () {
                    return this.uv + Math.random() * 50 >> 0
                }
            }
        ]
    })
}

export default {
    '/api/mock_chart_data': mockData()
}
