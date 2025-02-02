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

