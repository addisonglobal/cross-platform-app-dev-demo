// @flow
const API_HOST = process.env.API_HOST || 'http://0.0.0.0:3001/api';

const getRequestArgs = (obj: {}) => Object.keys(obj)
    .map(key => `${key}=${encodeURIComponent(obj[key])}`)
    .join('&');

type MethodType = 'GET' | 'PUT' | 'POST' | 'DELETE';

export default (uri: string, method: MethodType, data: {}) => {
    let url = `${API_HOST}/${uri}`;

    const fetchOptions = {
        method,
        body: method !== 'GET' ? JSON.stringify(data || {}) : undefined,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method === 'GET' && data) {
        url += `?${getRequestArgs(data)}`;
    }

    return new Promise((resolve: *, reject: *) => {
        fetch(url, fetchOptions).then((response: *) => response.json()).then((result: *) => {
            resolve.call(null, result);
        }).catch((error: Error) => {
            reject.call(null, error || {});
        });
    });
};
