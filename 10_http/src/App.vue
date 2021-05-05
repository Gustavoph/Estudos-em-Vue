<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="m in mensagens" 
		:key="m.texto" :variant="m.tipo">{{ m.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome: ">
				<b-form-input
				type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o Nome"
				></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail: ">
				<b-form-input
				type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o e-mail"
				></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar()" 
			variant="primary"
			size="lg"
			>Salvar</b-button>
			<b-button @click="consultar()" 
			variant="success"
			size="lg"
			class="ml-2"
			>Consultar Usuários</b-button>
		</b-card>

		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<p><strong>ID: </strong>{{ usuario.id }}</p>
				<p><strong>Nome: </strong>{{ usuario.nome }}</p>
				<p><strong>E-mail: </strong>{{ usuario.email }}</p>
				<b-button @click="consultar()" 
					variant="warning"
					size="lg"
					class="ml-2"
					>Carregar</b-button>
					
					<b-button @click="excluir(usuario.id)" 
					variant="danger"
					size="lg"
					class="ml-2"
					>Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import axios from 'axios'
export default {	
	data() {
		return {
			usuario: {
				nome: '',
				email: ''
			},
			usuarios: [],
			mensagens: []
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `${this.id}` : '.json'
			this.$http[metodo](`usuarios${finalUrl}`, this.usuario)
				.then(()=> {
					this.limpar();
					this.mensagens.push({
						texto: 'Operação realizada com sucesso',
						tipo: 'success'
					})
			});
		},
		carregar(id){
			this.id = id;
			this.usuario = { ...this.usuario[id] }
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.limpar()
					this.consultar()
					this.mensagens.push({
						texto: 'Exclusão efetuada com sucesso',
						tipo: 'success'
					})
				})
				.catch(err => {
					this.mensagens.push({
						texto: 'Problema para excluir',
						tipo: 'danger'
					})
				})

		},
		consultar() {
			this.$http.get('usuarios.json')
				.then( res => {
					this.usuarios = res.data;
				})
		},
		consultaLocal(){
			const url_base = 'https://curso-vue-db62a-default-rtdb.firebaseio.com/'

			axios(`${url_base}usuarios.json`).then( res =>{
				this.usuarios = res.data
				
			})
		}
	}
	// created(){
	// 	this.$req.post('usuario.json', {
	// 		nome: 'Maria',
	// 		email: 'maria@gmail.com'
	// 	}).then((res) => console.log(res));
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
