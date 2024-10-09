document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    // Validate age (between 18 and 55)
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const ageMonth = today.getMonth() - dobDate.getMonth();
    const ageDay = today.getDate() - dobDate.getDate();

    if (age < 18 || age > 55 || (age === 55 && (ageMonth > 0 || (ageMonth === 0 && ageDay > 0)))) {
        alert('You must be between 18 and 55 years old.');
        return;
    }

    // Create a new row in the table
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = password;
    newRow.insertCell(3).innerText = dob;
    newRow.insertCell(4).innerText = terms ? 'true' : 'false';
});
