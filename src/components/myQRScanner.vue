<template>
    <div class="">
      <br />
  
      <div class="">
        <div class="">
          <qrcode-stream @decode="decode" @init="logErrors"></qrcode-stream>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { QrcodeStream } from "vue3-qrcode-reader";
  
  export default {
    setup() {},
  
    data() {
      const options = [{ text: "nothing (default)", value: undefined }];
  
      const selected = options[1];
      return {
        options,
        selected,
        qrvalue: "",
      };
    },
  
    components: {
      QrcodeStream,
    },
  
    methods: {
      logErrors(promise) {
        promise.catch(console.error);
      },
  
      decode(decodedString) {
        this.qrvalue = decodedString;
      },
    },
  };
  </script>
  