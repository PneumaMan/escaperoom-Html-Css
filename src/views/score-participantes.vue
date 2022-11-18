<template>
    <div class="p-4 premio">
        <NavbarParticipantes :msg="msn" />
        <div class="row">
            <div class="card col-md-6 col-8 mx-auto t-premio">
                <div class="card-body">
                    <div class="row">
                        <img src="../assets/copas.png" alt="" class="copas-premio">
                    </div>
                    <div class="row">
                        <h3 class="text-success">Felicitaciones !</h3>
                    </div>
                    <div class="row">
                        <p> has terminado todo el Escape room cardiovascular</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useSignalR } from '@dreamonkey/vue-signalr';
import { inject } from 'vue';
import NavbarParticipantes from '@/components/Navbar-Participante.vue'
import { ref } from 'vue'
import { mapState} from "vuex";

export default {
    data() {
        return {
            escapeId: null
        }
    },
    components: {
        NavbarParticipantes
    },
    computed: {
    ...mapState(["participanteId", "IdEscapeRoom"]),
  },
 setup() {
    const signalr = useSignalR();

    const msn = ref('')

   /*  signalr.on('TransferTimesEscape', ( message ) => {
        //console.log(message)
        let escape = message.find({ 
            where: {
                escapeRoomIdEncrypt:  this.$store.state.IdEscapeRoom
            }
        });
    console.log('hola' , escape)
    }); */

    /* signalr.invoke('SendScoreParticipante', 'g4jqZjQII\\jUyezUwa2J1A¬¬', 'Y\V4hwj\o3sHPWQPYqMOJA¬¬' ); */

     signalr.on('TransferTimesEscapeParticipante', (message ) => {
        console.log(message)
     })

     signalr.on('TransferTimesEscape', (message ) => {
        console.log(message)
        msn.value = message
        console.log(msn.value) 
        //this.escapesScore = msn.value
/*         this.$state.store.score = msn.value */

        //this.$state.store.score = message.participante.timeScore
        
     });
   // let index = msn.value.findIndex(item => item.escapeRoomIdEncrypt ==  this.escapeId);
    //console.log(index)
     
    /* let escape = msn.value.find({ 
            where: {
                escapeRoomIdEncrypt:  this.$store.state.IdEscapeRoom
            }
        });

        this.$store.state.score = escape.participantes.find({
                where: {
                    participanteIdEncrypt:  this.$store.state.participanteId
               }
            }); */
    return {msn}

  },

  mounted() {
    this.listar()
    this.listar2()
  },
  methods:{
    listar(){
      this.axios.get('/escapetimer')
      .then((response) => {
         console.log(response)

      })
      .catch((e)=>{
        console.log('error' + e);
      })
      
    },
    listar2(){
      this.axios.get(`/escapetimer/${this.$store.state.IdEscapeRoom}/${this.$store.state.participanteId}`)
      .then((response) => {
         console.log(response)

      })
      .catch((e)=>{
        console.log('error' + e);
      })
      
    }
  }
}
</script>
<style scoped>
.copas-premio {
    width: 450px;
    margin: auto;
}

.t-premio {
    border-radius: 10px;
    padding: 10px;
    /*box-shadow: 15px 10px #8888888a; */
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
}

.premio {
    background: rgb(185, 20, 20);
    background: linear-gradient(90deg, rgba(185, 20, 20, 1) 11%, rgba(96, 15, 150, 1) 86%);
}
</style>