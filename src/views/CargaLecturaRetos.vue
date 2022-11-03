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
                    <img src="../assets/img-participantes/Camera.png" alt="" class="img-3d">
                </div>
            </button>
        </div>
    </div>
    <div class="p-4" v-show="verScanner">
        <div class="card mx-auto my-5">
            <div class="card-body">
                <myQRScanner />
            </div>
        </div>
    </div>
</template>
<script>
import myQRScanner from "@/components/myQRScanner.vue";
export default {
    data() {
        return {
            verScanner: false
        }
    },
    components: {
    myQRScanner: myQRScanner,
  },
}
</script>
<style scoped>
@media screen and (max-width: 1200px) {

.bt-consulta{
    border-radius: 15px;
    width: 120px;
    color: white;
    background-color: #ebcc24;
}

.tarjeta-from {
    width:100rem ;
    margin: auto;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    border:none;
}
.form-control-plaintext{
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

        /* position:absolute; */
        z-index: -1;
    }
/*  .img-3d {
        position: absolute;
        z-index: 1;
        top: 60px;
        left: 420px;
        width: 400px;
    } */
    
}
@media screen and (max-width: 400px) {
    .tarjeta-from {
    width:20rem ;
    margin: auto;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    border:none;
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
    .img-3d {
        position: absolute;
        z-index: 1;
        top: 50px;
        width: 300px;
    }
}
</style>
