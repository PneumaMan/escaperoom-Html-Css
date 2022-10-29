<template>
    <div class="container">
        <div class="row">
            <h1 class="mx-auto my-3">Modulo de Administrativo de escapes room's</h1>
        </div>
        <div class="row">
            <!-- Button trigger modal -->
            <button type="button" class="col-8 col-md-2 my-5 btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Crear Escape
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear escape room </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form">
                                <div class="row">
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Nombre del escape
                                        </label>
                                        <input type="text" class="form-control" v-model="room.nombreEscapeRoom">
                                    </div>
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Tiempo limite
                                        </label>
                                        <input type="time" class="form-control" v-model="room.TiempoLimiteEscape">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Nombre del
                                            organizador
                                        </label>
                                        <input type="text" class="form-control" v-model="room.organizador">
                                    </div>
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Celular organizador
                                        </label>
                                        <input type="text" class="form-control" v-model="room.celularOrganizador">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Fecha inicio del
                                            fuego
                                        </label>
                                        <input type="datetime-local" class="form-control"
                                            v-model="room.fechaInicioJuego">
                                    </div>
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Fecha final del
                                            fuego
                                        </label>
                                        <input type="datetime-local" class="form-control" v-model="room.fechaFinJuego">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary"
                                @click.prevent="agregarEscape()">Guardar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card w-75 mx-auto">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Organizador</th>
                                <th scope="col">Retos</th>

                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr v-for="(item, index) in escapes" :key="index">
                                <th scope="row">1</th>
                                <td>{{ item.nombreEscapeRoom }}</td>
                                <td>{{ item.organizador }}</td>
                                <td>
                                    <button class="btn btn-outline-primary mx-1"
                                        @click.prevent="activarIdReto(item.id)">Retos</button>
                                </td>
                                <td>
                                    <button class="btn btn-outline-warning mx-1"
                                        @click.prevent="ActivarEditarEscape(item)" data-bs-toggle="modal"
                                        data-bs-target="#ModalEditarEscape">Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Editar Escape room  -->
        <div class="modal fade" id="ModalEditarEscape" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar escape room </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form">
                            <div class="row">
                                <div class="mb-3 col-md-5 mx-auto">
                                    <label for="exampleFormControlTextarea1" class="form-label">Nombre del escape
                                    </label>
                                    <input type="text" class="form-control" v-model="roomEditar.nombreEscapeRoom">
                                </div>
                                <div class="mb-3 col-md-5 mx-auto">
                                    <label for="exampleFormControlTextarea1" class="form-label">Tiempo limite
                                    </label>
                                    <input type="time" class="form-control" v-model="roomEditar.TiempoLimiteEscape">
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col-md-5 mx-auto">
                                    <label for="exampleFormControlTextarea1" class="form-label">Nombre del
                                        organizador
                                    </label>
                                    <input type="text" class="form-control" v-model="roomEditar.organizador">
                                </div>
                                <div class="mb-3 col-md-5 mx-auto">
                                    <label for="exampleFormControlTextarea1" class="form-label">Celular organizador
                                    </label>
                                    <input type="text" class="form-control" v-model="roomEditar.celularOrganizador">
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col-md-5 mx-auto">
                                    <label for="exampleFormControlTextarea1" class="form-label">Fecha inicio del
                                        fuego
                                    </label>
                                    <input type="datetime-local" class="form-control"
                                        v-model="roomEditar.fechaInicioJuego">
                                </div>
                                <div class="mb-3 col-md-5 mx-auto">
                                    <label for="exampleFormControlTextarea1" class="form-label">Fecha final del
                                        fuego
                                    </label>
                                    <input type="datetime-local" class="form-control"
                                        v-model="roomEditar.fechaFinJuego">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" @click.prevent="EditarEscape()">Editar</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- FIN Editar Escape room  -->

        <!-- Retos -->
        <div class="row" v-show="showRetos">
            <div class="row">
                <!-- Button trigger modal -->
                <button type="button" class="col-8 col-md-2 my-5 btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#ModalCrearRetos">
                    Crear Reto
                </button>

                <!-- Modal Crear retos -->
                <div class="modal fade" id="ModalCrearRetos" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Crear retos </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form">
                                    <div class="mb-3">
                                        <label for="">Nombre del reto</label>
                                        <input type="text" class="form-control" v-model="reto.nombreReto">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Enunciado de la
                                            pregunta</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                            v-model="reto.preguntaReto"></textarea>
                                    </div>
                                    <div class="mb-3 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Tiempo Bonificacion
                                        </label>
                                        <input type="time" class="form-control" v-model="reto.bonificacionReto">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" @click.prevent="agregarReto()">Guardar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card w-75 mx-auto">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre reto</th>
                                    <th scope="col">Pregunta</th>
                                    <th scope="col">Tipo Pregunta</th>
                                    <th scope="col">Bonificación</th>

                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(item, index) in Retos" :key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ item.nombreReto }}</td>
                                    <td>{{ item.preguntaReto }}</td>
                                    <td>{{ item.tipoPregunta }}</td>
                                    <td>{{ item.bonificacionReto }}</td>
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
            </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModalRespuestas" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
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
    </div>
</template>
<script>
import Retos from '@/components/retos.vue'
export default {
    components: {
        Retos
    },
    data() {
        return {
            escapes: [],
            Retos: [],
            room: {
                nombreEscapeRoom: "",
                estado: true,
                fechaInicioJuego: "",
                fechaFinJuego: "",
                organizador: "",
                celularOrganizador: "",
                TiempoLimiteEscape: ""
            },
            roomEditar: {
                id:0,
                nombreEscapeRoom: "",
                estado: true,
                fechaInicioJuego: "",
                fechaFinJuego: "",
                organizador: "",
                celularOrganizador: "",
                TiempoLimiteEscape: ""
            },
            showRetos: false,
            reto: {
                nombreReto: "",
                preguntaReto: "",
                tipoPregunta: 1,
                numeroReto: 1,
                tipoReto: 1,
                bonificacionReto: "",
                escapeRoomId: 0
            }
        }
    },
    mounted() {
        this.listarEscapes();
        this.listarRetos();
    },
    methods: {
        agregarEscape() {
            console.log(this.room)
            this.axios.post('/EscapeRoom', this.room, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    this.escapes.unshift(res.data);
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e);
                })
        },
        listarRetos() {
            this.axios.get('/Retos', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.Retos = response.data.data;
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
        activarIdReto(item) {
            this.showRetos = true
            console.log(item)
            this.reto.escapeRoomId = item
        },
        agregarReto() {
            console.log(this.reto)
            this.axios.post('/Retos', this.reto, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    this.Retos.unshift(res.data);
                })
                .catch(e => {
                    console.log(e);
                })

        },
        ActivarEditarEscape(item) {
            this.roomEditar.id = item.id
            this.roomEditar.nombreEscapeRoom = item.nombreEscapeRoom
            this.roomEditar.estado = item.estado
            this.roomEditar.fechaInicioJuego = item.fechaInicioJuego
            this.roomEditar.fechaFinJuego = item.fechaFinJuego
            this.roomEditar.organizador = item.organizador
            this.roomEditar.celularOrganizador = item.celularOrganizador
            this.roomEditar.TiempoLimiteEscap = item.TiempoLimiteEscap
        },
        EditarEscape() {
            console.log(this.roomEditar)
            this.axios.put(`/EscapeRoom/${this.roomEditar.id}`, this.roomEditar,{ 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    console.log(res.data)
                    this.listarEscapes()
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },

}
</script>