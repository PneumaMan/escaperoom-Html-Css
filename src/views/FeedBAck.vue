<template>
    <div class="p-4 f-e">
        <hr/>
        <div class="row my-5">
            <h1>ESPACIO PARA EL FEEDBACK </h1>
        </div>
        <hr/>
        <div class="row">
            <Encuesta />
        </div>
    </div>

</template>
<script>
import Encuesta from '@/components/encuesta.vue'
export default {
    components:{
        Encuesta
    },
    data() {
        return {
            
        }
    },
}
</script>
<style>
.f-e{
    background-color:  #eb1e1eb0;;
    color: white;
}
</style>