$(document).ready(function(){
    $("#mainbutton").click(function(){
        var toAdd = $('#maintextarea').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
		$.post( "input.php", { toAdd } );
    });
	
    $(document).on("click", ".item", function () {
        $(this).remove();
    });
});
