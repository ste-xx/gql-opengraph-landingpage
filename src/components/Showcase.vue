<template>
  <div>
    <div class="input-field">
      <input placeholder="Insert a URL to show" id="previewUrl" type="text" v-model="url" />
      <label for="previewUrl">Url</label>
      <a
        @click="debounceRequest(url)"
        class="waves-effect waves-light btn light-blue lighten-4 grey-text text-darken-2"
        style="display: flex; align-items: center; margin-left: 8px; margin-top: 4px; min-width: 100px;"
      >
        Fetch
        <font-awesome :icon="['fas', 'play']" style="margin-left: 8px; margin-right: 8px;" />
      </a>
    </div>
    <div v-if="loading">
      loading...
    </div>
    <div v-if="error">
      {{ error }}
    </div>

    <ul ref="tabs" class="tabs" v-show="result">
      <li class="tab col s3"><a class="active" href="#result-1">Preview</a></li>
      <li class="tab col s3"><a href="#result-2">Raw</a></li>
    </ul>
    <div id="result-1">
      <div v-if="result" class="resultGrid" style="margin-top: 16px;">
        <div style="grid-area: title; font-size: var(--font-l);">{{ result.og_title }}</div>
        <img v-if="result.og_image" :src="result.og_image" style="grid-area: image; object-fit: cover; width: 100%;" />
        <div style="grid-area: description;">{{ result.og_description }}</div>
        <div v-if="result.og_url" style="grid-area: url;">
          <a :href="result.og_url" target="_blank">{{ result.og_url }}</a>
        </div>
      </div>
    </div>
    <div id="result-2">
      <pre style="width: 50px;">
        {{ pretty }}
      </pre>
    </div>

    <div style="margin-bottom: 15px; margin-top: 15px;">
      <a style="font-size: var(--font-l);" href="https://gql.opengql.com/___graphql" target="_blank">Show in GraphiQL (the documentation can also be found there)</a>
    </div>
  </div>
</template>

<script>
const gqlEndpoint = 'https://gql.opengql.com/';

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
      debounceRequest: () => {},
      result: null,
      loading: false,
      error: null,
      pretty: ''
    };
  },
  created() {
    this.debounceRequest = debounce({ fn: this.request, timeout: 3000 });
  },
  mounted() {
    M.Tabs.init(this.$refs.tabs, {});
  },
  watch: {
    url(newValue, oldValue) {
      this.debounceRequest(newValue);
    }
  },
  methods: {
    async request(url) {
      if (url === '') {
        return;
      }
      this.result = null;
      this.error = null;
      this.pretty = '';

      console.log(url);
      const normalizedUrl = url.startsWith('https://') ? url : `https://${url}`;
      console.log(normalizedUrl);
      this.loading = true;
      const result = await fetch(gqlEndpoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
          query opengraph($url: String!)
          {
            opengraph(url: $url){
              opengraph{
                og_title
                og_image
                og_description
                og_url
                og_type
              }
            }
          }
          `,
          variables: {
            url: normalizedUrl
          }
        })
      })
        .then((r) => r.json())
        .catch((e) => {
          this.error = e;
          return Promise.reject(e);
        })
        .finally(() => (this.loading = false));
      this.result = result?.data?.opengraph?.opengraph;
      this.pretty = JSON.stringify(result, null, 2);
      console.log(result);
    }
  }
};
</script>

<style scoped>
.resultGrid {
  display: grid;
  grid-template-areas:
    'title'
    'image'
    'description'
    'url';
  grid-template-rows: auto auto auto auto;
  /*grid-template-columns: max(125px, 25%) 16px auto;*/
  grid-template-columns: auto;
  grid-row-gap: 16px;

  padding-left: 16px;
  border-left: 2px solid var(--primary-color-light);
}

@media only screen and (min-width: 768px) {
  .resultGrid {
    grid-template-areas:
      'title title title'
      '. . .'
      'image . description'
      '. . .' 'url url url';
    grid-template-rows: auto 8px auto 8px auto;
    grid-template-columns: max(125px, 25%) 16px auto;
    grid-row-gap: initial;
  }
}

.input-field {
  display: flex;
}

.input-field input[type='text']:not(.browser-default):focus:not([readonly]) + label {
  color: #000;
}
.input-field input[type='text']:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #e0e0e0;
  /* -webkit-box-shadow: 0 1px 0 0 #26a69a; */
  box-shadow: 0 1px 0 0 var(--primary-color);
}

.tabs .tab a {
  color: var(--primary-color);
}

.tabs .tab a:hover,
.tabs .tab a.active {
  background-color: var(--primary-color-light);
  color: #817e7e;
}
</style>

<style>
.tabs .indicator {
  background-color: #817e7e;
}
</style>
