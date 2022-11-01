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
                            <form action="">
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">Nombres: </label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id=""
                                            v-model="newParticipante.nombres">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">Apellidos:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id=""
                                            v-model="newParticipante.apellidos">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">Teléfono:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id=""
                                            v-model="newParticipante.telefono">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label mr-3">Documento:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id=""
                                            v-model="newParticipante.identificacion">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label mr-3">Tiempo restante:</label>
                                    <div class="col-sm-10">
                                        <input type="time" class="form-control-plaintext" id=""
                                            v-model="newParticipante.tiempoRestanteParticipante">
                                    </div>
                                </div>
                                <div class="">
                                    <label for="">Asignar escape room</label>
                                    <select class="form-select" aria-label="Default select example"
                                        v-model="newParticipante.escapeRoomId">
                                        <option value="">--------</option>
                                        <option v-for="(item, index) in escapes" :key="index" :value="item.id">{{item.nombreEscapeRoom}}</option>
                                        
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                @click.prevent="crearParticipantes()">Crear</button>
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
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Participante</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">Nombre: </label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id="">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">Apellido:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id="">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class="col-sm-2 col-form-label">Documento:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id="">
                                    </div>
                                </div>
                                <div class="">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </form>
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
                            <th scope="row">{{ item.identificacion }}</th>
                            <td>{{ item.nombres }}{{ item.apellidos }}</td>
                            <td>{{ item.telefono }}</td>
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
            escapes: [],
            newParticipante: {
                identificacion: "",
                nombres: "",
                apellidos: "",
                telefono: 0,
                estado: 1,
                tiempoRestanteParticipante: "",
                escapeRoomId: 0
            }
        }
    },
    mounted() {
        this.listarParticipante();
        this.listarEscapes();
    },
    methods: {
        listarParticipante() {
            this.axios.get('/Participantes', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.participantes = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarEscapes() {
            this.axios.get('/EscapeRoom', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.escapes = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        crearParticipantes() {
            console.log(this.newParticipante)

            this.axios.post('/Participantes', this.newParticipante, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    this.participantes.unshift(res.data);
                    this.$swal({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Participante registrado con éxito',
                            showConfirmButton: false,
                            timer: 1500
                        })
                })
                .catch(e => {
                    console.log(e);
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: 'Ocurrio un error',
                        text: e,
                    });
                })
        }
    },
}
</script>