import { request } from '../core'

const api = {}

// 查询列表
api.queryList = (params) => request({
    url: '/getList',
    method: 'POST',
    data: params,
})

export default api
