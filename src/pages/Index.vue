<template>
  <Layout class="background-container">
    <h1 class="introduction" id="product"></h1>
    <div>
      <g-image style="object-fit: cover; border-radius:50%; float: left; margin-top: 1.5em; margin-right: 2em; " src="~/assets/avatar.jpg" width="120"/>
    </div>
    <h4 class="introduction_subheader">Open Graph meets GraphQL</h4>
    <p style="font-size: 1.3em;">
      All you want to know about a link in a single Request and without a backend.
    </p>
    <div class="" id="useCases">
      <div>Create preview links like in whatsapp or facebook from your app.</div>
      <div style="margin-top: 16px; float: right">Get relevant infos about a link.</div>
    </div>
    <div style="font-size: 1.3em;">
      <h6 class="introduction" style="clear: both;">Getting a little bit more technical:</h6>
      <simple-card class="request" style="margin-top: 16px; width: 100%">
        <template #title>
          Your request looks like this
        </template>
        <template #description>
         <pre>
{
  opengraph(url: "givenUrl") {
    og_title
    og_type
    og_image
    og_url 
  }
}
        </pre>
        </template>
      </simple-card>
      <simple-card class="request" style="margin-top: 16px; width: 100%">
        <template #title>
          Response looks like that
        </template>
        <template #description>
         <pre>
{
  "opengraph" {
    "og_title": "given_titl",
    "og_type": "given_type",
    "og_image": "given_image",
    "og_url": "given_url"
   }
}
        </pre>
        </template>
      </simple-card>
    </div>
    <div>
      <h6 class="introduction"><a href="https://opengraph.stefanbreitenstein.workers.dev/___graphql" target="_blank">experiment with it</a></h6>
    </div>
    <div>
      compare:
      Integrate seamless in your existing api landscape*
      Decide which fields are relevant and fetch only required data to minimize Response size
      Fetch multiple Urls with a single Request
    </div>
    <div id="pricing">
      pricing
      <span>free</span>
      <span>premium</span>
      <span>enterprise</span>
    </div>
  </Layout>
</template>

<script>
    import SimpleCard from '~/components/SimpleCard.vue'

    export default {
        components: {
            SimpleCard
        },
        metaInfo: {
            title: 'Open Graph meets GraphQL'
        }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.introduction {
  font-size: 36pt;
  margin-bottom: 2rem;
}

.introduction_subheader {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 32pt;
  color: var(--header-color);
  margin-bottom: min(2.5rem, 16px);
}
</style>
