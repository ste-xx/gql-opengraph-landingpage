<template>
    <Layout class="background-container">
        <div style="margin-top: 30px;">
            <g-image style="object-fit: cover; border-radius:50%; float: left; margin-top: 1.5em; margin-right: 2em; "
                     src="~/assets/avatar.svg" width="120"/>
        </div>
        <h4 id="introduction" class="introduction">Open GQL</h4>
        <p style="margin-top: 0; margin-bottom: min(2.5rem, 16px);" class="font-xl">Open Graph meets GraphQL</p>
        <p id="tagline" class="font-xl">
            All you want to know about a link in a single Request and without a backend.
        </p>
        <div class="useCases font-l">
            <div>Create preview links like in whatsapp or facebook from your app.</div>
            <div>Get relevant infos about a link.</div>
        </div>
        <div id="gettingStarted" class="gettingStarted">
            <h6 class="font-l-alt">
                Getting Started
            </h6>
            <preview-card style="width: 100%">
                <template #description>
                    <showcase/>
                </template>
            </preview-card>
        </div>
        <h6 class="font-l-alt">
            Why GQL?
        </h6>
        <preview-card id="compTable" style="width: 100%; margin: 0;">
            <template #description>
                <compare-table/>
            </template>
        </preview-card>
        <h6 class="font-l-alt">
           Pricing
        </h6>
        <preview-card id="freePricing" style="width: 100%;">
            <template #title>
                <div class="center">
                    Free Plan
                </div>
            </template>
            <template #description>
                - basic types (title, x)
                - rate limited with
                - use without an api key
            </template>
        </preview-card>
        <div>&nbsp;</div>

        <preview-card id="premiumPlan" style="width: 100%;">
            <template #title>
                <div class="center">
                    Premium Plan
                </div>
            </template>
            <template #description>
                - additional types like video
                - dedicated 10.000 request per day assured
                - price: 4.99
            </template>
        </preview-card>

        <div>&nbsp;</div>
        <preview-card id="enterprisePlan" style="width: 100%;">
            <template #title>
                <div class="center">
                    Enterprise Plan
                </div>
            </template>
            <template #description>
                - special requirements or consulting fundamental more required requests.
                - contact
            </template>
        </preview-card>
    </Layout>
</template>

<script>
  import PreviewCard from '~/components/PreviewCard.vue'
  import Showcase from '~/components/Showcase.vue'
  import CompareTable from '~/components/CompareTable.vue'

  export default {
    components: {
      PreviewCard,
      Showcase,
      CompareTable
    },
    metaInfo: {
      title: 'Open Graph meets GraphQL'
    },
    methods: {}
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
        line-height: 1.2em;
        margin-top: 50px;
        margin-bottom: 0;
    }

    .gettingStarted {
        margin-top: 32px;
        margin-bottom: 2rem;
    }

    .font-l {
        font-size: 1.3em;
    }

    .font-l-alt {
        font-size: 32pt;
    }

    .font-xl {
        font-size: 1.5em;
    }

    .font-xl-alt {
        font-size: 36pt;
    }

    .useCases div:nth-child(2n) {
        margin-top: 16px;
        float: right
    }

    @media only screen and (min-width: 768px) {
        .useCases div:nth-child(2n) {
            float: left;
        }
    }

    .useCases::after {
        content: " ";
        display: block;
        height: 0;
        clear: both;
    }

    #compTable .preview-card--description {
        margin: 0;
    }

    .center {
        display: flex;
        justify-content: center;
    }

</style>
