const DEFAULT_PROPERTIES = {
  recipeId: undefined,
  title: 'no title',
  url: 'url',
  image: 'image src',
  website: 'website url',
  get addedDate() {
    return new Date();
  },
  tags: [],
};

class Recipe {
  constructor({ recipeId, title, url, image, website, tags }) {
    this.recipeId = recipeId || DEFAULT_PROPERTIES.recipeId;
    this.title = title || DEFAULT_PROPERTIES.title;
    this.url = url || DEFAULT_PROPERTIES.url;
    this.image = image || DEFAULT_PROPERTIES.image;
    this.website = website || DEFAULT_PROPERTIES.website;
    this.addedDate = DEFAULT_PROPERTIES.addedDate;
    this.tags = tags || DEFAULT_PROPERTIES.tags;
  }
}

module.exports = Recipe;
