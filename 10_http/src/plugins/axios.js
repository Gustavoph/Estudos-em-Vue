import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL : 'https://curso-vue-db62a-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization" : "abc123"
            }
        });

        Vue.prototype.$http.interceptors.request.use(config =>{
            // if(config.method === 'post') {
            //     config.method = 'put' 
            // }
            //console.log(config.method)            
            return config
        }, err => Promise.reject(err));

        Vue.prototype.$http.interceptors.response.use(res =>{
            const array = []
            for(let chave in res.data){
                array.push({id: chave, ...res.data[chave]})
            }

            res.data = array;
            return res
        }, err => Promise.reject(err));
    }
})