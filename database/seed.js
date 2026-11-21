db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
        console.error("Error fetching products:", err.message); 
    } else {
        console.log("Products fetched successfully:", rows);
    }
});



app.get('/api/products', (req, res) => { 
    db.all('SELECT * FROM products', (err, rows) => { 
        res.json(rows); 
    }); 
});

db.run(`
    INSERT INTO products (id, courseCode, title, credits, description, semester)
    VALUES 
        (3, 'CS101', 'Intro Programming', 3, 'Learn Python basics', 'Fall 2024'),
        (5, 'BIO120 General Biology', 3, 'Introduction to biological prinicples. ', 'Fall 2024'),
        (4, 'MATH150', 'Calculus I', 4, 'Basic Calculus .', 'Fall 2024'),
        (6, 'ENG101', 'Composition I', 3, "Academic writing and critical thinking.", 'Spring 2025'),
        (7, 'ME210', 'Thermodynamics', 3, 'Principles of thermodynamics and heat transfer.', 'Spring 2025'),
        (8, 'CS301', 'Database Systems', 3, 'Design and implementation of database systems.', 'Fall 2024'),
        (9, 'PHSY201', 'Physics II', 4, 'Electricity, magnetism, and modern physics', 'Spring 2025'),
        (10, 'CS201', 'Data Structures', 4, 'Study of fundamental data structures and algorithms', 'Spring 2025'),`);