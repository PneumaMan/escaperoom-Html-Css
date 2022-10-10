<template>
    <div class="container p-4">
        <div class="row">
            <div class="card" style="width: 18rem; margin: auto;">
                <img src="../../assets/Topsecret-amico.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Reto 1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="/home" class="btn btn-primary mx-1">Empezar</a>
                    <a href="/home" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Información</a>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Material de apoyo</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias ut ea repudiandae,
                        officia maiores nihil possimus incidunt numquam, dolores enim, dolore nemo laudantium
                        voluptatibus fugiat quis et quia exercitationem.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>