// 1. Create Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Allow any additional property
  [key: string]: any;
}

// 2. Create object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// 3. Print
console.log(teacher3);

// Extend Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Print
console.log(director1);

// 1. Create interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 2. Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// 3. Test
console.log(printTeacher("John", "Doe"));

// 1. Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 2. Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 3. Class implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// 4. Test
const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
