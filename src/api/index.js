import ajax from './ajax';

const baseUrl = 'http://119.45.209.166:7001';

export const get = (url, params = {}) => {
    return ajax({
        url: baseUrl + url,
        data: params
    });
}

export const post = (url, params = {}) => {
    return ajax.post({
        url: baseUrl + url,
        data: params
    });
}
