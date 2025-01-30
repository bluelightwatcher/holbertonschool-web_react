// Define the Teacher interface
interface Teacher {
  firstName: string; 
  fullTimeEmployee: boolean;
  yearsOfExperience: number; 
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports : number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};  

