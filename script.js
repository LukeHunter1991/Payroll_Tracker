// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Create array to store objects.
  let employeeInput = [];
  // Create boolean to act as a condition for the while loop.
  let addEmployee = true;

  while (addEmployee) {
    // Collect data from user. Salary string pushed to Int so that salaryCell formats correctly.
    const firstName = prompt("First Name: ");
    const lastName = prompt("Last Name: ");
    const salary = parseInt(prompt("Salary: "));

    // Create object to hold employee details.
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    // Add employee to the array.
    employeeInput.push(employee);

    // Confirm prompt returns boolean. If true, loop continues to run to add another employee.
    addEmployee = confirm("Add another employee?");
  }
  
  //Returns an array of objects holding employee details.
  return employeeInput;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

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
