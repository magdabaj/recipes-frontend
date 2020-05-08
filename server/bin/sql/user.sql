CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    "emailHash" CHARACTER (64),
    "passwordHash" CHARACTER (64),
    "addedDate" TIMESTAMP NOT NULL,
    "sessionId" CHARACTER(36)
);