new Vue({
	el: '#desafio',
	data: {
		condicional1: true,
		condicional2: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		alunos: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		games:[
			{id: 1, name: 'League of legends', price: 0},
			{id: 2, name: 'Call of Duty', price: 100},
			{id: 3, name: 'Minecraft', price: 14.99},
		]
	}
});
