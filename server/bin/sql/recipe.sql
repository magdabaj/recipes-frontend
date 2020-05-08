CREATE TABLE recipe(
    id SERIAL PRIMARY KEY,
    "addedDate" TIMESTAMP NOT NULL,
    title VARCHAR(128),
    url VARCHAR,
    image VARCHAR,
    website VARCHAR,
    "userId" INTEGER,
    FOREIGN KEY ("userId") REFERENCES "user"(id)
);