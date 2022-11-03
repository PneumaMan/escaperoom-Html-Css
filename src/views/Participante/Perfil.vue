<template>
    <div class="container">
        
        <div class="row">
            <router-link to="/admin" class="col-1"><i class="bi bi-arrow-left-circle" style="font-size:20px ;"></i></router-link>
        </div>
        <div class="p-4">
        <h1>Tablero power bi</h1>

        <div class="row my-5 mx-auto">
            <iframe src="https://giphy.com/embed/fUYp0iOzQfC540KCs4" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        </div>
        <div class="">Prueba QR logueo</div>
        <div class="row my-5 mx-auto">
            <qr-code text="https://gray-smoke-09e195710.2.azurestaticapps.net/logueo" :size="300" class="mx-auto"></qr-code>
        </div>
    </div>
</template>