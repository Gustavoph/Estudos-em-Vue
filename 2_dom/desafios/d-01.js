new Vue({
    el:"#desafio",
    data:{
        nome: 'Gustavo',
        idade: 18,
        imagem: "https://th.bing.com/th/id/Rd28c78ed15bb8f2b7a1f46a1a4c5553d?rik=ffBGHVQiAwqlSA&riu=http%3a%2f%2fwww.nasa.gov%2fimages%2fcontent%2f453945main_2010-3353_full.jpg&ehk=7D41ndvmejWTl4R7Vs5Zt3jeeMyr45DmozlJ4PWqib4%3d&risl=&pid=ImgRaw"
    },
    methods:{
        multIdade(){
            return this.idade * 3;
        },
        random(){
            const result = Math.random() * 1;
            return result.toFixed(1);
        }
    }
})