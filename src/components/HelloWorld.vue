<template>
  <div class="hello container">
    <div class="row float-end my-3">
      <strong class="">
        <h4 class="text-danger">Resultado: 0000</h4>
      </strong>
    </div>
    <div class="" v-for="(item, index) in Retos" :key="index">
      <div class="row">
        <div class="question mt-5 mb-3">
          <h1>{{ item.preguntaReto }}1</h1>
        </div>
      </div>
      <div class="row respuestas" v-for="(i, p) in item.respuestas" :key="p">
        <div class="options">
        <button class="button col-md-5 col-10 mx-1 my-3  mx-auto" > 🗝️{{i.respuestaReto}} </button>
      </div>

      </div>
    </div>
    <div class="row justify-content-end">
      <div class="my-5 col align-self-end">
        <router-link to="/salida">
          <button type="button" class="btn btn-primary mx-1">Terminar</button>
        </router-link>
        <button type="button" class="btn btn-secondary mx-1" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Salida </button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">salida voluntaria</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ¿esta seguro?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary">Si</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      Retos: [],
    }
  }, mounted() {
    this.listarRetos();
  },
  methods: {
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

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  margin: auto;
}

.respuestas{
  display: flex;
}

.respuestas > .options {
  flex-direction: row;
}

 .button {
  border:1px solid  #c60929;
  border-radius: 5px;
  height: 200px;
  margin: auto;
  padding: 7%;
  color: rgb(50, 49, 49);
  font-size: 20px;
  font-weight: 500;
}

.button:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);

}

@media screen and (max-width: 370px) {
  .button {
    border: none;
    border-radius: 5px;
    height: 200px;
    margin: auto;
    padding: 3%;
    color: white;
    font-size: 15px;
    font-weight: 500;
  }
}
</style>
