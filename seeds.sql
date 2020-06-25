CREATE TABLE Users (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR(16) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE Exercises (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    exercise_type VARCHAR(30) NOT NULL,
    exercise_duration INTEGER(3) NOT NULL,
    user_Id INTEGER(3),
    FOREIGN KEY (user_Id) REFERENCES Users(id)
);

CREATE TABLE Fluids (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fluid_type VARCHAR NOT NULL,
    numOfGlasses INTEGER(3),
    user_Id INTEGER(3) NOT NULL,
    FOREIGN KEY (user_Id) REFERENCES Users(id)
);

CREATE TABLE Sleeps (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sleep_duration INTEGER(15) NOT NULL,
    user_Id INTEGER(3) NOT NULL,
    FOREIGN KEY (user_Id) REFERENCES Users(id)
);

INSERT INTO Users (username, password, first_name, last_name) VALUES ('edub', 'password', 'emily', 'wirtz'); 