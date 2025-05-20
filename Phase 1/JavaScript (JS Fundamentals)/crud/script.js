// Initialize data array from localStorage or empty array if none exists
let data = JSON.parse(localStorage.getItem('userData')) || [];

// Load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayData();
    document.getElementById('addButton').addEventListener('click', addData);
});

function saveToLocalStorage() {
    localStorage.setItem('userData', JSON.stringify(data));
}

function addData(){
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const newData = {
        id: Date.now(), // Create unique ID using timestamp
        name: name,
        surname: surname,
        age: age,
        phone: phone,
        email: email
    };

    data.push(newData);
    saveToLocalStorage();
    
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    alert('Data added successfully!');
    console.log(newData);
    
    displayData();
}

function displayData(){
    const showDataElement = document.getElementById('showData');
    showDataElement.innerHTML = ''; 
    
    if (data.length === 0) {
        showDataElement.innerHTML = '<p>No data available</p>';
        return;
    }
    
    // Create table to display data
    const table = document.createElement('table');
    table.border = '1';
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    
    // Create table header
    const headerRow = document.createElement('tr');
    ['Name', 'Surname', 'Age', 'Phone', 'Email', 'Actions'].forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        header.style.padding = '8px';
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    
    // Add data rows
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        
        // Add data cells
        ['name', 'surname', 'age', 'phone', 'email'].forEach(field => {
            const cell = document.createElement('td');
            cell.textContent = item[field];
            cell.style.padding = '8px';
            row.appendChild(cell);
        });
        
        // Add action buttons
        const actionsCell = document.createElement('td');
        actionsCell.style.padding = '8px';
        
        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn action-btn';
        editButton.onclick = function() {
            editData(item.id);
        };
        
        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn action-btn';
        deleteButton.onclick = function() {
            deleteData(item.id);
        };
        
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);
        
        table.appendChild(row);
    });
    
    showDataElement.appendChild(table);
}

function editData(id) {
    const itemToEdit = data.find(item => item.id === id);
    if (!itemToEdit) return;
    
    // Fill form with data to edit
    document.getElementById('name').value = itemToEdit.name;
    document.getElementById('surname').value = itemToEdit.surname;
    document.getElementById('age').value = itemToEdit.age;
    document.getElementById('phone').value = itemToEdit.phone;
    document.getElementById('email').value = itemToEdit.email;
    
    // Change Add button temporarily
    const addButton = document.getElementById('addButton');
    const originalText = addButton.textContent;
    addButton.textContent = 'Update';
    
    // Remove existing click event
    const oldClickHandler = addButton.onclick;
    addButton.onclick = function() {
        // Update the data
        itemToEdit.name = document.getElementById('name').value;
        itemToEdit.surname = document.getElementById('surname').value;
        itemToEdit.age = document.getElementById('age').value;
        itemToEdit.phone = document.getElementById('phone').value;
        itemToEdit.email = document.getElementById('email').value;
        
        // Save to localStorage
        saveToLocalStorage();
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('age').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        
        // Restore button
        addButton.textContent = originalText;
        addButton.onclick = addData;
        
        // Refresh display
        displayData();
        
        alert('Data updated successfully!');
    };
}

function deleteData(id) {
    if (confirm('Are you sure you want to delete this entry?')) {
        data = data.filter(item => item.id !== id);
        saveToLocalStorage();
        displayData();
        alert('Data deleted successfully!');
    }
}