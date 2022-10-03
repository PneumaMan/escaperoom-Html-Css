<template>
  <div class="hello container">
    <div class="row">
      <div class="question mt-5 mb-3">
        <h1>¿Comenzamos?</h1>
      </div>
    </div>
    <div class="row">
      <button class="col-md-5 col-10 mx-1 my-3  mx-auto" style="background-color: #c60929;"> 🗝️hola
      </button>
      <button class=" col-md-5 col-10 mx-1 my-3 mx-auto" style="background-color: #0542b9; ">
        🗝️hola
      </button>
    </div>
    <div class="row">
      <button class=" col-md-5 col-10 mx-1 my-3  mx-auto" style="background-color: #e24104;">
        🗝️hola
      </button>
      <button class=" col-md-5 col-10 mx-1 my-3  mx-auto" style="background-color: #106b03;">
        🗝️hola
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  margin: auto;
}

button {
  border: none;
  border-radius: 5px;
  height: 200px;
  margin: auto;
  padding: 7%;
  color: white;
  font-size: 20px;
  font-weight: 500;
}

button:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);

}

@media screen and (max-width: 370px) {
  button {
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
