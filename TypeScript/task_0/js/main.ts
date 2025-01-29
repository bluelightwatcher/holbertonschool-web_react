// Define the student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create student 1 and student 2 variables stored in variable 'studentsList'
const student1: Student = {
    firstName: 'Lemohang',
    lastName: 'Lipholo',
    age: 25,
    location: 'Silicon Valley',
};

const student2: Student = {
    firstName: 'Maggie',
    lastName: 'Gibbs',
    age: 30,
    location: 'Miami',
};

// Store them in the studentsList array
const studentsList: Student[] = [student1, student2];

// Function that creates a table and appends student details
const table = document.createElement('table');

// Iterate through the studentsList and create a row for each student
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td'); // Changed from 'tr' to 'td'
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);
