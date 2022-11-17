<template>
    <div class="container">
        <div class="row">
            <router-link to="/admin" class="col-1"><i class="bi bi-arrow-left-circle" style="font-size:20px ;"></i>
            </router-link>
        </div>
        <div class="row">
            <h1 class="mx-auto my-3">Modulo de Administrativo de escapes room's</h1>
        </div>
        <!-- INICIO Escape room  -->
        <div class="">
            <div class="row">
                <!-- Button trigger modal -->
                <button type="button" class="col-8 col-md-2 my-5 btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Crear Escape
                </button>

                <!-- Modal crear Escape Room -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Crear escape room </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form">
                                    <div class="row">
                                        <div class="mb-3 col-11 mx-auto">
                                            <label for="exampleFormControlTextarea1" class="form-label">Nombre del
                                                escape room
                                            </label>
                                            <input type="text" class="form-control" v-model="room.nombreEscapeRoom">
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
                                            <label for="exampleFormControlTextarea1" class="form-label">Celular
                                                organizador
                                            </label>
                                            <input type="text" class="form-control" v-model="room.celularOrganizador">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-5 mx-auto">
                                            <label for="exampleFormControlTextarea1" class="form-label">Fecha inicio del
                                                juego
                                            </label>
                                            <input type="datetime-local" class="form-control"
                                                v-model="room.fechaInicioJuego">
                                        </div>
                                        <div class="mb-3 col-md-5 mx-auto">
                                            <label for="exampleFormControlTextarea1" class="form-label">Fecha final del
                                                juego
                                            </label>
                                            <input type="datetime-local" class="form-control"
                                                v-model="room.fechaFinJuego">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-5 mx-auto">
                                            <label for="exampleFormControlTextarea1" class="form-label">Tiempo limite
                                                escape room</label>
                                            <input type="time" class="form-control" v-model="room.tiempoLimiteEscape">
                                        </div>
                                        <div class="mb-3 col-md-5 mx-auto">
                                            <label for="exampleFormControlTextarea1" class="form-label">Tiempo limite
                                                por participante</label>
                                            <input type="time" class="form-control"
                                                v-model="room.tiempoLimiteParticipantes">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
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
                                    <th scope="col">Participantes</th>
                                    <th scope="col">Retos</th>
                                    <th scope="col">Escape room</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(item, index) in escapes" :key="index">
                                    <th scope="row">1</th>
                                    <td>{{ item.nombreEscapeRoom }}</td>
                                    <td>{{ item.organizador }}</td>
                                    <td><button class="btn btn-outline-secondary mx-1" data-bs-toggle="modal"
                                            data-bs-target="#ModalParticipantesXescape"
                                            @click.prevent="Cargarparticipantes(item.participantes)"><i
                                                class="bi bi-people-fill"></i></button></td>
                                    <td>
                                        <button class="btn btn-outline-primary mx-1"
                                            @click.prevent="activarReto(item)"><i
                                                class="bi bi-journal-medical"></i></button>
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-success mx-1"
                                            @click.prevent="IniciarEscape(item.id)"><i class="bi bi-power"></i></button>
                                        <button class="btn btn-outline-danger mx-1"
                                            @click.prevent="TerminarEscape(item.id)"><i
                                                class="bi bi-power"></i></button>
                                        <button class="btn btn-outline-info mx-1" data-bs-toggle="modal"
                                            data-bs-target="#modalQREscape"
                                            @click.prevent="CargarQREscape(item.urlQR)"><i
                                                class="bi bi-qr-code-scan"></i></button>
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-warning mx-1"
                                            @click.prevent="ActivarEditarEscape(item)" data-bs-toggle="modal"
                                            data-bs-target="#ModalEditarEscape"><i
                                                class="bi bi-pencil-square"></i></button>

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
                                    <div class="mb-3 col-11 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Nombre del escape
                                            room
                                        </label>
                                        <input type="text" class="form-control " v-model="roomEditar.nombreEscapeRoom">
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
                                            juego
                                        </label>
                                        <input type="datetime-local" class="form-control"
                                            v-model="roomEditar.fechaInicioJuego">
                                    </div>
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Fecha final del
                                            juego
                                        </label>
                                        <input type="datetime-local" class="form-control"
                                            v-model="roomEditar.fechaFinJuego">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Tiempo limite escape
                                            room</label>
                                        <input type="time" class="form-control" v-model="roomEditar.tiempoLimiteEscape">
                                    </div>
                                    <div class="mb-3 col-md-5 mx-auto">
                                        <label for="exampleFormControlTextarea1" class="form-label">Tiempo limite por
                                            participante</label>
                                        <input type="time" class="form-control"
                                            v-model="roomEditar.tiempoLimiteParticipantes">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary"
                                @click.prevent="EditarEscape()">Editar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FIN  Escape room  -->

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
                                    <div class="row">
                                        <div class="mb-3 col-8 col-md-6">
                                            <label for="" class="form-label">Nombre del reto</label>
                                            <input type="text" class="form-control" v-model="reto.nombreReto">
                                        </div>
                                        <div class="mb-3 col-8 col-md-6">
                                            <label for="" class="form-label">Tiempo Bonificación
                                            </label>
                                            <input type="time" class="form-control" v-model="reto.bonificacionReto">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-8 col-md-6">
                                            <label for="" class="form-label">Color del QR
                                            </label>
                                            <input type="color" class="form-control" v-model="reto.color">
                                        </div>
                                        <div class="mb-3 col-8 col-md-6">
                                            <label for="" class="form-label">Color de fondo QR
                                            </label>
                                            <input type="color" class="form-control" v-model="reto.bgColor">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Enunciado de la
                                            pregunta</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                            v-model="reto.preguntaReto"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Numero del
                                            reto</label>
                                        <input type="number" class="form-control" v-model="reto.numeroReto">
                                    </div>
                                    <div class="mb-3 form-floating">
                                        <select class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example" v-model="reto.tipoPregunta">
                                            <option :value="item.id" v-for="(item, index) in TipoPreguntas"
                                                :key="index">{{ item.descripcion }}</option>
                                        </select>
                                        <label for="floatingSelect" class="form-label">Tipo de pregunta</label>

                                    </div>
                                    <div class="mb-3 form-floating">
                                        <select class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example" v-model="reto.tipoReto"
                                            @click.prevent="tomatipoReto(reto.tipoReto)">
                                            <option :value="item.id" v-for="(item, index) in TipoRetos" :key="index">{{
                                                    item.descripcion
                                            }}</option>
                                        </select>
                                        <label for="floatingSelect" class="form-label">Tipo de reto</label>
                                    </div>
                                    <div class="mb-3  col-8">
                                        <label for="floatingSelect" class="form-label mx-3">¿El reto es
                                            obligatorio?</label>
                                        <label class="switch">
                                            <input type="checkbox" v-model="reto.obligatorio">
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <hr />
                                    <h5 class="mx-auto">Respuestas</h5>
                                    <hr />
                                    <div class="row" v-for="(input, k) in reto.respuestas" :key="k">
                                        <div class="form-group col-8 col-md-8 my-3">
                                            <label for="exampleFormControlTextarea1"
                                                class="form-label mx-auto">Enunciado de la respuesta # {{ k + 1 }}
                                            </label>
                                            <input type="text" class="form-control " v-model="input.respuestaReto">
                                        </div>
                                        <span class=" col-8 col-md-4 mt-5">
                                            <i class="bi bi-dash-circle-fill mx-1 my-3 text-danger" @click="remove(k)"
                                                v-show="k || (!k && reto.respuestas.length > 1)"></i>
                                            <i class="bi bi-plus-circle-fill text-success" @click="add(k)"
                                                v-show="k == reto.respuestas.length - 1"></i>
                                        </span>
                                        <div class="form-check col-8 col-md-8 ml-2">
                                            <div class="">
                                                <label for="">Respuesta reto retorno</label>
                                                <input type="text" class="form-control"
                                                    v-model="input.respuestaRetoRetorno">
                                            </div>
                                            <div class="" v-show="!mostrarCampo">
                                                <input class="form-check-input" type="checkbox" value="" id=""
                                                    v-model="input.correcta" />
                                                <label class="form-check-label" for="">¿Es la respuesta
                                                    correcta?</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" @click.prevent="agregarReto()"
                                    data-bs-dismiss="modal">Guardar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Tabla de los retos -->
                <div class="card w-90 mx-auto">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre reto</th>
                                    <th scope="col">Pregunta</th>
                                    <th scope="col">Tipo Reto</th>
                                    <th scope="col">Bonificación</th>

                                    <th scope="col">Respuestas</th>
                                    <th scope="col">QR</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(item, index) in Retos" :key="index">
                                    <th scope="row">{{ item.numeroReto }}</th>
                                    <td>{{ item.nombreReto }}</td>
                                    <td>{{ item.preguntaReto }}</td>
                                    <td>{{ item.tipoRetoDescription }}</td>
                                    <td>{{ item.bonificacion }}</td>

                                    <td>
                                        <button class="btn btn-outline-primary mx-1" data-bs-toggle="modal"
                                            data-bs-target="#exampleModalRespuestas"
                                            @click.prevent="CargarRespuestas(item)"><i
                                                class="bi bi-list-check"></i></button>
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-info mx-1" data-bs-toggle="modal"
                                            data-bs-target="#modalQR" @click.prevent="CargarQR(item)"><i
                                                class="bi bi-qr-code-scan"></i></button>
                                    </td>

                                    <td>
                                        <button class="btn btn-outline-warning mx-1" data-bs-toggle="modal"
                                            data-bs-target="#ModalEditarRetos"
                                            @click.prevent="ActivarEdicionReto(item)"><i
                                                class="bi bi-pencil-square"></i></button>
                                        <button class="btn btn-outline-danger" @click.prevent="EliminarReto(item.id)"><i
                                                class="bi bi-trash3-fill"></i></button>
                                    </td>
                                    <!-- Modal Respuestas-->
                                    <div class="modal fade" id="exampleModalRespuestas" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Respuestas</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item" v-for="(i, p) in cargaOpcRespRetos"
                                                            :key="p">🔹{{ i.respuestaReto }}</li>
                                                    </ul>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Cerrar</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal QR-->
                                    <div class="modal fade" id="modalQR" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">QR- {{ titulo }}
                                                    </h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <qrcode-vue :value="urlCompleta" :size="size" :foreground="colorQR"
                                                        :background="bgQR" />
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Cerrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Modal EDITAR retos -->
            <div class="modal fade" id="ModalEditarRetos" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar retos </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form">
                                <div class="row">
                                    <div class="mb-3 col-8 col-md-6">
                                        <label for="" class="form-label">Nombre del reto</label>
                                        <input type="text" class="form-control" v-model="retoEditar.nombreReto">
                                    </div>
                                    <div class="mb-3 col-8 col-md-6">
                                        <label for="" class="form-label">Tiempo Bonificación
                                        </label>
                                        <input type="time" class="form-control" v-model="retoEditar.bonificacionReto">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mb-3 col-8 col-md-6">
                                        <label for="" class="form-label">Color del QR
                                        </label>
                                        <input type="color" class="form-control" v-model="retoEditar.color">
                                    </div>
                                    <div class="mb-3 col-8 col-md-6">
                                        <label for="" class="form-label">Color de fondo QR
                                        </label>
                                        <input type="color" class="form-control" v-model="retoEditar.bgColor">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Enunciado de la
                                        pregunta</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        v-model="retoEditar.preguntaReto"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Numero del
                                        reto</label>
                                    <input type="number" class="form-control" v-model="retoEditar.numeroReto">
                                </div>
                                <div class="mb-3 form-floating">
                                    <select class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example" v-model="retoEditar.tipoPregunta">
                                        <option :value="item.id" v-for="(item, index) in TipoPreguntas" :key="index">{{
                                                item.descripcion
                                        }}</option>
                                    </select>
                                    <label for="floatingSelect" class="form-label">Tipo de pregunta</label>
                                </div>
                                <div class="mb-3 form-floating">
                                    <select class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example" v-model="retoEditar.tipoReto"
                                        @click.prevent="tomatipoReto(retoEditar.tipoReto)">
                                        <option :value="item.id" v-for="(item, index) in TipoRetos" :key="index">{{
                                                item.descripcion
                                        }}</option>
                                    </select>
                                    <label for="floatingSelect" class="form-label">Tipo de reto</label>
                                </div>
                                <div class="mb-3  col-8">
                                    <label for="floatingSelect" class="form-label mx-3">¿El reto es obligatorio?</label>
                                    <label class="switch">
                                        <input type="checkbox" v-model="retoEditar.obligatorio">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                <hr />
                                <h5 class="mx-auto">Respuestas</h5>
                                <hr />
                                <div class="row" v-for="(input, k) in retoEditar.respuestas" :key="k">
                                    <div class="form-group col-8 col-md-8 my-3">
                                        <label for="exampleFormControlTextarea1" class="form-label mx-auto">Enunciado de
                                            la respuesta # {{ k + 1 }}
                                        </label>
                                        <input type="text" class="form-control " v-model="input.respuestaReto">
                                    </div>

                                    <div class="form-check col-8 col-md-8 ml-2">
                                        <div class="">
                                            <label for="">Respuesta reto retorno</label>
                                            <input type="text" class="form-control"
                                                v-model="input.respuestaRetoRetorno">
                                        </div>
                                        <div class="" v-show="!mostrarCampo">
                                            <input class="form-check-input" type="checkbox" value="" id=""
                                                v-model="input.correcta" />
                                            <label class="form-check-label" for="">¿Es la respuesta correcta?</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" @click.prevent="editarReto()"
                                data-bs-dismiss="modal">Actualizar</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Carga participantes -->
        <div class="modal fade" id="ModalParticipantesXescape" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Participantes por escape room</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" v-for="(i, p) in ParticipantesXEscape" :key="p">🔹Nombre
                                completo:{{ i.fullName }} <br />
                                🔹Documento: {{ i.identificacion }} <br />
                                🔹Telefono: {{ i.telefono }}
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- Modal para los qr del escape room -->
        <div class="modal fade" id="modalQREscape" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">QR's del Escape room
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>QR para iniciar sesión en el escape room</p>
                        <qrcode-vue :value="urlCompleta" :size="size" />
                        <hr class="my-3" />
                        <p>QR para feedback</p>
                        <qrcode-vue :value="urlFeedback" :size="size" />
                        <hr class="my-3" />
                        <p>QR para salida del escape room (escapar)</p>
                        <qrcode-vue :value="urlEscapar" :size="size" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import Retos from '@/components/retos.vue'
