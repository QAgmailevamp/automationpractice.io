// Function to show the selected tab
function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  // Show the selected tab
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');
}

// Function to change text in the Buttons tab
function changeText() {
  const textElement = document.getElementById('text');
  textElement.innerText = 'The text has been changed!';
}


const tableData = [
  { name: 'Alice', age: 25, salary: 50000 },
  { name: 'Bob', age: 30, salary: 70000 },
  { name: 'Charlie', age: 35, salary: 55000 },
  { name: 'Diana', age: 28, salary: 80000 },
  { name: 'Ethan', age: 40, salary: 65000 },
  { name: 'Fiona', age: 26, salary: 60000 },
  { name: 'George', age: 33, salary: 75000 },
  { name: 'Hannah', age: 29, salary: 72000 },
  { name: 'Ian', age: 31, salary: 68000 },
  { name: 'Julia', age: 27, salary: 58000 },
  { name: 'Kevin', age: 36, salary: 82000 },
  { name: 'Laura', age: 32, salary: 63000 },
  { name: 'Michael', age: 38, salary: 90000 },
  { name: 'Nancy', age: 24, salary: 52000 },
  { name: 'Oliver', age: 34, salary: 77000 },
  { name: 'Patricia', age: 29, salary: 64000 },
  { name: 'Quinn', age: 41, salary: 95000 },
  { name: 'Rachel', age: 28, salary: 61000 },
  { name: 'Samuel', age: 37, salary: 85000 },
  { name: 'Tara', age: 30, salary: 69000 },
  { name: 'Uma', age: 33, salary: 73000 },
  { name: 'Victor', age: 39, salary: 88000 },
  { name: 'Wendy', age: 26, salary: 57000 },
  { name: 'Xavier', age: 42, salary: 92000 },
  { name: 'Yolanda', age: 31, salary: 67000 },
  { name: 'Zack', age: 35, salary: 78000 },
  { name: 'Amy', age: 27, salary: 59000 },
  { name: 'Brian', age: 34, salary: 76000 },
  { name: 'Catherine', age: 29, salary: 62000 },
  { name: 'David', age: 36, salary: 83000 },
  { name: 'Emma', age: 28, salary: 66000 },
  { name: 'Frank', age: 40, salary: 87000 },
  { name: 'Grace', age: 32, salary: 71000 },
  { name: 'Henry', age: 38, salary: 86000 },
  { name: 'Iris', age: 25, salary: 54000 },
  { name: 'Jack', age: 33, salary: 74000 },
  { name: 'Karen', age: 30, salary: 70000 },
  { name: 'Luke', age: 37, salary: 84000 },
  { name: 'Maria', age: 28, salary: 63000 },
  { name: 'Nathan', age: 35, salary: 79000 }
];

let currentPage = 1;
let rowsPerPage = 3; // Default value
let filteredData = [...tableData]; // Holds the filtered data.

function loadTableData(page, data = tableData) {
    const tbody = document.querySelector('#dynamicTable tbody');
    tbody.innerHTML = '';
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td>`;
        tbody.appendChild(tr);
    });

    document.getElementById('pageInfo').textContent = `Page ${page}`;
}

function sortTable(column) {
    filteredData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    loadTableData(currentPage, filteredData);
}

function calculateAverage() {
    const average = filteredData.reduce((sum, row) => sum + row.salary, 0) / filteredData.length;
    document.getElementById('averageSalary').textContent = `Average Salary: ${average.toFixed(2)}`;
}

function searchTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredData = tableData.filter(row => row.name.toLowerCase().includes(searchTerm));
    currentPage = 1; // Reset to first page on search.
    loadTableData(currentPage, filteredData);
}

function updateRowsPerPage() {
    rowsPerPage = parseInt(document.getElementById('rowsPerPage').value, 10);
    currentPage = 1; // Reset to the first page when rows per page changes.
    loadTableData(currentPage, filteredData);
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) currentPage--;
    loadTableData(currentPage, filteredData);
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage * rowsPerPage < filteredData.length) currentPage++;
    loadTableData(currentPage, filteredData);
});

document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => sortTable(th.dataset.sort));
});

document.getElementById('calculateAverage').addEventListener('click', calculateAverage);
document.getElementById('searchButton').addEventListener('click', searchTable);
document.getElementById('rowsPerPage').addEventListener('change', updateRowsPerPage);

// Load the initial data
loadTableData(currentPage);