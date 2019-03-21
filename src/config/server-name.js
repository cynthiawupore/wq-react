/**
 *
 * 功能说明：    服务器域名 生产 | 测试
 *
 * */

import { isProd } from '../env/index'

const serverName = isProd ? '' : '';

export {
    serverName
}
