<template>
    <div class="p-4 f-e">
        <hr/>
        <div class="row my-5">
            <div class="card mx-auto">
                <iframe src="../assets/escaperooms.pdf#toolbar=0" height="200" width="300"></iframe>
            </div>
        </div>
        <div class="row">
            <a href="../assets/escaperooms.pdf" type="button" class="btn btn-outline-warning mx-auto my-5 download col-md-6" download>
                <h3 class="my-auto "><strong> Si no puedes visualizar el feed back presiona aca </strong></h3>
                </a>
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