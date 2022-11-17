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
                            <th scope="col"></th>
                            <th scope="col">Reto</th>
                            <th scope="col">Pregunta</th>
                            <th scope="col">Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in respuestasParticipante" :key="index">
                            <th>❌</th>
                            <td>{{ item.nombreReto }}</td>
                            <td>{{ item.preguntaReto }}</td>
                            <td>{{ item }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="" v-show="txtEnd">
            <div class="row">
                <h3 class="mt-4">LA CLAVE PARA SALIR OBTENDRÁS, AL ESTE TEXTO BIEN COMPLETAR</h3>
            </div>
            <div class="text">
                <div class="row">
                    En el continuum cardiovascular en Colombia, tiene como factores de riesgo protagónicos las 
                    <div class="box_respuesta ml-2">
                        <draggable class="list-group" :list="campo1">
                            <div class="list-group-item" v-for="llave in campo1" :key="llave" group="task">
                                {{ llave }}
                            </div>
                        </draggable>
                    </div> (DISLIPIDEMIAS: RESPUESTA CORRECTA) con un riesgo poblacional
                    atribuible de 49%, seguido por el
                    tabaquismo con un 35%, la 
                    <div class="box_respuesta ml-2">
                        <draggable class="list-group" :list="campo2">
                            <div class="list-group-item" v-for="llave in campo2" :key="llave" group="task">
                                {{ llave }}
                            </div>
                        </draggable>
                    </div> (DIABETES E HIPERTENSIÓN) con un
                    26.8% juntas. Sin dejar de
                    reconocer que el factor hereditario juega un rol importante, mientras mas factores se sumen, y
                    mientras
                    más mal controlados estén el 
                    <div class="box_respuesta ml-2">
                        <draggable class="list-group" :list="campo3">
                            <div class="list-group-item" v-for="llave in campo3" :key="llave" group="task">
                                {{ llave }}
                            </div>
                        </draggable>
                    </div> (RIESGO CARDIOVASCULAR)
                    incrementa.
                </div>
                <div class="row">
                    Una vez inicia la enfermedad cardiovascular, la evolución hacía la
                    <div class="box_respuesta ml-2">
                        <draggable class="list-group" :list="campo4">
                            <div class="list-group-item" v-for="llave in campo4" :key="llave" group="task">
                                {{ llave }}
                            </div>
                        </draggable>
                    </div> (FALLA CARDIACA) es
                    inevitable en gran cantidad de personas. Las arritmias hacen parte de las complicaciones y la
                    fibrilación auricular aparece. La anticuoagulación es la mejor estrategia para prevenir un ACV, y
                    dentro
                    de las opciones para elegir cual DOAC, solo uno cuenta con
                    <div class="box_respuesta ml-2">
                        <draggable class="list-group" :list="campo5">
                            <div class="list-group-item" v-for="llave in campo5" :key="llave" group="task">
                                {{ llave }}
                            </div>
                        </draggable>
                    </div>
                    (REVERSOR).
                </div>
            </div>
            <div class="drop-zone">
                <div @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
                    <h4>Llaves obtenidas </h4>
                    <hr />
                        <div class="list-group-item item-llaves" v-for="item in llaves" :key="item.id" draggable="true"
                        @dragstart="startDrag($event, item )" >
                            {{ item.llave }}
                        </div>
                    
                </div>
            </div>
            <div class="drop-zone my-5">
                <div @drop="onDrop($event, 2)" @dragenter.prevent  @dragover.prevent>
                    <h4>Llaves obtenidas </h4>
                    <hr />
                        <div class="list-group-item item-llaves" v-for="item in campo1" :key="item.id" draggable="true"
                        @dragstart="startDrag($event, item )" >
                            {{ item.llave }}
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    data() {
        return {
            drag: false,
            llaves: [
                {
                    id:1,
                    llave: 'prueba 1'
                },
                {
                    id:2,
                    llave: 'prueba 2'
                },
                {
                    id:3,
                    llave: 'prueba 3'
                },
                {
                    id:4,
                    llave: 'prueba 4'
                },
                {
                    id:5,
                    llave: 'prueba 5'
                },
            ],
            respuestasParticipante: [],
            txtEnd: true,
            RespuestasError: false,
            campo1: [
                {
                    id:1,
                    llave: ''
                }
            ],
            campo2: [],
            campo3: [],
            campo4: [],
            campo5: [],

        }
    },
    mounted() {
        //this.ValidarLocalStorage()
    },
    methods: {
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
            console.log({ participanteId })
            this.axios.post('/GameControl/escape-room/escapar/validacion', { participanteId })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    console.log(res.data);
                    const escaparParticipante = res.data.data.escaparParticipante

                    if (isSuccess == true && escaparParticipante == true) {
                        this.llaves = res.data.data.llaves
                        this.txtEnd = true

                    }
                    if (isSuccess == true && escaparParticipante == false) {
                        const array = res.data.data.respuestasParticipante
                        for (let index = 0; index < array.length; index++) {
                            this.respuestasParticipante = array[index].reto;

                        }
                        //this.respuestasParticipante = res.data.data.respuestasParticipante
                        this.RespuestasError = true

                    }
                })
                .catch(e => {
                    console.log(e)
                })
        },
        startDrag(event, item ){
            console.log(item)
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('itemID', item.id)
        },
        onDrop(event, list){
            const itemID = event.dataTransfer.getData(item.id)
            const item = items.value.find((item) => item.id == itemID)
            item.list = list 

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

.box_respuesta {
    width: 50px;
    height: 20px;
    background-color: aqua;
    border-bottom: 1px solig black !important;
}

.list-group-item{
    display:inline;
     padding-left:3px;
     padding-right:3px;
     width: 100px;
}

.item-llaves{
    background-color: cornflowerblue;
    margin: 5px;
    padding: 5px;
    border-radius:10px ;
    color: aliceblue;
}
</style>