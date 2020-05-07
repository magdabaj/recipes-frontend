const sortRecipes = (recipes) =>
  recipes.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));

module.exports = { sortRecipes };
