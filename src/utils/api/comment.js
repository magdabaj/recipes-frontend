const api = 'https://afternoon-plateau-23579.herokuapp.com/comment';
// const api = 'http://localhost:5000/comment'

export const fetchComments = async recipeId => {
    const response = await fetch(`${api}/${recipeId}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const storeComment = async (recipeId, content, userId) => {
    return fetch(`${api}/${recipeId}`, {
        method: 'POST',
        body: JSON.stringify({ content, userId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const editComment = async (commentId, userId, content) => {
    return fetch(`${api}/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({ content, userId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};

export const deleteComment = async (commentId, userId) => {
    return fetch(`${api}/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({ userId }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    }).then(res => res.json());
};
