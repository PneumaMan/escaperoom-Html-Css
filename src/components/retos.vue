

<template>
    <div class="container">
        <div class="row">
            <!-- Button trigger modal -->
            <button type="button" class="my-5 btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalCrearRetos">
                Crear Reto
            </button>

            <!-- Modal -->
            <div class="modal fade" id="ModalCrearRetos" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear retos </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Enunciado de la
                                        pregunta</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="">Respuesta 1</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label for="">Respuesta 2</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label for="">Respuesta 3</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <button class="btn btn-primary">Guardar</button>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Respuestas</th>

                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <button class="btn btn-outline-primary mx-1" data-bs-toggle="modal"
                                    data-bs-target="#exampleModalRespuestas">Respuestas</button>

                            </td>

                            <td>
                                <button class="btn btn-outline-warning mx-1">Editar</button>
                                <button class="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <button class="btn btn-outline-primary mx-1" data-bs-toggle="modal"
                                    data-bs-target="#exampleModalRespuestas">Respuestas</button>
                            </td>

                            <td>
                                <button class="btn btn-outline-warning mx-1">Editar</button>
                                <button class="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalRespuestas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Respuestas</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>