import axios from 'axios'
import { serverName, apiCustomCode, apiPrefix } from '../../config'
import { getToken } from '../../untils'

const request = async ({url, method, params, data}) =>  new Promise(function (resolve, reject) {
    axios({
        headers: {
            token: getToken()
        },
        url: serverName + apiPrefix + url,
        method: method,
        params: params,
        data: data ? data : {},
    }).then((res)=>{
        if(res.status === 200){
            resolve(res.data)
        }else{
            resolve({
                code: apiCustomCode.SERVERERROR,
                msg: '服务器错误，请稍后重试。'
            });
        }
    }).catch(()=>{
        resolve({
            code: apiCustomCode.SERVERERROR,
            msg: '服务器错误，请稍后重试。'
        });
    })
})

export {
    request
}
