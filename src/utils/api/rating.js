const api = 'https://afternoon-plateau-23579.herokuapp.com/rating';
// const api = 'http://localhost:5000/rating';

export const createRating = async (rate, userId, recipeId) => {
    return fetch(`${api}/new`, {
        method: 'POST',
        body: JSON.stringify({ rate, userId, recipeId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const fetchAllRatings = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const fetchRecipeRatings = async recipeId => {
    const response = await fetch(`${api}/${recipeId}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};
