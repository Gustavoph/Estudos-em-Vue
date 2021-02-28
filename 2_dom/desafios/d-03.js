new Vue({
    el:"#desafio",
    data:{
        valor: 0,
    },
    computed:{
        resultado(){
            return this.valor === 37 ?
            'VALOR IGUAL':
            'VALOR DIFERENTE'
            
        }
    },
    watch:{
        resultado(after, before){
            if(after === 'VALOR IGUAL'){
                setTimeout(() => {
                    this.valor = 0;
                }, 5000);
            }
        }
    }
})