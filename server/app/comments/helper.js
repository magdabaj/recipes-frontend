const sortItems = (items) => items.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));

module.exports = { sortItems };
