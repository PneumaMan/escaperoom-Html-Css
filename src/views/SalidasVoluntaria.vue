<template>
    <div class="container">
        <div class="row">
            <div class="row my-3" style="position: relative; left: 0; top: 0;">
                <div class="blob-logueo mt-5"></div>
            <img src="../assets/bye.png" alt="" class="img-bye">
        </div>
        </div>
        <div class="row">
            <h1 class="mx-auto">Gracias por participar</h1>
        </div>
        <div class="row">
            <p class="mx-auto  text-warning"> Has salido voluntariamente, presentate en la puerta</p>
            <h4 class="mx-auto">Hasta la proxima </h4>
        </div>
    </div>
</template>
<style>
.img-bye{
    width: 400px;
    margin: auto;
}
.blob-logueo {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        position: absolute;
        z-index: -1;
        left: 22rem;
    }

    @media (width: 600px) and (width: 1200px) {
        .img-bye{
            width: 400px;
            margin: auto;
            top: 20px;
        }

    .blob-logueo {
        overflow: hidden;
        width: 18rem;
        height: 18rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        left: 55px !important;
        top: 20px !important;
        z-index: -1;
    }
}
@media (min-width: 401px) and (max-width: 600px) {

    .blob {
        overflow: hidden;
        width: 16rem;
        height: 16rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color:#ebcc24;
        background-size: cover;
        background-position: center;
        left: 75px !important;
        top: 20px !important;
        z-index: -1;
        margin: auto;
    }
}

@media screen and (max-width: 400px) {
    .img-bye{
            width: 400px;
            margin: auto;
        }

    .blob-logueo {
        overflow: hidden;
        width: 16rem;
        height: 16rem;
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
        background-color: #ebcc24;
        background-size: cover;
        background-position: center;
        left: 50px !important;
        z-index: -1;
    }

}
</style>
