// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  // Set a boolean value for the while loop

  let NewEmp = true

  // Creates an array to store the employee data

  const employees = []

  // Initialize the while loop

  while(NewEmp) {

    // Creates an object to ask for the data
    const employee = {
       firstName: window.prompt("Enter emoloyee first name"),
       lastName: window.prompt("Enter employee last name"), 
       salary: window.prompt("Enter employee salary")
     };

  // Sets the employee salary to $0 in case is not a number
  if(isNaN(employee.salary)){
    window.alert(`${employee.salary} is not a valid number. It will default to $0`);
  employee.salary = 0; 
}
// Turns the salary from string to a number
employee.salary = parseFloat(employee.salary);

  // Pushes the objects with the data into the employees array
  employees.push(employee);

  // Allows the user to decide to continue the loop or not
NewEmp = window.confirm("Do you want to add a new employee?");
}

// Returns the contents of the employees array
return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate and display the average salary
  // variable to store salaries in
  let salarysum = 0;
  
  // Loop over the employeesArray's length to access each salary and add it to the salarysum variable
  for (let i = 0; i < employeesArray.length; i++){
    salarysum +=  employeesArray[i].salary;
  };
  // Log in the console the results
  console.log(`The avarage salary between our ${employeesArray.length} employees is ${salarysum}`);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee 
  // Rounds down a random number between 0 and 1 times the array length and stores it inside the rdmEmp variable
  let rdmEmp = Math.floor(Math.random()*employeesArray.length);

  // Uses the random number from rdmEmp as an index to log in the console a random employee
  console.log(`Congraulations to ${employeesArray[rdmEmp].firstName} ${employeesArray[rdmEmp].lastName}, our random drawing Winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
