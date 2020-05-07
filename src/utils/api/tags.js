import "babel-polyfill"

const api = 'http://localhost:9000/tags';

export const fetchAllTags = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};
