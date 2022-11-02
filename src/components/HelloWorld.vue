<template>
  <div class="hello container">
    <div class="row float-end my-3">
      <strong class="">
        <h4 class="text-danger">Resultado: 0000</h4>
      </strong>
    </div>
    <!-- <div class="" v-for="(item, index) in nextReto" :key="index"> -->
    <div class="" >
      <div class="row">
        <div class="question mt-5 mb-3">
          <h1>{{ nextReto.preguntaReto }}</h1>
        </div>
      </div>
      <div class=" respuestas">
        <div class="options" v-for="(i, p) in nextReto.respuestas" :key="p">

          <button class="button col-md-5 col-10 mx-1 my-3  mx-auto" @click.prevent="showReto(nextReto.id)"> 🗝️{{
              i.respuestaReto
          }} </button>
        </div>

      </div>
    </div>
    
    <div class="row" v-show="verQRfin">
      <div class="card  mx-auto col-md-4 col-10 my-3 " style="border: none;">
        <div class="card-body">
          <qr-code text="Hello World!" :size="300" ></qr-code> 
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
      posicionReto: 0,
      nextReto: [],
      verQRfin: false

    }
  },
  mounted() {
    this.listarRetos();
  },
  methods: {
    listarRetos() {
      this.axios.get('/Retos', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((response) => {
          console.log(response.data.data)
          this.Retos = response.data.data;
          this.nextReto = this.Retos[this.posicionReto]
        })
        .catch((e) => {
          console.log('error' + e);
        })
    },
    showReto(i) {
      this.posicionReto = this.posicionReto + 1
      console.log(this.posicionReto)
      this.nextReto = this.Retos[this.posicionReto]

      if (this.Retos.length == this.posicionReto) {

        console.log('esas son todas la preguntas')
        this.$swal({
          title: '¡Felicitaciones!',
          text: "Has contestado todas la preguntas",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Salir!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.verQRfin = true
          }
        })
      }
    },
    genColor() {
      let rojo = Math.floor(Math.random() * 256)
      let verde = Math.floor(Math.random() * 256)
      let azul = Math.floor(Math.random() * 256)

      /* var Col = [ '#ff@000', '#e@C569', '#0efFeR', '#C@CS9F', '#O0@OFT', '#FF3333','#fFFFO0', '#FF6600', 'HFFC569', '#FFCS@e', '#A43E00'];
      var random_color = Col[Math.floor( Math.random() * Col.length)]; 
      return random_color */
      return `rgb(${rojo}, ${verde}, ${azul})`
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  margin: auto;
}

.respuestas {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.button {
  border: 1px solid #c60929;
  border-radius: 5px;
  height: 200px;
  width: 250px;
  margin: auto;
  padding: 7%;
  color: rgb(50, 49, 49);
  font-size: 20px;
  font-weight: 500;
}

.button:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);

}

@media screen and (max-width: 600px) {
  .respuestas {
    justify-content: space-between;
    flex-direction: column;
  }
}

@media screen and (max-width: 370px) {
  .button {
    border: 1px solid #c60929;
    border-radius: 5px;
    height: 200px;
    margin: auto;
    padding: 3%;
    color: rgb(50, 49, 49);
    font-size: 15px;
    font-weight: 500;
  }
}
</style>
