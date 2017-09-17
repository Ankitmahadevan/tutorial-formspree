$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/ankit54321@email.com", 
	    method: "POST",
	    data: {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	message: $("#message").val()
	    },
	    dataType: "json"
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#message").val("");
			alert("Email successfully sent!");
		}).fail(function(){
			alert("error email has not send !");
		});
	});

}) ;
