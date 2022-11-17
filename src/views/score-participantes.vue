<template>
    <div class="p-4 premio">
        <div class="row">
            <div class="card col-md-6 col-8 mx-auto t-premio">
                <div class="card-body">
                    <div class="row">
                        <img src="../assets/copas.png" alt="" class="copas-premio">
                    </div>
                    <div class="row">
                        <h3 class="text-success">Felicitaciones !</h3>
                    </div>
                    <div class="row">
                        <p> has terminado todo el Escape room cardiovascular</p>
                        <p>tu tiempo fue de:</p>
                        <strong class="text-danger h3">00:30:00</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: []
        }
    },
    created: function () {
        let self = this
        EventBus.$on('TransferTimesEscape', function (contactId) {
            self.contactId = contactId
            self.getTime()
        })
        this.$socket.on('TransferTimesEscape', (message) => {
                self.getTime()
        });
    },
    methods: {
        getTime() {
            this.axios.get('/escapetimer')
                .then((response) => {
                    // console.log(response.data)
                    this.score = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }
    },
}
</script>
<style scoped>
.copas-premio {
    width: 450px;
    margin: auto;
}

.t-premio {
    border-radius: 10px;
    padding: 10px;
    /*box-shadow: 15px 10px #8888888a; */
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
}

.premio {
    background: rgb(185, 20, 20);
    background: linear-gradient(90deg, rgba(185, 20, 20, 1) 11%, rgba(96, 15, 150, 1) 86%);
}
</style>