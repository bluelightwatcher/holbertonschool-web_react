"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
// Create a fake DOM environment
var window = new jsdom_1.JSDOM("<!DOCTYPE html><html><body></body></html>").window;
var document = window.document;
// Creating two student objects
var student1 = {
    firstName: "Guillaume",
    lastName: "Tel",
    age: 16,
    location: "bouks",
};
var student2 = {
    firstName: "Nicephore",
    lastName: "Niepce",
    age: 32,
    location: "Chalon sur Saone",
};
// Storing them in an array
var studentsList = [student1, student2];
// Function to render the table
function renderTable(students) {
    var table = document.createElement("table");
    table.border = "1"; // Adds a border to the table
    // Create table header
    var headerRow = document.createElement("tr");
    var header1 = document.createElement("th");
    header1.textContent = "First Name";
    var header2 = document.createElement("th");
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);
    // Populate table rows with student data
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });
    // Append the table to the document body
    document.body.appendChild(table);
}
// Call the function to render the table
renderTable(studentsList);
