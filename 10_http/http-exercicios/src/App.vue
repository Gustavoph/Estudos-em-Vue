<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens"
		:key="mensagem.texto"
		:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome: ">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe seu nome" />
			</b-form-group>
			<b-form-group label="E-mail: ">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe seu email" />
			</b-form-group>
			<hr>
			<b-button variant="dark" size="lg" @click.prevent="salvar()">Salvar</b-button>
			<b-button variant="success" size="lg" class="ml-2" @click.prevent="obterUsuario()">Obter dados</b-button>
			<hr>
			<b-list-group>
				<b-list-group-tem v-for="(usuario, id) in usuarios" :key="id">
					<strong>Nome: </strong> {{ usuario.nome }}<br>
					<strong>E-mail: </strong> {{ usuario.email }}<br>
					<strong>ID: </strong> {{ usuario.id }} <br>
					<b-button variant="warning" 
					@click="editar(usuario.id)"
					class="mr-2"
					size="lg">Editar</b-button>
					<b-button variant="danger" 
					@click="excluir(usuario.id)"
					size="lg">Excluir</b-button>
					<hr>
				</b-list-group-tem>
			</b-list-group>
		</b-card>
	</div>
</template>

<script>
export default {
	data(){
		return {
			mensagens: [],
			usuario: {
				nome: '',
				email: ''
			},
			usuarios: []
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		editar(id){
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`).then(() =>{
				this.limpar()
			})
			.catch(()=>{
				this.mensagens.push({
					texto:'Problema para excluir',
					tipo: 'danger'
				})
			})
		},
		salvar() {

			const finalUrl = this.id ? `/${this.id}` : '.json'
			const metodo = this.id ? 'patch' : 'post'

			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then( () =>{
				this.limpar()
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success'
				})
			})
		},
		obterUsuario() {
			this.$http.get('usuarios.json').then(res =>{
				this.usuarios = res.data
			})
		}
	}
	// created(){
	// 	
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
