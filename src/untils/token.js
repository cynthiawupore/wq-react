/**
 *
 * 功能说明：    token的写和读
 *
 * setToken     写入token
 * getToken     获取token
 *
 * */

const key = 'token'

const getToken = () => window.localStorage.getItem(key) ? window.localStorage.getItem(key) : null

const setToken = (token) => window.localStorage.setItem(key, token)

export {
    getToken,
    setToken
}
