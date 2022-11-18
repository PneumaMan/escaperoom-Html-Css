<template>
    <div class="container p-4">
        <div class="row">
            <img src="../assets/Logo-Escape-room-Rojo.png" alt="" class="Lg-Escape-txt-out">
        </div>
        <div class="row my-5" v-show="RespuestasError">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">❌</th>
                            <th scope="col">Reto</th>
                            <th scope="col">Pregunta</th>
                            <th scope="col">Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in respuestasParticipante" :key="index">
                            <th>❌</th>
                            <td>{{ item.reto.nombreReto}}</td>
                            <td>{{ item.reto.preguntaReto }}</td>
                           <td><button class="btn btn-outline-warning" @click.prevent="CorregirRespusta(item.reto.nombreReto)">Corregir</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="" v-show="txtEnd">
            <div class="row mb-5">
                <h3 class="mt-4">LA CLAVE PARA SALIR OBTENDRÁS, AL ESTE TEXTO BIEN COMPLETAR</h3>
            </div>
            <div class="row">
            <div class="text  col-md-7 mt-3">
                <p>
                    En el continuum cardiovascular en Colombia, tiene como factores de riesgo protagónicos las <span id="0" > 1</span>
                    (DISLIPIDEMIAS: RESPUESTA CORRECTA) con un riesgo poblacional atribuible de 49%, seguido por el
                    tabaquismo con un 35%, la <span id="1"> 2</span> (DIABETES E HIPERTENSIÓN) con un 26.8% juntas. Sin dejar de
                    reconocer que el factor hereditario juega un rol importante, mientras mas factores se sumen, y
                    mientras más mal controlados estén el<span id="2">3</span> (RIESGO CARDIOVASCULAR) incrementa.
                </p>
                <p>
                    Una vez inicia la enfermedad cardiovascular, la evolución hacía la<span id="3">4</span> (FALLA CARDIACA) es
                    inevitable en gran cantidad de personas. Las arritmias hacen parte de las complicaciones y la
                    fibrilación auricular aparece. La anticuoagulación es la mejor estrategia para prevenir un ACV, y
                    dentro de las opciones para elegir cual DOAC, solo uno cuenta con <span id="4">5</span>(REVERSOR).
                </p>


            </div>
            <div class="col-md-4">
                <div>
                    <h4>Ordena las llaves </h4>
                    <hr />
                    <!-- <div class="list-group-item item-llaves" v-for="item in llaves" :key="item.id" draggable="true">
                        <button style="border: none; background-color: transparent;" @click.prevent="AgregarPalabra(item)"> {{ item.llave }}</button>
                    </div> -->
                    <div class=" ">
                        <draggable class="dragArea list-group " :list="list" @change="log" >
                        <div
                            class="list-group-item item-llaves bg-gray-300 m-1 p-3 rounded-md text-center"
                            v-for="element in list"
                            :key="element.llave"
                        >
                        {{ element }}
                        </div>
                        </draggable>
                    </div>
                </div>
            </div>
        </div>

            <div class="row">
                <button class="btn btn-danger col-md-4 mx-auto" @click.prevent="EscaparEscape(list)">Comprobar</button>
            </div>
            
        </div>
    </div>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next'
export default {
    components: {
      draggable: VueDraggableNext,
    },
    data() {
        return {
            enabled: true,
            dragging: false,
            list: [],
            respuestasParticipante: [],
            txtEnd: false,
            RespuestasError: false,
            camposDisponibles: [],
            respuestasTexto:[],
            escapar:{
                participanteId: "",
                llaves: []
                }
        }
    },
    mounted() {
        this.ValidarLocalStorage()
        this.validacionFinal()
        this.CargarArrayFinal()
    },
    methods: {
        log(event) {
        console.log(event)
        console.log(this.list)
      },
        ValidarLocalStorage() {
            if (window.localStorage.participanteId == null) {
                //this.TokenParticipante = true
                this.$router.push({ path: '/login-participantes' })
            } else {
                this.$store.state.participanteId = window.localStorage.participanteId
                this.$store.state.nombreParticipante = window.localStorage.nombreParticipante
                console.log(this.$store.state.participanteId)
            }
        },
        validacionFinal() {
            const participanteId = this.$store.state.participanteId
            //const participanteId = 'J6Qit9CTd0ySv1oHSB6kGg¬¬'
            console.log({ participanteId })
            this.axios.post('/GameControl/escape-room/escapar/validacion', { participanteId })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    console.log(res.data);

                    if (res.data.data.escaparParticipante == false) {
                        this.RespuestasError = true
                        const array = res.data.data.respuestasParticipante
                        this.respuestasParticipante =res.data.data.respuestasParticipante
                        console.log(this.respuestasParticipante)

                        //this.respuestasParticipante = res.data.data.respuestasParticipante
                        

                    }
                    if (res.data.data.escaparParticipante == true) {
                        this.list = res.data.data.llaves
                        this.txtEnd = true

                    }
                })
                .catch(e => {
                    console.log(e)
                })
        },
        CargarArrayFinal(){
            console.log(this.list)
            for (let index = 0; index < this.list.length; index++) {
                const element =this.list[index];
                this.respuestasTexto.push(element)
                //console.log( this.respuestasTexto)
            }
            this.$store.state.arrayLLaves = this.respuestasTexto 
            console.log(this.$store.state.arrayLLaves, 'array vuex')  
        },
        CorregirRespusta(item){
            this.$store.state.finish = false
            this.$store.state.nextReto = 'Corrige el ' + item
            console.log(this.$store.state.nextReto)
            this.$router.push({ path: '/scan-qr' })
        },
        EscaparEscape(list){
            this.escapar.participanteId= this.$store.state.participanteId
            this.escapar.llaves = list
            console.log(this.escapar , "Escapar")
            console.log(list, 'lista')

            this.axios.post('/GameControl/escape-room/escapar', this.escapar)
                .then(res => {
                    console.log(res.data);
                    this.$swal({
                            position: 'top-end',
                            icon: 'success',
                            text: res.data.message,
                            showConfirmButton: false,
                            timer: 1500
                    })
                    this.$router.push({ path: '/lectura-feedback' })
                })
                .catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,
                        //text: e.response.data.Errors[0].ErrorMessage

                    });
                }) 

        }
    },
}
</script>
<style scoped>
.Lg-Escape-txt-out {
    width: 450px;
    margin: auto;
    margin-top: 10px;
}

.list-group-item {
    display: inline;
    padding-left: 3px;
    padding-right: 3px;
    width: auto;
}

.item-llaves {
    background-color: cornflowerblue;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    color: aliceblue;
}

span{
    display: inline-block;
    background-color: #ccc;
    width: 100px;
    height: 20px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    line-height: 20px;
}
</style>