<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong> {{ nome }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: {
        // nome: [String, Array]
        nome:{
            type: String,
            required: true,
            default: 'Anônimo'
            //default: function(){ return Array(10).fill(0).join(',')}
        },
        idade: Number
        //nome: String
    },
    data(){
        return{
            
        }
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
                this.nome = 'Gustavo'
                this.$emit('nomeMudou', this.nome);
            }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
