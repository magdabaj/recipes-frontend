CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    email CHARACTER (64),
    password CHARACTER (64)
    "addedDate" TIMESTAMP NOT NULL,
);