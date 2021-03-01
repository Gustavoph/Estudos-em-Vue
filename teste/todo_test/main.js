new Vue({
    el: '#app',
    data:{
        tasks: [],
        digitado: ''
    },
    methods:{
        addTasks(e){
            const task = e.target.value;
            this.tasks.unshift(task)
        }
    }
})