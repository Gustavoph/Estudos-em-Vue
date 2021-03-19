import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'

import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        //component: Inicio,
        name: 'inicio',
        components :{
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        components: {
            default: Usuario,
            menu: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props:true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editUser'}
        ]
    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },
    { 
        path: '*',
        redirect: '/usuario'
    }

    ]
})