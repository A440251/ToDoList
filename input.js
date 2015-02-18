function inputFunction(){
	var databaseURL = 'http://localhost/ToDoList/input.php';
	
	 $.ajax({
            url: databaseURL,
            type: 'POST',
            data: $('mainbutton').serialize(),
            success: function(){
                 console.log("Success!");
            },
			error: function(XMLHttpRequest, textStatus, errorThrown){      
					alert("Failure.");
					alert(errorThrown);
			}
         });         
    };