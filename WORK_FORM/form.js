$(document).ready(function() {

	
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "WORK_FORM/mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка отправлена!");
			setTimeout(function() {
				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});