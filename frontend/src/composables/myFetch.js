export let BASEURL = import.meta.env.VITE_BACKEND_API;

export const myFetch = async (
    url,
    method = 'GET',
    data = {},
    headers = { 'Content-Type': 'application/json' }
) => {
    const params = {
        method,
        headers: {
            ...headers
        }
    }
    
    if (method !== 'GET' && method !== 'HEAD') {
        params.body = JSON.stringify(data) || {}
    }

    return fetch(`${BASEURL}/${url}`, params).then((res) => {
        return res.json()
    })
}