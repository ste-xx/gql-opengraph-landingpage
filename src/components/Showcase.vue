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

<style>
  /* label color */
  .input-field label {
    color: #000;
  }
  /* label focus color */
  .input-field input[type=text]:focus + label {
    color: #000;
  }
  /* label underline focus color */
  .input-field input[type=text]:focus {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
  }
  /* valid color */
  .input-field input[type=text].valid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
  }
  /* invalid color */
  .input-field input[type=text].invalid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
  }
  /* icon prefix focus color */
  .input-field .prefix.active {
    color: #000;
  }
</style>
