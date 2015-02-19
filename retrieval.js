function retrievalFunction(){
	var databaseURL = 'http://localhost/ToDoList/retrieval.php';

	$.ajax({
			url: databaseURL,
			type: "GET",
			async: false,
			//data: sendData,
			// processData: false,
			// contentType: "application/json",
			dataType: "json",
			// processData: false,
			success: function(jsonData){
					var output = [];
					$.each(jsonData, function(key, value) {
						$.each(value, function(columnName, inputData) {
						output.push(inputData);
						});
					document.getElementById('retrievalbox').value = output;
					});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){      
					alert("Failure.");
					alert(errorThrown);
			}
	});    
}
