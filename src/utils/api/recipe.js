const api = 'https://afternoon-plateau-23579.herokuapp.com/recipe';
// const api = 'http://localhost:5000/recipe'

export const fetchAllRecipes = async page => {
    const response = await fetch(`${api}?page=${page}&limit=8`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const fetchRecipe = async recipeId => {
    const response = await fetch(`${api}/${recipeId}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const fetchUserRecipes = async (email, page) => {
    const response = await fetch(`${api}/user/${email}?page=${page}&limit=8`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const fetchRecipesByTag = async (tagId, page) => {
    const response = await fetch(`${api}/tag/${tagId}?page=${page}&limit=8`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const storeRecipe = async (title, url, website, image, tagId, userId) => {
    return fetch(`${api}/new/${userId}`, {
        method: 'POST',
        body: JSON.stringify({ title, url, website, image, tagId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const editRecipe = async (title, url, website, image, tagId, userId, id) => {
    return fetch(`${api}/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, url, website, image, tagId, userId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const deleteRecipe = async (recipeId, userId) => {
    return fetch(`${api}/delete/${recipeId}`, {
        method: 'DELETE',
        body: JSON.stringify({ userId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};
