new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('Você clicou no botão');
        },
        addLetter(e){
            this.valor = e.target.value;    
        }
    }
})