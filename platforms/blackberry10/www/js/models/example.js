(function(){

	App.ExampleModel = DS.Model.extend({
		title: DS.attr('string'),
		author: DS.attr('string'),
	});

	App.ExampleModel.FIXTURES = [
		{
			id: 1,
			title: 'hola 1',
			author: 'yo'
		},
		{
			id: 2,
			title: 'hola 12',
			author: 'tu'
		},
		{
			id: 3,
			title: 'hola 13',
			author: 'el'
		}
	];
})();