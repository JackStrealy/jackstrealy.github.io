function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  alert(startdate);
  alert(enddate);
    <script>
        // Function to fetch and display data in the table
        async function fetchData() {
            try {
                // Fetch the data from the provided API endpoint
                const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
                const data = await response.json();
                
                // Get the table body element
                const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
                
                // Clear any existing rows
                tableBody.innerHTML = '';
                
                // Loop through the data and create table rows
                data.forEach(client => {
                    const row = tableBody.insertRow();

                    // Insert cells for each data field
                    const cellId = row.insertCell(0);
                    const cellName = row.insertCell(1);
                    const cellEmail = row.insertCell(2);
                    const cellPhone = row.insertCell(3);
                    const cellAddress = row.insertCell(4);

                    // Fill the cells with the relevant data
                    cellId.textContent = client.id || 'N/A';
                    cellName.textContent = client.name || 'N/A';
                    cellEmail.textContent = client.email || 'N/A';
                    cellPhone.textContent = client.phone || 'N/A';
                    cellAddress.textContent = client.address || 'N/A';
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Error fetching data.');
            }
        }

        // Fetch the data when the page loads
        window.onload = fetchData;
    </script>

</body>
</html>

