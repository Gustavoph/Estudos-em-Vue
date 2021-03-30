import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'
//import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

const Usuario = import(/* webpackChunckName: "usuario" */'./components/usuario/Usuario.vue');
const UsuarioLista = import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioLista.vue');
const UsuarioDetalhe = import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioDetalhe');
const UsuarioEditar = import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioEditar');

Vue.use(Router)

 const router = new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition){
        if(savedPosition) {
            return savedPosition
        } else if (to.hash){
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }  
        }
    },
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
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) =>{
                    //console.log('Antes de entrar em usuarios detalhe') 
                    next();
                } },
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

router.beforeEach((to, from , next)=>{
    //console.log('Antes das rotas -> global')
    next()
    // if(to.path !== '/usuario'){ next('/usuario') }
})

export default router