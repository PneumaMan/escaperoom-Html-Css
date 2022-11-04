<template>
    <h3 class="mt-5">Escanea el codigo QR</h3>
    <div class="p-4" v-show="!verScanner">
        <div class="row">
            <p class="text-secondary">presiona la camara </p>
        </div>
        <div class="row">
            <button @click="verScanner = true" style="background-color: transparent; border: none;">
                <div class="row my-3" style="position: relative; left: 0; top: 0;">
                    <div class="blob mx-auto mt-5">
                    </div>
                    <img src="../assets/img-participantes/Camera.png" alt="" class="img-3d-carga">
                </div>
            </button>
        </div>
    </div>
    <div class="p-4" v-show="verScanner">
        <div class="card mx-auto my-5">
            <div class="card-body">
                <!--  <myQRScanner /> -->
                <p>{{errorQr}}</p>
                <p>{{decodedString}}</p>
                <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>
            </div>
        </div>
    </div>
</template>
<script>
import { QrcodeStream } from 'vue3-qrcode-reader'
import myQRScanner from "@/components/myQRScanner.vue";
import {  mapMutations,mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            verScanner: false,
            errorQr:'',
            decodedString:''
        }
    },
    components: {
        myQRScanner: myQRScanner,
        QrcodeStream
    },
    methods: {
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
        onDecode(decodedString){
            this.decodedString = decodedString
            console.log(this.decodedString)

            var query = this.decodedString;
            var datos = query.split("/")
            console.log(datos[1])
            var vars = datos[1].split("&");
            console.log(vars)//objeto con los id de escape room y reto

            this.obtenerIdQR(vars);
            this.$router.push({path:'/responder-retos'})

        }
    },
}
</script>
<style scoped>
@media  (width: 600px)  and (width: 1200px) { 

    .bt-consulta {
        border-radius: 15px;
        width: 120px;
        color: white;
        background-color: #ebcc24;
    }

    .tarjeta-from {
        width: 100rem;
        margin: auto;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        border: none;
    }

    .form-control-plaintext {
        border-bottom: 1px solid #ebcc24;
    }

    .blob {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #eb1e1eb0;
        background-size: cover;
        background-position: center;
        position:absolute; 
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

@media screen and (max-width: 400px) {
    .tarjeta-from {
        width: 20rem;
        margin: auto;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        border: none;
    }

    .blob {
        overflow: hidden;
        width: 14rem;
        height: 14rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #eb1e1eb0;
        background-size: cover;
        background-position: center;

        /* position:absolute; */
        z-index: -1;
    }

    .img-3d-carga {
        position: absolute;
        z-index: 1;
        top: 50px;
        width: 300px;
    }
}
</style>