import QrcodeVue from 'qrcode.vue'

export default {
    components: {
        Retos,
        QrcodeVue

    },
    data() {
        return {
            escapes: [],
            Retos: [],
            room: {
                nombreEscapeRoom: "",
                fechaInicioJuego: "",
                fechaFinJuego: "",
                organizador: "",
                celularOrganizador: "",
                tiempoLimiteEscape: "00:00:01",
                tiempoLimiteParticipantes: '00:00:01'
            },
            roomEditar: {
                id: 0,
                nombreEscapeRoom: "",
                fechaInicioJuego: "",
                fechaFinJuego: "",
                organizador: "",
                celularOrganizador: "",
                tiempoLimiteEscape: "00:00:01",
                tiempoLimiteParticipantes: '00:00:01'
            },
            showRetos: false,
            reto: {
                nombreReto: "",
                preguntaReto: "",
                tipoPregunta: 0,
                numeroReto: 0,
                tipoReto: 0,
                obligatorio: true,
                bonificacionReto: "00:00:10",
                escapeRoomId: 0,
                color: "",
                bgColor: "",
                respuestas: [
                    {
                        respuestaReto: '',
                        correcta: false,
                        respuestaRetoRetorno: '',
                        retoId: 0
                    }
                ]
            },
            retoEditar: {
                id: 0,
                nombreReto: "",
                preguntaReto: "",
                tipoPregunta: 0,
                numeroReto: 0,
                tipoReto: 0,
                obligatorio: true,
                bonificacionReto: "00:00:10",
                escapeRoomId: 0,
                color: "",
                bgColor: "",
                respuestas: [
                    {
                        respuestaReto: '',
                        correcta: false,
                        respuestaRetoRetorno: '',
                        retoId: 0
                    }
                ]
            },
            id_Reto: 0,
            UrlBase: '',
            urlCompleta: '',
            colorQR: '#000000',
            bgQR: '#ffffff',
            titulo: "",
            size: 350,
            Margin: 2,
            IniciarTerminarER: [],
            cargaOpcRespRetos: [],
            TipoPreguntas: [],
            ParticipantesXEscape: [],
            TipoRetos: [],
            EscapeRoomId: 0,
            mostrarCampo: false,
            urlEscapar:'',
            urlFeedback:'',
        }
    },
    mounted() {
        this.listarEscapes();
        this.FeedBackQREscape();
        this.listarPreguntas();
        this.listarTipoRetos()
    },
    methods: {
        agregarEscape() {
            //console.log(this.room)
            this.axios.post('/EscapeRoom', this.room, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    this.escapes.unshift(res.data);
                    //console.log(res.data)
                    this.$swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Escape room registrado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    //console.log(e);
                })
            this.room.nombreEscapeRoom = "",
                this.room.fechaInicioJuego = "",
                this.room.fechaFinJuego = "",
                this.room.organizador = "",
                this.room.celularOrganizador = "",
                this.room.tiempoLimiteEscape = "00:00:01",
                this.room.tiempoLimiteParticipantes = '00:00:01'

        },
        listarRetos() {
            this.axios.get('/Retos', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.Retos = response.data.data;
                })
                .catch((e) => {
                    //console.log('error' + e);
                })
        },
        listarEscapes() {
            this.axios.get('/EscapeRoom', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.escapes = response.data.data;
                })
                .catch((e) => {
                    //console.log('error' + e);
                })
        },
        activarReto(item) {
            this.showRetos = true
            console.log(item)
            this.Retos = item.retos
            this.id_Reto = item.id
            this.reto.escapeRoomId = this.id_Reto
        },
        ActivarEditarEscape(item) {
            this.roomEditar.id = item.id
            this.roomEditar.nombreEscapeRoom = item.nombreEscapeRoom
            this.roomEditar.fechaInicioJuego = item.fechaInicioJuego
            this.roomEditar.fechaFinJuego = item.fechaFinJuego
            this.roomEditar.organizador = item.organizador
            this.roomEditar.celularOrganizador = item.celularOrganizador
            this.roomEditar.tiempoLimiteEscape = item.tiempoLimite
            this.roomEditar.tiempoLimiteParticipantes = item.tiempoLimiteParticipantes
        },
        EditarEscape() {
            //console.log(this.roomEditar)
            this.axios.put(`/EscapeRoom/${this.roomEditar.id}`, this.roomEditar, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    //console.log(res.data)
                    this.listarEscapes()

                    this.$swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Editado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    //console.log(e);
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: 'Ocurrio un error',
                        text: e.data.Errors[0].ErrorMessage,
                    });
                })
        },
        add(index) {
            this.reto.respuestas.push({
                respuestaReto: '',
                correcta: false
            });
        },
        remove(index) {
            this.reto.respuestas.splice(index, 1);
        },
        agregarReto() {
            //console.log(this.reto)
            this.axios.post('/Retos', this.reto, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    // Agrega al inicio de nuestro array notas
                    this.Retos.unshift(res.data);
                    this.mostrarCampo = false
                    this.$swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Reto registrado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    //console.log(e);
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: 'Ocurrio un error',
                        text: e.response.data.Errors[0].ErrorMessage
                        ,
                    });
                })
                this.reto.nombreReto = "",
                this.reto.preguntaReto = "",
                this.reto.tipoPregunta = 0,
                this.reto.numeroReto = 0,
                this.reto.tipoReto = 0,
                this.reto.obligatorio = true,
                this.reto.bonificacionReto = "00:00:10",
                this.reto.color = "",
                this.reto.bgColor = "",
                this.reto.respuestas.respuestaReto = '',
                this.reto.respuestas.correcta = false,
                this.reto.respuestas.respuestaRetoRetorno = '',
                this.reto.respuestas.retoId = 0
                    },
        ActivarEdicionReto(item) {
            //console.log(item)
            this.retoEditar.id = item.id
            this.retoEditar.preguntaReto = item.preguntaReto
            this.retoEditar.nombreReto = item.nombreReto
            this.retoEditar.tipoPregunta = item.tipoPregunta
            this.retoEditar.numeroReto = item.numeroReto
            this.retoEditar.tipoReto = item.tipoReto
            this.retoEditar.obligatorio = item.obligatorio
            this.retoEditar.bonificacionReto = item.bonificacion
            this.retoEditar.escapeRoomId = item.escapeRoomId
            this.retoEditar.color = item.color
            this.retoEditar.bgColor = item.bgColor
            this.retoEditar.respuestas = item.respuestas
            this.retoEditar.respuestas.correcta = item.respuestas.correcta
            this.retoEditar.respuestas.retoId = item.respuestas.retoId
        },
        editarReto() {
            console.log(this.retoEditar)
            /* this.axios.put(`/Retos/${this.retoEditar.id}`, this.retoEditar, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    this.$swal(
                        'Actualizado!',
                        'El reto a sido actualizado.',
                        'success'
                    )
                    this.mostrarCampo = false
                })
                .catch(e => {
                    //console.log(e.response);
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: 'Ocurrio un error',
                        text: e.response.data.errors,
                    });
                }) */
        },
        EliminarReto(id) {
            //console.log(id)
            this.$swal({
                title: '¿Esta Seguro?',
                text: "Esta accion no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete(`/Retos/${id}`, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                        .then(res => {
                            let index = this.Retos.findIndex(item => item._id === res.data.id)
                            this.Retos.splice(index, 1);
                            this.$swal(
                                'Eliminado!',
                                'El reto a sido eliminado.',
                                'success'
                            )
                        })
                        .catch(e => {
                            //console.log(e.response.data.errors);
                            this.$swal({
                                position: 'toast-top-end',
                                icon: 'error',
                                title: 'Ocurrio un error',
                                text: e.response.data.errors,
                            });
                        })

                }
            })

        },
        CargarQR(item) {
            //console.log(item)
            var URLactual = window.location.host;
            //console.log(URLactual)
            this.titulo = item.nombreReto
            this.UrlBase = URLactual
            const url = item.urlQR
            this.urlCompleta = this.UrlBase + '/' + url
            console.log(this.urlCompleta)
            //console.log(item.color, item.bgColor)
            this.colorQR = item.color
            this.bgQR = item.bgColor
        },
        CargarRespuestas(item) {
            //console.log(item.respuestas)
            this.cargaOpcRespRetos = item.respuestas
        },
        IniciarEscape(escapeRoomId) {
            this.EscapeRoomId = escapeRoomId
            //console.log(escapeRoomId)
            const url = "/GameControl/escape-room/iniciar";

            this.axios.post(url, { escapeRoomId }, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    //console.log(res.data)
                    this.$swal(
                        '🎉🥳!',
                        'El escape room ha iniciado.',
                        'success'
                    )
                })
                .catch(e => {
                    //console.log(e);
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,
                        text: e.response.data.Errors[0].ErrorMessage,
                    });
                })
        },
        TerminarEscape(escapeRoomId) {
            this.EscapeRoomId = escapeRoomId
            //console.log(escapeRoomId)
            const url = "/GameControl/escape-room/finalizar";
            this.axios.post(url, { escapeRoomId }, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then(res => {
                    //console.log(res.data)
                    //this.IniciarTerminarER.push(res.data);
                    this.$swal(
                        '🎉🥳!',
                        'El escape room ha finalizado.',
                        'success'
                    )
                })
                .catch(e => {
                    //console.log(e.response.data.Errors);
                    //console.log(e.response.data.Message);
                    this.$swal({
                        position: 'toast-top-end',
                        icon: 'error',
                        title: e.response.data.Message,
                        text: e.response.data.Errors[0].ErrorMessage,
                    });
                })
        },
        listarPreguntas() {
            this.axios.get('/Parameters/tipos-preguntas', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    //console.log(response.data)
                    this.TipoPreguntas = response.data.data;
                })
                .catch((e) => {
                    //console.log('error' + e);
                })
        },
        listarTipoRetos() {
            this.axios.get('/Parameters/tipos-retos', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    //console.log(response.data)
                    this.TipoRetos = response.data.data;
                })
                .catch((e) => {
                    //console.log('error' + e);
                })
        },
        Cargarparticipantes(item) {
            //console.log(item)
            this.ParticipantesXEscape = item
        },
        tomatipoReto(item) {
            console.log(item)
            if (item == 5) {
                this.mostrarCampo = !this.mostrarCampo
                console.log( this.mostrarCampo)
            }
            this.mostrarCampo = false
        },
        CargarQREscape(item) {
            var URLactual = window.location.host;
            //console.log(URLactual)
            this.UrlBase = URLactual
            this.urlCompleta = this.UrlBase + '/login-participantes?' + item
            console.log(item)
            this.EscaparQREscape()

        },
        EscaparQREscape() {
            var URLactual = window.location.host;
            console.log(URLactual)
            this.urlEscapar = URLactual + '/participante/texto-final' 
            console.log( this.urlEscapar)

        },
        FeedBackQREscape() {
            var URLactual = window.location.host;
            this.urlFeedback = URLactual + '/participante/feedback' 
            console.log(this.urlFeedback)

        },

    },

}
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #338a04;
}

input:focus+.slider {
    box-shadow: 0 0 1px #338a04;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>