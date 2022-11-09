<template>
    <div class="fondo">
        <div class="row ">
            <img src="../assets/img-participantes/img-reto.png" alt="" class="img-3d-responder my-4"
                style="width:400px;">
        </div>
        <div class="">
            <div class="row">
                <h1 class="text-white">{{ preguntaReto }}</h1>
               
            </div>
            <div class="row">
                <div class="card my-5">
                    <div class="card-body p-4">
                        <div class="row" v-for="(r, index) in Retos.respuestas" :key="index">
                            <button class="btn btn-danger bt-respuestas my-2">
                                <router-link to="/start" class="text-white">{{ r.respuestaReto }}</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel"
                v-show="TokenParticipante" style="display: block; background-color: #00000054;" aria-modal="true"
                role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLiveLabel">Inicio sesión participante</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                @click.prevent="TokenParticipante = false"></button>
                        </div>
                        <div class="modal-body">
                            
                            <div class=" col-md-6 mx-auto">
                                <label for="" class="form-label text-secondary"><Strong> Ingresa el numero de
                                        documento</Strong></label>
                                <input type="text" class="form-control-plaintext text-center"
                                    style="border-bottom: 1px solid #ebcc24;" v-model="autenticacion.identificacion">

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                @click.prevent="TokenParticipante = false">Cerrar</button>
                            <button class="btn btn-warning my-3 bt-consulta" style="border-radius: 15px;width: 120px;"
                                @click.prevent="AutenticacionParticipante()">Consultar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datos: [],
            IdEscapeRoom: 0,
            IdReto: 0,
            Retos: [],
            preguntaReto: '',
            TokenParticipante: true,
            url: '',
            autenticacion: {
                identificacion: "",
                escapeRoomId: "",
                retoId: ""
            },
            ControlReto: {
                participanteId: 1,
                retoId: ""
            }
        }
    },
    mounted() {
        this.ValidarLocalStorage()
        this.CargarReto()
    },
    methods: {
        ValidarLocalStorage() {
            //console.log(window.localStorage.token)
            if (window.localStorage.token == '') {
                this.TokenParticipante = true
            }else{
                this.TokenParticipante = false
            }

            this.datos = this.$store.state.datosID
            for (let index = 0; index < this.datos.length; index++) {
                const element = this.datos[index];
                console.log(element)
                var idE = this.datos[0].split("=");
                this.IdEscapeRoom = idE
                console.log(idE[1], this.IdEscapeRoom)
                var idR  = this.datos[1].split("=");
                this.IdReto = idR[1]
                console.log(idR)
            }
        },
        AutenticacionParticipante() {
            console.log(this.autenticacion)
            this.autenticacion.escapeRoomId =  this.IdEscapeRoom
            this.autenticacion.retoId = this.IdReto
            this.axios.post('/GameControl/participante/login', this.autenticacion)
                .then(res => {
                    console.log(res.data, 'informacion participante')
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,

                    });
                })
        },
        CargarReto() {
            this.ControlReto.retoId = this.IdReto
            console.log(this.ControlReto)
            this.axios.post('/GameControl/reto', this.ControlReto,{ 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,

                    });
                })
        }
    },
}
</script>
<style scoped>
body {
    background-color: #f6a700;
    margin: 0;
    padding: 0;
}

.fondo {
    background-color: #f6a800b0;
    margin: 0;
    padding: 0;
}

.card {
    border: none;
    border-radius: 50px;
    width: 700px;
    margin: auto;
}

.bt-respuestas {
    border-radius: 15px;
}

.img-3d-responder {
    margin: auto;
    width: 150px;
}

@media (width: 600px) and (width: 1200px) {
    .img-3d-responder {
        margin: auto;
        width: 150px;
    }
}

@media screen and (max-width: 400px) {
    .img-3d-responder {

        top: 70px;
        left: 60px;
        width: 350px;
    }

    .card {
        border: none;
        border-radius: 50px 50px 15px 15px;
        width: 350px;
        margin: auto;
    }
}
</style>