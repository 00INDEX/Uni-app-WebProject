let config = {
    baseUrl : import.meta.env.VITE_ENV_URL,
    cookie : cookieStore.cookies || uni.getStorageSync('cookies') || ' '
}

const _cookieEncode = (cookie = {}) => {
    let cookieStr = ''
    let counter = 0
    for(const key in cookie){
        if(counter > 0) cookie = cookie + '; '
        cookie = cookie + key + '=' + cookie[key]
        counter++
    }
    return cookieStr
}

const _cookieDecode = (cookies = []) => {
    let cookie = {}
    for(let cookieStr of cookies){
        let cookieData = cookieStr.split("=")
        cookie[cookieData[0]] = cookieData[1]
    }
    return cookie
}

const _getFullUrl = (path = '/') => {
    if(config.baseUrl.endsWith('/') && path.startsWith('/')){
        return config.baseUrl + path.slice(1, path.length)
    }
    if(!config.baseUrl.endsWith('/') && !path.startsWith('/')){
        return config.baseUrl + '/' + path
    }
} 

const _beforeRequest = (options = {}) => {
    return new Promise((resolve, reject) => {
        options.url = _getFullUrl(options.url || '/')
        options.method = options.method || 'GET'
        if(!options.header) options.header = {}
        options.header.cookie = _cookieEncode(options.header.cookie) || _cookieEncode(config.cookie)
        resolve(options)
    })
}

const _afterResponse = (res) => {
    return new Promise((resolve, reject) => {
        if(res.cookies && res.cookies.length > 0) {
            let cookies = _cookieDecode(res.cookies)
            uni.setStorageSync('cookies', cookies)
            cookieStore.cookiesUpdate(cookies)
        }
        resolve(res)
    })
}

/**
 * @name ajax接口封装
 * @author ZhangShuo
 * @date 2022.5.10
 * @param {Object} options
 * @return {Promise}
 */
const request = (options = {}) => {
    return _beforeRequest(options).then(opt => {
        return uni.request(opt)
    }).then(res => _afterResponse(res))
}

export default {request}