function inputFunction(){
	var databaseURL = 'http://localhost/ToDoList/input.php';
	var toBeInput = document.getElementById('maintextarea').value;
	$.post( databaseURL, { thingstodo:  toBeInput } );
	};