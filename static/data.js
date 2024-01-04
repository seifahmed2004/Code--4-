function fetchDataAndUpdateTable() {
    fetch('/get-datatable')
        .then(response => response.json())
        .then(data => {
            updateDataTable(data);
        })
        .catch(error => console.error('Error:', error));
}

function updateDataTable(data) {
      //console.log(data)
      document.getElementById("datadiv").innerHTML = data
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndUpdateTable()
});
