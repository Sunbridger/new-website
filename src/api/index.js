import ajax from './ajax';

const baseUrl = 'https://www.sunbridger.site/api';

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
