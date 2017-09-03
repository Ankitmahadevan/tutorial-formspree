$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "http://formspree.io/ankit.kumar.yadav0001@gmail.com", 
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
			alert("Email enviado com sucesso!");
		}).fail(function(){
			alert("Erro ao enviar email!");
		});
	});

}) ;
