BEGIN;

CREATE TYPE role_enum AS ENUM ('admin', 'user', 'visitor');


CREATE TABLE Courses (
    courseID INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    credits NUMERIC(5,2) NOT NULL,
    hoursPerWeek INTEGER NOT NULL,
    courseDescription TEXT NOT NULL
);

CREATE TABLE CourseProviders (
    providerID INTEGER PRIMARY KEY,
    providerName TEXT NOT NULL
);

CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    pass_hash TEXT NOT NULL,
    role role_enum NOT NULL,
    UNIQUE (email),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);

CREATE TABLE CourseProviderRelationship (
    providerID INTEGER NOT NULL,
    courseID INTEGER NOT NULL,
    PRIMARY KEY (providerID, courseID), 
    FOREIGN KEY (providerID) REFERENCES CourseProviders(providerID),
    FOREIGN KEY (courseID) REFERENCES Courses(courseID)
);

CREATE TABLE CoursePricing (
    pricingID INTEGER PRIMARY KEY,
    courseID INTEGER NOT NULL,
    providerID INTEGER NOT NULL,
    price NUMERIC(10,3) NOT NULL,
    currency TEXT NOT NULL,
    FOREIGN KEY (courseID) REFERENCES Courses(courseID),
    FOREIGN KEY (providerID) REFERENCES CourseProviders(providerID)
);


CREATE TABLE CourseCertifications (
    certificationID INTEGER PRIMARY KEY,
    title TEXT NOT NULL
);

CREATE TABLE CourseCertificationRelationship (
    courseID INTEGER NOT NULL,
    certificationID INTEGER NOT NULL,
    PRIMARY KEY (courseID, certificationID),
    FOREIGN KEY (courseID) REFERENCES Courses(courseID),
    FOREIGN KEY (certificationID) REFERENCES CourseCertifications(certificationID)
);

COMMIT;
