const rowSlider = document.getElementById('row');
const columnSlider = document.getElementById('column');
const tableBody = document.querySelector('.table-body');

function updateTable() {
    const numRows = parseInt(rowSlider.value);
    const numCols = parseInt(columnSlider.value);
    console.log(numRows);
    console.log(numCols);

    let tableHTML = '';

    for (let i = 0; i < numRows; i++) {
        tableHTML += '<tr>';
        for (let j = 1; j <= numCols; j++) {
            tableHTML += `<td class="ceil">${i * numCols + j}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableBody.innerHTML = tableHTML;
}

updateTable();

rowSlider.addEventListener('input', updateTable);
columnSlider.addEventListener('input', updateTable);
