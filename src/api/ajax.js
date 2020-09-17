export default (option) => {
    return new Promise((resolve, reject) => {
        if (String(option) !== '[object Object]') return;

        option.method = option.method ? option.method.toUpperCase() : 'GET';

        option.data = option.data || {};

        const formData = []

        for (var key in option.data) {
          formData.push(''.concat(key, '=', option.data[key]));
        }

        option.data = formData.join('&');

        if (option.method === 'GET') {
          option.url += location.search.length === 0 ? ''.concat('?', option.data) : ''.concat('&', option.data)
        }

        var xhr = new XMLHttpRequest();

        xhr.responseType = option.responseType || 'json';

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.response);
            }
          }
        }
        xhr.open(option.method, option.url, true)
        if (option.method === 'POST') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        }
        xhr.send(option.method === 'POST' ? option.data : null)
    });
  }
