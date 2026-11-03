const express = require("express");

const app = express();

app.use(express.json());

let employees = [
    { id: 1, name: "Rahul", role: "Developer" },
    { id: 2, name: "Priya", role: "Tester" }
];

// Home route
app.get("/", (req, res) => {
    res.send("Employee Management System");
});

// Get all employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

// Add employee
app.post("/employees", (req, res) => {
    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        role: req.body.role
    };

    employees.push(employee);
    res.status(201).json(employee);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});