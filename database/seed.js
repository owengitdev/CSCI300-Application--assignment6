db.run(`
    INSERT INTO products (courseCode, title, credits, description, semester)
    VALUES 
        ('CS101', 'Introduction to Computer Science', 3, 'An introductory course to computer science concepts.', 'Fall 2023'),
        ('MATH201', 'Calculus II', 4, 'Continuation of Calculus I with applications.', 'Spring 2024')
`);