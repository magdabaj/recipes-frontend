import "babel-polyfill"

const api = 'https://afternoon-plateau-23579.herokuapp.com/tags';
// const api = 'http://localhost:5000/tags'

export const fetchAllTags = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};