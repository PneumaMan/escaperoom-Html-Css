<template>
    <div class="">
        <div class=" pg-inicial">
            <div class="row my-3" style="position: relative; left: 0; top: 0;">
                <div class="blob mx-auto mt-5">
                </div>
                <img src="../assets/img-participantes/img-inicial.png" alt="" class="img-3d">
            </div>
            <div class="row">
                <div class="card  my-5 tarjeta-from">
                    <div class="card-body">
                        <div class=" col-md-6 mx-auto">
                            <label for="" class="form-label text-secondary"><Strong> Ingresa el numero de
                                    documento</Strong></label>
                            <input type="text" class="form-control-plaintext text-center">
                            <router-link to="/start"><button class="btn btn-warning my-3 bt-consulta"
                                >Consultar</button></router-link>
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
            inicioParticipante: true
        }
    },
}
</script>
<style scoped>
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
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;

        /* position:absolute; */
        z-index: -1;
    }
/*     .img-3d {
        position: absolute;
        z-index: 1;
        top: 50px;
        left: 420px;
        width: 450px;
    } */
    

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
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;

        /* position:absolute; */
        z-index: -1;
    }
    .img-3d {
        position: absolute;
        z-index: 1;
        top: 50px;
    }
}
</style>