<template>
    <nav class="navbar bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand"></a>
      <form class="d-flex">
        <div class="dropdown dropstart">
          <button class="btn btn-ligth dropdown-toggle text-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <label for="" style="font-size:25px ;">👨‍⚕️</label> {{nombreParticipante}}
          </button>
        </div>
      </form>
    </div>
  </nav>
</template>
<script>

import { mapState} from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["nombreParticipante"]),
  }
  
};
</script>

