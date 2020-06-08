<template>
  <div>
    <div class="input-field">
      <input placeholder="Insert a URL and see the preview" id="previewUrl" type="text">
      <label for="previewUrl">Url</label>
    </div>

    <a style="font-size: 1.2rem" href="https://opengraph.stefanbreitenstein.workers.dev/___graphql"
       target="_blank">Show in GraphiQL ></a>
    - result pretty format
    - show query in tab
  </div>
</template>

<style scoped>
  .input-field input[type=text]:not(.browser-default):focus:not([readonly])+label{
    color: #000;
  }
  .input-field input[type=text]:not(.browser-default):focus:not([readonly]){
    border-bottom: 1px solid #e0e0e0;
    /* -webkit-box-shadow: 0 1px 0 0 #26a69a; */
    box-shadow: 0 1px 0 0 var(--background-wave-color);
  }

</style>
