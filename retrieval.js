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
					document.getElementById('retrievalbox').value = jsonData;
					$.each(jsonData, function(key, value) {
						$.each(value, function(first_object, second_object) {
						alert(first_object +": " + second_object);
						});
					});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){      
					alert("Failure.");
					alert(errorThrown);
			}
	});    
}
