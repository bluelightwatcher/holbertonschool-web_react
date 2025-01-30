interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two student objects
const student1: Student = {
  firstName: "Guillaume",
  lastName: "Tel",
  age: 16,
  location: "bouks",
};

const student2: Student = {
  firstName: "Nicephore",
  lastName: "Niepce",
  age: 32,
  location: "Chalon sur Saone",
};

// Storing them in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  table.border = "1"; // Adds a border to the table

  // Create table header
  const headerRow = document.createElement("tr");
  const header1 = document.createElement("th");
  header1.textContent = "First Name";
  const header2 = document.createElement("th");
  header2.textContent = "Location";
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);

  // Populate table rows with student data
  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
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

