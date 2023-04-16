const miapp = Vue.createApp({
        data () {
            return{
                showNav: true,
                showGat: false,
                nom: '',
                edat: '',
                gats:{
                    'Mishi':2
                },
                gat: '',
                idx: 0
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
            getIndexGat: function(index){
                return index + 1;
            },
            agregarGat: function(){
                this.gats[this.nom] = this.edat;
                this.showGat = true;
                this.nom = "";
                this.edat = "";
            },
            setGat(nom){
                this.gat = nom;
            },
            eliminarGat(){
                delete this.gats[this.gat];
                this.gat = '';
            },
            rellenarGat(nom,edat){
                this.nom = nom;
                this.edat = edat;
            },



        },
        computed:{
        }
    },
);
function mostrarDialogo() {
    var miDialogo = document.getElementById("miDialogo");
    miDialogo.showModal();
}

function cerrarDialogo() {
    var miDialogo = document.getElementById("miDialogo");
    miDialogo.close();
}
miapp.mount('#app');


