new Vue({
    el: "#app",
    data: {
        iniciou: false,
        hor: 0,
        min: 0,
        seg: 0,
        contador: 0
    },
    computed:{

    },
    methods:{
        start(){
            this.iniciou = !this.iniciou
            contador = setInterval(() =>{
                if(this.seg < 59){
                    this.seg++;
                }else if(this.seg = 59){
                    this.seg = 0;
                    this.min++;
                }
                

            }, 10)
        },
        stop(){
            clearInterval(contador);
        },
        reset(){
            this.iniciou = !this.iniciou
            this.hor = 0;
            this.min = 0;
            this.seg = 0;
        }
    },
    watch:{
        min(after, before){
            if(after = 59){
                this.hor++;
                this.min = 0;
            }
            
        }
    }
})