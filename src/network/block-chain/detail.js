import { request } from '../core'

const api = {}

// 查询详情
api.queryDetail = (params) => request({
    url: '/detail',
    method: 'POST',
    data: params,
})

export default api
