$(document).ready(function(){
    $("#mainbutton").click(function () {
        var toAdd = $('#maintextarea').val();
		console.log(toAdd);
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on("click", ".item", function () {
        $(this).remove();
    });
});
