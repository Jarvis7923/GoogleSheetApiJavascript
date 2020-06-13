
var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1sPDYudSaMCLrIzG96Ql4AFylRJlwQcQoQp5W8XR34LE/edit?usp=sharing";

function clickButton() {
    var query = new google.visualization.Query(googleSheetUrl);
    query.setQuery("SELECT B WHERE A CONTAINS '2'");
    query.send(handleResponse);
}

function handleResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    console.log(data.getColumnId(0));
    console.log(data.getColumnLabel(0));
    console.log(data.getValue(0,0));
}
