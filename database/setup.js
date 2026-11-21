async function setupDatabase(){
    const startTime = Date.now();
    await createDatabase();
    setupDatabaseSchema();
    const endTime = Date.now();
}


const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.setupDatabase.Database('mydatabase.db');
console.log("Database connection established");

db.run(`
    INSERT INTO products (
    id INTEGER PRIMARY KEY, 
    courseCode TEXT, 
    title TEXT, 
    credits INTERGER,
    description TEXT,
    semester TEXT,)
    

`);

console.log("Database connection established");
db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
        console.error("Error fetching products:", err.message);
    } else {
        console.log("Products fetched successfully:", rows);
    }
});

const createDatabase = async () => {
    // Logic to create the database
    console.log("Creating database...");
    // Simulate database creation delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

};