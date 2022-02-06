import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BASE}`;
export const axiosInst = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token') ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})

axiosInst.interceptors.response.use(
    (response) => {
        return response;

    },
    async function (error) {
        const originalRequest = error.config;
        if (typeof error === 'undefined') {
            alert(
                'A server/network errror occured. ' +
                'Looks like CORS might be the problem. ' +
                'Sorry about this - we will get it fixed shortly.'
            );
            return Promise.reject(error);
        }
        if (error.response.status === 401 && originalRequest.url === baseUrl + 'token/refresh/'
        ) {
            window.location.href = '/signinup/';
            console.log("Msanest");
            return Promise.reject(error);
        }
        if (
            error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh_token');

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                //exp date in token in seconds, while now() returns mill
                const now = Math.ceil(Date.now() / 1000);

                if (tokenParts.exp > now) {
                    return axiosInst
                        .post('/token/refresh/', { refresh: refreshToken })
                        .then((response) => {
                            localStorage.setItem('access_token', response.data.access);
                            // console.log("access fetched");

                            axiosInst.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
                            originalRequest.headers['Authorization'] = 'JWT ' + response.data.access;

                            return axiosInst(originalRequest);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    // console.log('Refresh token is expired', tokenParts.exp, now);
                    window.location.href = '/signinup/';
                }
            } else {
                console.log('Refresh token not available.');
                window.location.href = '/signinup/';
            }
        }
        // specific error handling done elsewhere
        return Promise.reject(error);
    }
)

