/**
 *
 * 功能说明：    接口返回数据预处理
 *
 * */

import { apiCustomCode } from '../config/index'
import { message } from 'antd';

const resDataPretreat = (res, func) => {
    if(res.respCode){
        if(res.respCode === apiCustomCode.SUCCESS){
            if (typeof(func) === 'function') {
                func(res.content);
            }
        }else if(res.respCode === apiCustomCode.FAIL){
            message.error('请求失败');

        }else if(res.respCode === apiCustomCode.PROCESSING){
            message.error('请求处理中');

        }else if(res.respCode === apiCustomCode.ARGUMENT_EXCEPTION){
            message.error('请求参数错误');

        }else if(res.respCode === apiCustomCode.UNKNOWN_EORROR){
            message.error('接口未知错误');

        }else if(res.respCode === apiCustomCode.SYSTEM_EORROR){
            message.error('服务端系统错误');

        }else{
            message.error(res.respMsg);
        }
    }else{
        message.error('返回参数code错误');
    }
}

export {
    resDataPretreat
}
