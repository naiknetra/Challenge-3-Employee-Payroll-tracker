// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  //console.log(" Inside collectEmplyees");
    let employees = [];

    while (true) {
        let firstName = prompt("Enter employee's first name:");
        let lastName = prompt("Enter employee's last name:");
        let salaryInput = prompt("Enter employee's salary:");
        let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

        let employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        };

        employees.push(employee);

        let continueAdding = confirm("Do you want to add another employee?");
        if (!continueAdding) {
            break;
        }
    }

    return employees;
};

// // Call the function to collect employee data
// let employeeData = collectEmployees();
// console.log(employeeData); 
// // Output the array of employee objects
// displayEmployees(employeeData);




// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
 
console.log('Inside display average salary');

//Here is an example implementation in JavaScript:
    let totalSalary = 0;

    // Calculate the total sum of salaries
     employeesArray.forEach(employee => {
        totalSalary += employee.salary;
    });

    // Calculate the average salary
    const averageSalary = totalSalary / employeesArray.length;

    // Display the average salary with two decimal places
    //console.log('The average employee salary between our '+employeesArray.length+' employee(s) is '+averageSalary.toFixed(2));
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);
}




// Select a random employee
const getRandomEmployee = function(employeesArray) {
console.log(employeesArray);

  // TODO: Select and display a random employee
 
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};




  
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

/*=============================================================================*/
// Call the function to collect employee data
let employeeData = collectEmployees();
console.log(employeeData); 
// Output the array of employee objects
displayEmployees(employeeData);
displayAverageSalary(employeeData);
getRandomEmployee(employeeData);
//trackEmployeeData();