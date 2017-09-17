$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/ankit54321yy@gmail.com", 
	    method: "POST",
	    data: {
	    	email: $("#email").val(),
	    	message: $("#message").val()
	    },
	    dataType: "json"
		}).done(function(){
			$("#email").val("");
			$("#message").val("");
			alert("Email successfully sent!");
		}).fail(function(){
			alert("error email has not send !");
		});
	});

}) ;
