BEGIN;
INSERT INTO Courses (id, title)
VALUES 
    (1, 'Introduction to Programming'),
    (2, 'Database Management Fundamentals'),
    (3, 'Machine Learning Basics'),
    (4, 'Web Development Essentials');


-- Removed some attributes for now!!!
--  CoveredTopics, Level, ClosestSession, CourseSize, HoursPerWeek, RelatedCertifications, CourseProviders, Description)

-- 'Basic programming concepts, data types, control structures', 'Beginner', '2024-03-15', 50, 10, 'None', 1, 'This course provides an introduction to programming using various programming languages.'),
--  'Database design, SQL queries, normalization', 'Intermediate', '2024-04-10', 40, 8, 'SQL Fundamentals', 2, 'This course covers the fundamentals of database management, including database design principles and SQL query writing.'),
-- 'Supervised learning, unsupervised learning, model evaluation', 'Advanced', '2024-05-05', 30, 6, 'Machine Learning Foundations', 3, 'This course introduces the basic concepts and algorithms of machine learning.'),
-- 'HTML, CSS, JavaScript, responsive design', 'Intermediate', '2024-06-01', 45, 9, 'Web Development Fundamentals', 4, 'This course covers essential web development technologies and techniques, including HTML, CSS, and JavaScript, with a focus on responsive design.');


COMMIT;