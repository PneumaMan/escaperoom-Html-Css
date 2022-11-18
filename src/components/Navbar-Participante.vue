<template>
    <nav class="navbar bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand"></a>
      <form class="d-flex">
        
        <div class="dropdown dropstart" v-for="(item, index) in msg" :key="index">
          <div class="" v-for="(item2, index) in item.participantes" :key="index">
            <div class="" v-if="item2.participanteIdEncrypt === participante">
            <button class="btn btn-ligth dropdown-toggle text-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <label for="" style="font-size:25px ;" >👨‍⚕️<strong class="text-danger">{{item2.timeScore}}</strong> {{nombreParticipante}}</label>
            </button>
          </div>
        </div>
        </div>
      </form>
    </div>
  </nav>
</template>
<script> 

import { mapState} from "vuex";

export default {
  props: {
    msg: String
  },
  data() {
    return {
      prueba: [],
      participante:""
    };
  },
  computed: {
    ...mapState(["nombreParticipante", "participanteId"]),
  },
  mounted() {
    this.imprimirProp()
  },
  methods: {
    imprimirProp(){
      this.participante =window.localStorage.participanteId  
      console.log(this.participante)
      console.log(this.msg[0])
    }
  },
  
};
</script>

