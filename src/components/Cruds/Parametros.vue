<template>
    <div class="container">
        <div class="p-4">
            <div class="row">
                <h3 class="mx-auto mb-5"> Parámetros</h3>
                <div class="row">
                    <h5 class="my-5">Tipo de retos</h5>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered border-primary">
                        <thead class="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Abreviatura</th>
                                <th scope="col">Descripción</th>
                                <!-- <th scope="col">Accion </th> -->
                            </tr>
                        </thead>
                        <tbody class="text-secondary">
                            <tr v-for="(item, index) in TipoRetos" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.abreviatura }}</td>
                                <td>{{ item.descripcion }}</td>
                                <!-- <td>
                                    <button type="button" class="btn btn-outline-warning " data-bs-toggle="modal"
                                        data-bs-target="#EditarModal">
                                        Editar
                                    </button>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="row">
                    <h5 class="my-5">Tipo de preguntas</h5>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered border-primary">
                        <thead class="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Abreviatura</th>
                                <th scope="col">Descripción</th>
                                <!-- <th scope="col">Accion </th> -->
                            </tr>
                        </thead>
                        <tbody class="text-secondary">
                            <tr v-for="(item, index) in TipoPreguntas" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.abreviatura }}</td>
                                <td>{{ item.descripcion }}</td>
                                <!-- <td>
                                    <button type="button" class="btn btn-outline-warning " data-bs-toggle="modal"
                                        data-bs-target="#EditarModal">
                                        Editar
                                    </button>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="row">
                    <h5 class="my-5">Estado de los participantes</h5>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered border-primary">
                        <thead class="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Abreviatura</th>
                                <th scope="col">Descripción</th>
                                <!-- <th scope="col">Accion </th> -->
                            </tr>
                        </thead>
                        <tbody class="text-secondary">
                            <tr v-for="(item, index) in EstadosParticipantes" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.abreviatura }}</td>
                                <td>{{ item.descripcion }}</td>
                                <!-- <td>
                                    <button type="button" class="btn btn-outline-warning " data-bs-toggle="modal"
                                        data-bs-target="#EditarModal">
                                        Editar
                                    </button>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            TipoRetos: [],
            TipoPreguntas: [],
            EstadosParticipantes: [],
        }
    },
    mounted() {
        this.listarRetos()
        this.listarPreguntas()
        this.listarEstadoParticioantes()
    },
    methods: {
        listarRetos() {
            this.axios.get('/Parameters/tipos-retos', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.TipoRetos = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarPreguntas() {
            this.axios.get('/Parameters/tipos-preguntas', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.TipoPreguntas = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarEstadoParticioantes() {
            this.axios.get('/Parameters/estados-participantes', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data)
                    this.EstadosParticipantes = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }
    }
}
</script>