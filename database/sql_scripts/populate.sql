BEGIN;
-- Inserting into Courses table
INSERT INTO Courses (courseID, title, difficulty, startDate, endDate, credits, hoursPerWeek, courseDescription)
VALUES 
    (1, 'Real-Time Programming in Java', 'Expert', '2024-06-03', '2024-06-28', 7.5, 40,
        'Embark on a transformative learning experience with our expert-level online course, "Real-Time Programming in Java." 
        Designed for seasoned developers and Java enthusiasts seeking mastery in real-time applications, this advanced course delves deep 
        into the intricacies of leveraging Java for mission-critical systems. Explore cutting-edge concepts such as multithreading, synchronization, 
        and low-latency programming, equipping you with the skills needed to build responsive and robust real-time solutions. Led by industry 
        experts with extensive hands-on experience, this course combines theoretical insights with practical application, ensuring you not only 
        grasp the theoretical underpinnings but also gain the proficiency to implement real-time solutions confidently. Elevate your Java programming 
        expertise to new heights and stay ahead in the ever-evolving landscape of real-time systems with our comprehensive and immersive course.'),
        
    (2, 'Introduction to SQL Essentials', 'Beginner', '2024-06-10', '2024-06-28', 2, 20,
        'Dive into the fundamentals of database management with our beginner-level online course, "Introduction to SQL Essentials." 
        Geared towards those new to the world of databases and SQL, this course provides a comprehensive foundation for understanding
         and utilizing SQL for effective data management. While MySQL is touched upon to broaden your practical knowledge, the core focus
          is on SQL''s universal principles applicable across various database systems. Led by seasoned instructors, the course covers 
          database design, querying data, and basic data manipulation using SQL commands. With a hands-on approach, you''ll engage in 
          practical exercises to reinforce your learning, ensuring you gain the skills necessary to navigate and interact with databases
           confidently. Whether you''re a budding developer, analyst, or anyone eager to harness the power of databases, this course offers
            an accessible entry point into the world of SQL, setting the stage for your future success in data-driven environments.');

INSERT INTO CourseProviders (providerID, providerName)
VALUES (1, 'Apache Software Foundation'),
       (2, 'NTNU'),
       (3, 'Pearson'),
       (4, 'Oracle');

INSERT INTO CourseProviderRelationship (providerID, courseID)
VALUES (1, 1),  -- Apache Software Foundation offers Real-Time Programming in Java
       (2, 1),  -- NTNU offers Real-Time Programming in Java
       (2, 2),  -- NTNU also offers Introduction to SQL Essentials
       (3, 2);  -- Pearson offers Introduction to SQL Essentials

INSERT INTO CoursePricing (pricingID, courseID, providerID, price, currency)
VALUES 
    (1, 1, 1, 29999.00, 'NOK'), -- Real-Time Programming in Java price option 1 from provider 1
    (2, 1, 2, 31000.00, 'NOK'), -- Real-Time Programming in Java price option 2 from provider 2
    (3, 2, 2, 800.00, 'USD'),   -- Introduction to SQL Essentials price option 1 from provider 2
    (4, 2, 3, 750.00, 'USD');   -- Introduction to SQL Essentials price option 2 from provider 3

INSERT INTO CourseCertifications (certificationID, title) 
VALUES  (1, 'Java SE 17 Programmer Professional'),
        (2, 'SQL Fundamentals'),
        (3, 'TEST: Advanced Java Programming'),        
        (4, 'TEST: Database Administration');  

INSERT INTO CourseCertificationRelationship (courseID, certificationID)
VALUES (1,1),
       (2,2),
       (1,3),
       (2,4);        

COMMIT;