<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="Nome">
          <input type="text" placeholder="Digite seu nome" v-model="nome"/>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <input type="text" placeholder="Digite seu sobrenome" v-model="sobrenome"/>
        </Rotulo>
        <Rotulo nome="E-mail">
          <input type="email" placeholder="Digite seu e-mail" v-model="email"/>
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" placeholder="Digite sua senha" v-model="senha"/>
        </Rotulo>
        <Rotulo nome="Escolha o que mais te descreve">
          Gosta da Esportes<input type="checkbox" /> Não gosta da Esportes<input
            type="checkbox"
          />
        </Rotulo>
        <Rotulo nome="Armazenar dados">
          <span>Sim</span><input class="mr-4" type="radio" value="Não" />
          <span>Não</span><input class="mr-4" type="radio" value="Não" />
        </Rotulo>
        <Rotulo nome="Categoria">
          <select>
            <option value=""></option>
          </select>
        </Rotulo>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
        <button @click="enviado">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";

export default {
  name: "app",
  components: { Rotulo },
  data() {
    return {
      enviado: false,
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
