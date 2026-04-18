// 1. Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Create table using Vanilla JS
const table = document.createElement("table");

// Loop through students and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);
