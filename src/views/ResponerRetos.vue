<template>
    <div class="fondo">
        <div class="row ">
            <img src="../assets/img-participantes/img-reto.png" alt="" class="img-3d my-4">
        </div>
        <div class="row">
            <h1 class="text-white">reto # 1</h1>
        </div>
        <div class="row">
            <div class="card my-5">
                <div class="card-body p-4">
                    <div class="row">
                            <button class="btn btn-danger bt-respuestas my-2"><router-link to="/start" class="text-white">respuesta 1</router-link></button>
                            <button class="btn btn-danger bt-respuestas my-2"><router-link to="/start" class="text-white">respuesta 2</router-link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
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
/* .img-3d {
    margin: auto;
    width: 350px;
    } */

@media screen and (max-width: 400px) {
    .img-3d {

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