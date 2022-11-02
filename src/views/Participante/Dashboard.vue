<template>
    <div class="container p-4">
        <div class="row">
            <div class="card" style="width: 18rem; margin: auto;" v-for="(item, index) in escapes" :key="index">
                <img src="../../assets/Topsecret-amico.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title mb-5">{{ item.nombreEscapeRoom }}</h5>
                    <router-link to="/home" class="btn btn-primary mx-1">Empezar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            escapes: [],
        }
    },
    mounted() {
        this.listarEscapes();
    },
    methods: {
        listarEscapes() {
            this.axios.get('/EscapeRoom', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    //console.log(response.data)
                    this.escapes = response.data.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
    },
}
</script>