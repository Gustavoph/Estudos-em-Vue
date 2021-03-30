import Vue from 'vue'
import Router from 'vue-router'
import Usuario from './components/usuario/Usuario.vue'
import Inicio from './components/Inicio.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'



Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },{
        path: '/usuario',
        components: {
            default: Usuario,
            menu: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true,
            name: 'editarUsuario' },

        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }
]
})

