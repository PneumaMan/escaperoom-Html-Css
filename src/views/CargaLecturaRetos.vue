<template>
    <NavbarParticipantes />
    <div class="container">
        <div class="row">
            <img src="../assets/Logo-Escape-room-Rojo.png" alt="" class="Lg-Escape">
        </div>
        <!-- <h3 class="mt-2">Escanea el codigo QR</h3> -->
        <div class="p-4" v-show="!verScanner">
            <div class="row">
                <h3>{{ siguienteReto }}</h3>
            </div>
            <div class="row">
                <p class="text-secondary">presiona la camara y escanea el codigo QR </p>
            </div>
            <div class="row">
                <button @click="verScanner = true" style="background-color: transparent; border: none;">
                    <div class="row my-3 mx-auto" style="position: relative;">
                        <div class="blob mt-5">
                        </div>
                        <img style="width:400px; left: 20rem;" src="../assets/img-participantes/Camera.png" alt=""
                            class="img-3d-carga">
                    </div>
                </button>
            </div>
        </div>
        <div class="p-4" v-show="verScanner">
            <div class="card mx-auto my-5">
                <div class="card-body">
                    <!--  <myQRScanner /> -->
                    <p>datos: {{ vars }}</p>
                    <hr />
                    <p>IdEscapeRoom: {{ IdEscapeRoom }}</p>
                    <p>IdReto: {{ IdReto }}</p>
                    <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { QrcodeStream } from 'vue3-qrcode-reader'
import myQRScanner from "@/components/myQRScanner.vue";
import { mapMutations, mapActions, mapState } from "vuex";
import NavbarParticipantes from '@/components/Navbar-Participante.vue'
export default {
    data() {
        return {
            verScanner: false,
            errorQr: '',
            decodedString: '',
            datos: '',
            Valores: '',
            IdEscapeRoom: '',
            IdReto: '',
            siguienteReto: ''
        }
    },
    components: {
        myQRScanner: myQRScanner,
        QrcodeStream,
        NavbarParticipantes
    },
    mounted() {
        this.siguienteRet()
    },
    methods: {
        ...mapState(['nextReto']),
        ...mapMutations(['obtenerIdQR']),
        ...mapActions(['guardarDatosQr']),
        async onInit(promise) {
            // show loading indicator

            try {
                const { capabilities } = await promise

                // successfully initialized
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.errorQr = "user denied camera access permisson"
                } else if (error.name === 'NotFoundError') {
                    this.errorQr = "no suitable camera device installed"
                } else if (error.name === 'NotSupportedError') {
                    this.errorQr = "page is not served over HTTPS (or localhost)"
                } else if (error.name === 'NotReadableError') {
                    this.errorQr = "maybe camera is already in use"
                } else if (error.name === 'OverconstrainedError') {
                    this.errorQr = "did you requested the front camera although there is none?"
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.errorQr = "browser seems to be lacking features"
                }
            } finally {
                // hide loading indicator
            }
        },
        onDecode(decodedString) {
            this.decodedString = decodedString
            console.log(this.decodedString)

            var query = this.decodedString;
            var datos = query.split("/")
            console.log(datos[1])
            var vars = datos[1].split("&");
            console.log(vars)//objeto con los id de escape room y reto
            this.datos = vars

            var idE = this.datos[0].split("=");
            console.log(idE[1], this.IdEscapeRoom)
            this.IdEscapeRoom = idE[1]
            this.$store.state.IdEscapeRoom = idE[1]
            if (this.datos[1] != undefined) {
                var idR = this.datos[1].split("=");
                this.IdReto = idR[1]
                this.$store.state.IdReto = idR[1]
                console.log(idR)
            }
            setTimeout(function(){
                if (window.localStorage.participanteId == null) {
                    this.$router.push({ path: '/login-participantes' })
                } else {
                    this.$router.push({ path: '/responder-retos' })
                }
            }, 5000);

            

        },
        siguienteRet() {
            this.siguienteReto = this.$store.state.nextReto
        }
    },
}
</script>
<style scoped>
.blob {
    overflow: hidden;
    width: 18rem;
    height: 18rem;
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    background-color: #eb1e1eb0;
    background-size: cover;
    background-position: center;
    position: absolute;
    z-index: -1;
    left: 26rem;
    margin: auto !important;
}

.img-3d-carga {
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 320px;
    width: 90px;

}

.Lg-Escape {
    width: 450px;
    margin: auto;
}

@media (width: 600px) and (width: 1200px) {
    .Lg-Escape {
        width: 320px;
        margin: auto;
    }

    .blob {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #eb1e1eb0;
        background-size: cover;
        background-position: center;
        position: absolute;
        z-index: -1;
    }

    .img-3d-carga {
        position: absolute;
        z-index: 1;
        top: 60px;
        left: 420px;
        width: 100px;

    }

}

@media (min-width: 401px) and (max-width: 600px) {
    .Lg-Escape {
        width: 320px;
        margin: auto;
    }

    .blob {
        overflow: hidden;
        width: 16rem;
        height: 16rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #eb1e1eb0;
        background-size: cover;
        background-position: center;
        left: 75px !important;
        top: 20px !important;
        z-index: -1;
        margin: auto;
    }

    .img-3d-carga {
        position: absolute;
        z-index: 1;
        top: 50px;
        width: 300px;
        left: 0 !important;
    }

}

@media screen and (max-width: 400px) {
    .Lg-Escape {
        width: 300px;
        margin: auto;
    }

    .blob {
        overflow: hidden;
        width: 14rem;
        height: 14rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #eb1e1eb0;
        background-size: cover;
        background-position: center;
        left: 55px !important;
        top: 20px !important;
        z-index: -1;
    }

    .img-3d-carga {
        position: absolute;
        z-index: 1;
        top: 50px;
        width: 320px;
        left: 0 !important;
    }
}
</style>
