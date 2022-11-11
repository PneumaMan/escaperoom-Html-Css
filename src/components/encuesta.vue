<template>
    <div class="container">
        <div class="p-4">
            <div class="row">
                <h1 class="mx-auto">Encuesta de satisfacción</h1>
            </div>
            <div class="card t-encu">
                <div class="card-body">
                    <form action="">
                        <div class="mb-3">
                            <label for="" class="form-label">En una escala del 0 al 10, ¿Qué probabilidades hay de que recomiende este evento a tus familiares, colegas o amigos?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta1">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">¿Realizaria otro escape room como este en el futuro?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta2">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">¿Desea dejarnos sus comentarios para saber cómo podemos mejorar ?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta3">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">¿Que le parecio el evento?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta4"
                                >
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">¿tiene algina observacion sobre los retos?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta5">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">¿Que le parecio el lugar en el que realizo en escape room?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta6">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">¿La informacion que le proporcionaron al iniciar el escape si fue la apropiada?</label>
                            <input type="text" class="form-control in-trans" id="" v-model="RespuestasEncuestas.respuesta7">
                        </div>
                    </form>
                    <div class="row mx-auto">
                        <button class="btn btn-outline-danger col-4 mx-auto" @click.prevent="encuesta()">Guardar</button>
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
            RespuestasEncuestas: {
                idParticipante: "",
                respuesta1: "",
                respuesta2: "",
                respuesta3: "",
                respuesta4: "",
                respuesta5: "",
                respuesta6: "",
                respuesta7: "",
                respuesta8: "",
                respuesta9: "",
                respuesta10: ""
            },
            RespuestasE:[]
        }
    },
    methods: {
        encuesta() {
            this.RespuestasEncuestas.idParticipante = this.$store.state.participanteId
            console.log(this.RespuestasEncuestas)
            this.axios.post('/GameControl/participante/encuesta', this.RespuestasEncuestas)
                .then(res => {
                    console.log(res.data);
                    this.RespuestasE.push(res.data)
                })
                .catch(e => {
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
.t-encu{
    background-color: rgba(255, 255, 255, 0.3);
    border-radius:8px;
    border: solid 1px rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
}
.in-trans{
    background-color: rgba(255, 255, 255, 0.3);
    border-radius:8px;
    border: solid 1px rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
}
</style>