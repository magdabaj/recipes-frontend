const api = 'https://afternoon-plateau-23579.herokuapp.com/user';
// const api = 'http://localhost:5000/user'

export const signUpUser = async (email, password) => {
    return fetch(`${api}/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const signInUser = async (email, password) => {
    return fetch(`${api}/signin`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const signOutUser = async () => {
    return fetch(`${api}/signout`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const authenticateUser = async () => {
    return fetch(`${api}/authenticated`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};
