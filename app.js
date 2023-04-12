const miapp = Vue.createApp({
        data () {
            return{
                showNav: false,
                nom: '',
                edat: '',
                gats:{
                }
            };
        },
        // watch: { //cuando cambia la data el watcher numero se ejecuta
        //   numero(nuevoValor, valorAnterior){
        //     console.log("El numero ha pasado de ser %s a %s", valorAnterior, nuevoValor);
        //   }
        // },
        methods: {
            ocultar(){
                this.showNav = !this.showNav
            },
            agregarGat: function(){
                this.gats[this.nom] = this.edat;
                this.nom = "";
                this.edat = "";
            }
        },
        computed:{
        }
    },
);

miapp.mount('#app');


