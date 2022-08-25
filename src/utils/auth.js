export const AuthFetch = async ({
    url,
    method,
    headers,
    body,
}) => {
    try  {
        const h = headers || {
            'Content-Type': 'application/json'
        }
        let response = await fetch(url, {
            method: method || 'GET',
            headers: {
                ...h,
                'Authorization' : localStorage.getItem('token')
            },
            body: body || null
        });

        if ([401, 403].includes(Number(response.status))) {
            localStorage.clear();
            document.location.reload();
        }

        if (response.status >= 500) {

        }

        response = await response.json();

        return response;
    } catch (e) {
        // localStorage.removeItem('token');
        // document.location.reload();
    }
}