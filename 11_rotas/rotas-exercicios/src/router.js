import Vue from 'vue'
import Router from 'vue-router'
import Usuario from './components/usuario/Usuario.vue'
import Inicio from './components/Inicio.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        component: Inicio
    },{
        path: '/usuario/:id',
        component: Usuario,
        props: true
    }
]
})

