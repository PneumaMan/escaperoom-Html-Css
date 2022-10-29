<template>
    <div class="container">
        <div class="row">
            <h5 class="mx-auto"> Participantes</h5>
        </div>
        <div class="row">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary col-8 col-md-3 my-5" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Nuevo participante
            </button>

            <!-- Modal Crear-->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear Participante</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="EditarModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear Participante</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="table-responsive">
                <table class="table table-bordered border-primary">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col"># doc</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Escape room asociado</th>
                            <th scope="col">Accion </th>
                        </tr>
                    </thead>
                    <tbody class="text-secondary">
                        <tr v-for="(item, index) in participantes" :key="index">
                            <th scope="row">{{item.identificacion}}</th>
                            <td>{{item.nombres}}{{item.apellidos}}</td>
                            <td>{{item.telefono}}</td>
                            <td>{{item.escapeRoom.nombreEscapeRoom}}</td>
                            <td>
                                <button type="button" class="btn btn-outline-warning " data-bs-toggle="modal"
                                    data-bs-target="#EditarModal">
                                    Editar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            participantes: [],
        }
    },
    mounted() {
        this.listarEscapes();
    },
    methods: {
        listarEscapes() {
            this.axios.get('/Participantes', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.participantes = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }
    },
}
</script>