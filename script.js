document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employee-form');
    const employeeList = document.getElementById('employees');

    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const department = document.getElementById('department').value;
        const salary = document.getElementById('salary').value;

        addEmployee(name, position, department, salary);

        employeeForm.reset();
    });

    function addEmployee(name, position, department, salary) {
        const employeeItem = document.createElement('li');
        employeeItem.textContent = `${name} - ${position} - ${department} - $${salary}`;
        employeeList.appendChild(employeeItem);
    }
});
