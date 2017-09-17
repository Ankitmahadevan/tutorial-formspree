$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    method: "post",
			
	    url: "https://formspree.io/ankit54321yy@gmail.com", 
	  
	    data: "{
	    	email: $("#email").val(),
	    	message: $("#message").val()
	    }",
		contentType: "application/json; charset=utf-8",       
	    dataType: "json",
		}).done(function(){
			$("#email").val("");
			$("#message").val("");
			alert("Email successfully sent!");
		}).fail(function(){
			alert("error email has not send !");
		});
	});

}) ;
