new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: 'perigo',
		classeDigitada: '',
		classe2: '',
		aceitaClass: '',
		pode: true,
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque' ?
				'encolher' : 'destaque' 
			}, 1000)

		},
		iniciarProgresso() {
			let valor = 0;
			const intervalo = setInterval(()=>{
				valor+=5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(intervalo)
			}, 500)
		},
		setPerigo(e){
			if(e.target.value == 'true'){
				this.pode = true;
			}else if(e.target.value == 'false'){
				this.pode = false;
			}
		}
	}
})
