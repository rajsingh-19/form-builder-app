const apiUrl = import.meta.env.VITE_API_URL;

//          register a user
export const registerUser = (userData) => {
    return fetch(`${apiUrl}api/user/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }) 
};

//          login a user
export const loginUser = (userData) => {
    return fetch(`${apiUrl}api/user/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
};

//          update the user
export const updateUser = (userData) => {
    return fetch(`${apiUrl}api/user/settings`, {
        method: "PUT",
        headers: {
            'Content-Type': 'appliction/json'
        },
        body: JSON.stringify(userData)
    })
};
