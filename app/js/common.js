$(function() {

	$('#btn-form').click(function() {		
		$('#modalForm').modal('toggle'); //toggle modal form
	});

	//////////////////////////////////////////////////
	//Validation form
	// $('#form').validate({
	// 	rules: {
	//    name: {
	//    required: true,
	//    minlength: 2
	//    }
	// 	},
	// 	messages: {
	//    name: {
	//    required: "Поле 'Имя' обязательно к заполнению",
	//    minlength: "Введите не менее 2-х символов в поле 'Имя'"
	//    },
	//    email: {
	//    required: "Поле 'Email' обязательно к заполнению",
	//    email: "Необходим формат адреса email" 
	//    },
	//    city: "Поле 'Город' обязательно к заполнению"
	// 	}
	//    });

////////////////////////////////////////////
	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка прийнята");
			$('#modalForm').modal('toggle');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	
});
