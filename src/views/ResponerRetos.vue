<template>
    <div class="fondo">
        <div class="row ">
            <img src="../assets/img-participantes/img-reto.png" alt="" class="img-3d-responder my-4" style="width:400px;">
        </div>
        <div class="" >
        <div class="row">
            <h1 class="text-white">{{preguntaReto}}</h1>
        </div>
        <div class="row">
            <div class="card my-5">
                <div class="card-body p-4">
                    <div class="row" v-for="(r, index) in Retos.respuestas" :key="index">
                            <button class="btn btn-danger bt-respuestas my-2">
                                <router-link to="/start" class="text-white">{{r.respuestaReto}}</router-link>
                            </button>
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
            datos:[],
            IdEscapeRoom:0,
            IdReto:0,
            Retos:[],
            preguntaReto:''
        }
    },
    mounted() {
        this.listarRetos()
    },
    methods: {
        listarRetos(){
            this.datos = this.$store.state.datosID
            for (let index = 0; index < this.datos.length; index++) {
                const element = this.datos[index];
                console.log(element)
                this.IdEscapeRoom = this.datos[0]
                var idE =this.datos[0].split("=");
                console.log(idE[1])
                this.IdReto = this.datos[1].split("=");
                var idR = this.IdReto[1]
                console.log(idR)
            }

            this.axios.get(`/Retos/${idR}`,  { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    this.Retos = res.data.data
                    console.log(this.Retos)
                    this.preguntaReto = this.Retos.preguntaReto
                    
                })
                .catch(e => {
                    console.log(e);
                })

        }
    },
}
</script>
<style scoped>
body{
    background-color: #f6a700;
    margin: 0;
    padding: 0;
}
.fondo{
    background-color: #f6a800b0;
    margin: 0;
    padding: 0;
}

.card{
    border: none;
    border-radius: 50px;
    width: 700px;
    margin: auto;
}

.bt-respuestas{
    border-radius:15px ;
}

.img-3d-responder {
    margin: auto;
    width: 150px;
    }
@media (width: 600px)  and (width: 1200px) {
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
.card{
    border: none;
    border-radius: 50px 50px 15px 15px;
    width: 350px;
    margin: auto;
}
}
</style>