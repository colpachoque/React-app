// const toQueryString = params => {
//     const queryString = Object.entries(params)
//         .map(([key, value]) => `${key}=${value}`)
//         .join('&');
//     return queryString.length ? `?${queryString}` : '';
// };
//
// const responseError = response => {
//     const contentType = response.headers.get('content-type');
//     const errMessage =
//         contentType && contentType.indexOf('application/json') !== -1
//             ? response.json()
//             : response.text();
//     const error = new Error(errMessage.message || errMessage);
//     error.response = response;
//     return Promise.reject(error)
// };
//
// const genericPost = async ({ url, body, method = 'POST' }) => {
//     const headers = {};
//     let requestBody;
//     if (body instanceof FormData) {
//         requestBody = body
//     } else {
//         requestBody = JSON.stringify(body);
//         headers['Content-Type'] = 'application/json'
//     }
//
//     const response = await fetch(url, {
//         method,
//         headers,
//         body: requestBody
//     });
//
//     if (response.ok) {
//         const clone = response.clone();
//         let promiseOrJson;
//         try {
//             promiseOrJson = await response.json()
//         } catch (e) {
//             promiseOrJson = clone.text()
//         }
//         return promiseOrJson
//     }
//
//     return responseError(response)
// };
//
// const deleteRequest = async (url, queryParams = {}, body = {}) => {
//     const headers = {};
//     const requestBody = JSON.stringify(body);
//
//     const response = await fetch(url + toQueryString(queryParams), {
//         method: 'DELETE',
//         headers,
//         body: requestBody
//     });
//     if (response.ok) {
//         return response
//     }
//
//     return responseError(response)
// };
//
// const post = (url, body) => genericPost({ url, body, method: 'POST' });
// const patch = (url, body) => genericPost({ url, body, method: 'PATCH' });
//
// const get = async (url, params = {}) => {
//     const headers = {};
//     const queryString = toQueryString(params);
//     return fetch(`${url}${queryString}`, { headers })
// };
//
// const getJSON = async (url, params) => {
//     const response = await get(url, params);
//
//     if (response.ok) {
//         return response.json()
//     }
//     return responseError(response)
// };
//
// const getText = async (url, params) => {
//     const response = await get(url, params);
//
//     if (response.ok) {
//         return response.text()
//     }
//     return responseError(response)
// };
//
// export {
//     post,
//     getJSON,
//     getText,
//     patch,
//     deleteRequest
// }
