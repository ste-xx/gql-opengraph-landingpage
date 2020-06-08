<template>
  <Layout class="background-container">
    <div style="margin-top: 30px;">
      <g-image style="object-fit: cover; border-radius: 50%; float: left; margin-top: 1.5em; margin-right: 2em;" src="~/assets/avatar.svg" width="120" />
    </div>
    <h4 id="introduction" class="introduction">Open GQL</h4>
    <p style="margin-top: 0; margin-bottom: min(2.5rem, 16px);" class="font-xl">Open Graph meets GraphQL</p>
    <p id="tagline" class="font-xl" style="line-height: 1.8; margin-bottom: 40px">
      All you want to know about a link in a single Request and without a backend.
    </p>
    <div class="useCases font-l" >
      <div style="line-height: 1.8">Create preview links like in whatsapp or facebook from your app.</div>
      <div style="line-height: 1.8">Get relevant infos about a link.</div>
    </div>
    <div id="gettingStarted" class="gettingStarted">
      <h6 class="font-xxl">
        Getting Started
      </h6>
      <preview-card style="width: 100%;">
        <template #description>
          <showcase />
        </template>
      </preview-card>
    </div>
    <h6 class="font-xxl">
      Why GQL?
    </h6>
    <preview-card id="compTable" style="width: 100%; margin: 0;">
      <template #description>
        <compare-table />
      </template>
    </preview-card>
    <h6 id="pricing" class="font-xxl">
      Pricing
    </h6>

    <div style="display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap">
      <pricing-card id="freePricing" class="pricing-card" plan-name="Free Plan" price="free">
        <template #description>
          <div>following basic types:</div>
          <ul>
            <li>og:title</li>
            <li>og:type</li>
            <li>og:image</li>
            <li>og:url</li>
          </ul>
          <div>usable without an api key</div>
          <div>global rate limited</div>
        </template>
      </pricing-card>

      <pricing-card id="premiumPlan" class="pricing-card" plan-name=" Premium Plan" price="4,99$ per month">
        <template #description>
          <div>all in free plan + following additional types:</div>
          <ul>
            <li>og:audio</li>
            <li>og:description</li>
            <li>og:determiner</li>
            <li>og:locale</li>
            <li>og:site_name</li>
            <li>og:video</li>
          </ul>
          <div>dedicated 5.000 request per day assured</div>
          <a class="waves-effect waves-light btn-large light-blue lighten-4 grey-text text-darken-2">Choose Premium</a>
        </template>
      </pricing-card>

      <pricing-card id="enterprisePlan" class="pricing-card" plan-name="Enterprise Plan" price="Please contact">
        <template #description>
          - special requirements or consulting fundamental more required requests. - contact
          <a class="waves-effect waves-light btn-large light-blue lighten-4 grey-text text-darken-2">Choose Enterprise</a>
        </template>
      </pricing-card>
    </div>
  </Layout>
</template>

<script>
import PreviewCard from '~/components/PreviewCard.vue';
import PricingCard from '~/components/PricingCard.vue';
import Showcase from '~/components/Showcase.vue';
import CompareTable from '~/components/CompareTable.vue';
// 40 * 13 / 3
export default {
  components: {
    PreviewCard,
    PricingCard,
    Showcase,
    CompareTable
  },
  metaInfo: {
    title: 'Open Graph meets GraphQL'
  },
  methods: {}
};
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

.useCases div:nth-child(2n) {
  margin-top: 16px;
  float: right;
}

@media only screen and (min-width: 768px) {
  .useCases div:nth-child(2n) {
    float: left;
  }
}

.useCases::after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
}

#compTable .preview-card--description {
  margin: 0;
}


.pricing-card {
  width: 100%;
  margin-top: 16px;
}

@media only screen and (min-width: 768px) {
  .pricing-card {
    width: 30%;
  }
}
</style>
