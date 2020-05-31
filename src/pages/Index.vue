<template>
    <Layout class="background-container">
        <div style="margin-top: 30px;">
            <g-image style="object-fit: cover; border-radius:50%; float: left; margin-top: 1.5em; margin-right: 2em; "
                     src="~/assets/avatar.jpg" width="120"/>
        </div>
        <h4 id="introduction" class="introduction">Open Graph meets GraphQL</h4>
        <p id="tagline" class="font-xl">
            All you want to know about a link in a single Request and without a backend.
        </p>
        <div id="useCases" class="font-l">
            <div>Create preview links like in whatsapp or facebook from your app.</div>
            <div>Get relevant infos about a link.</div>
        </div>
        <div class="gettingStarted" style="clear: both; margin-top: 16px;">
            <h6 class="font-xl-alt">
                Getting Started
            </h6>
            <div>
                <preview-card style="width: 100%">
                    <template #title>
                        Insert a URL and see the preview
                    </template>
                    <template #description>
                        <div class="input-field">
                          <input placeholder="Insert a URL and see the preview" id="previewUrl" type="text" class="validate">
                          <label for="previewUrl">Url</label>
                        </div>
                    </template>
                </preview-card>
                - result pretty format
                - show query in tab
            </div>
        </div>
        <div>
            <a class="font-xl-alt" href="https://opengraph.stefanbreitenstein.workers.dev/___graphql"
               target="_blank">Show in GraphiQL</a>
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
  import PreviewCard from '~/components/PreviewCard.vue'

  export default {
    components: {
      PreviewCard
    },
    metaInfo: {
      title: 'Open Graph meets GraphQL'
    },
    methods: {
    }
  }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }

    .introduction {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        font-style: italic;
        font-size: 32pt;
        color: var(--header-color);
        margin-bottom: min(2.5rem, 16px);
        line-height: 1.2em;
    }

    .gettingStarted {
        font-size: 36pt;
        margin-bottom: 2rem;
    }

    .font-l {
        font-size: 1.3em;
    }

    .font-xl {
        font-size: 1.5em;
    }

    .font-xl-alt {
        font-size: 36pt;
    }

    #useCases div:nth-child(2n) {
        margin-top: 16px;
        float: right
    }

    @media only screen and (min-width: 768px) {
        #useCases div:nth-child(2n) {
            float: left;
        }
    }

    #useCases::after {
        content: " ";
        display: block;
        height: 0;
        clear: both;
    }
</style>
