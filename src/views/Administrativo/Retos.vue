<template>
    <div class="container p-4">
        <div class="row">
            <div class="card col-11 col-md-6 mx-auto my-4">
                <div class="card-body">

                    <div class="form">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Enunciado de la pregunta</label>
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
                        <div class="row mb-3">
                            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Material de apoyo</button>
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-primary">Guardar</button>
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
                            <th scope="col">Pregunta</th>
                            <th scope="col">Respuestas</th>
                            <th scope="col">Material</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>
                                <button class="btn btn-outline-warning mx-1">Editar</button>
                                <button class="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Material de apoyo</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Adjuntar Material</label>
                            <input class="form-control" type="file" id="formFile">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>