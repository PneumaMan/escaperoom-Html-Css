<template>
    <div class="p-4 f-e">
        <hr/>
        <div class="row my-5">
            <div class="card mx-auto">
                <embed src="../assets/escaperooms.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="600px" class="mt-5"/>
            </div>
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