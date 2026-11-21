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
    CREATE TABLE products (
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    price REAL)"
    ', (err) => {
        if (err) {
            console.error("Error creating table:", err.message);
        }
            else {
                console.log("Table created successfully");
            }
                }
            `)

console.log("Database connection established");


const createDatabase = async () => {
    // Logic to create the database
    console.log("Creating database...");
    // Simulate database creation delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
};