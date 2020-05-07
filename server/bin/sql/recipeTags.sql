CREATE TABLE recipeTags(
"tagId" INTEGER,
"recipeId" INTEGER,
FOREIGN KEY ("tagId") REFERENCES tag(id),
FOREIGN KEY ("recipeId") REFERENCES recipe(id)
);
