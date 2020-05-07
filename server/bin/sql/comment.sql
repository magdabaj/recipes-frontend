CREATE TABLE comment(
    id SERIAL PRIMARY KEY,
    content VARCHAR NOT NULL,
    "recipeId" INTEGER,
    email CHARACTER (64),
    "addedDate" TIMESTAMP NOT NULL,
    FOREIGN KEY ("recipeId") REFERENCES recipe(id),
    "userId" INTEGER,
    FOREIGN KEY ("userId") REFERENCES user(id)
);
