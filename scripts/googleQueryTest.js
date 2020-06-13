
var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1sPDYudSaMCLrIzG96Ql4AFylRJlwQcQoQp5W8XR34LE/edit?usp=sharing";

function clickButton() {
    var query = new google.visualization.Query(googleSheetUrl);
    query.setQuery("SELECT * WHERE 'Department' CONTAINS 'COMP'");
    query.send(handleResponse);
}

function handleResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    console.log(data);
    
    // $("#name").html(data.getValue(0,0));
}
