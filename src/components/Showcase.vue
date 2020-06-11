<template>
  <div>
    <div class="input-field">
      <input placeholder="Insert a URL and see the preview" id="previewUrl" type="text" v-model="url" />
      <label for="previewUrl">Url</label>
      <button></button>
    </div>

    <a style="font-size: 1.2rem;" href="https://opengql.stefanbreitenstein.workers.dev/___graphql" target="_blank">Show in GraphiQL ></a>
    - result pretty format - show query in tab
  </div>
</template>

<script>
// import gql from 'graphql-tag';

const gqlEndpoint = 'https://opengql.stefanbreitenstein.workers.dev/';

export const debounce = ({ fn, timeout }) => {
  let isCalled = false;
  let nextFn;
  const dbFn = async (...args) => {
    if (isCalled) {
      nextFn = () => dbFn(...args);
      return;
    }
    isCalled = true;
    await fn(...args);
    setTimeout(() => {
      isCalled = false;
      const _nextFn = nextFn;
      nextFn = null;
      if (_nextFn) {
        _nextFn();
      }
    }, timeout);
  };

  return dbFn;
};

export default {
  data() {
    return {
      url: '',
      debounceRequest: () => {}
    };
  },
  created() {
    this.debounceRequest = debounce({ fn: this.request, timeout: 3000 });
  },
  watch: {
    url(newValue, oldValue) {
      this.debounceRequest(newValue);
    }
  },
  methods: {
    async request(url) {
      console.warn(url);
      const result = await fetch(gqlEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          query: `{
            opengraph(url:$url){
              opengraph{
                og_type
              }
            }`,
          variables: {
            url: 'https://www.spiegel.de/wissenschaft/mensch/corona-pandemie-wuergt-kohlestrom-ab-a-06e92d67-a060-47e3-8599-8a44c6f81b33'
          }
        })
      }).then((r) => r.json());
      console.warn(result);
    }
  }
};
</script>

<style scoped>
.input-field input[type='text']:not(.browser-default):focus:not([readonly]) + label {
  color: #000;
}
.input-field input[type='text']:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #e0e0e0;
  /* -webkit-box-shadow: 0 1px 0 0 #26a69a; */
  box-shadow: 0 1px 0 0 var(--primary-color);
}
</style>
