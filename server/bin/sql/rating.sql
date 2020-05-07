CREATE TABLE rating(
    PRIMARY KEY ("recipeId", "userId"),
    rate INTEGER check (rate <= 5) NOT NULL,
    "recipeId" INTEGER,
    FOREIGN KEY ("recipeId") REFERENCES recipe(id),
    "userId" INTEGER,
    FOREIGN KEY ("userId") REFERENCES "user"(id)
);