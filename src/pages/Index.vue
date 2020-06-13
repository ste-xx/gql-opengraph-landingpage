<template>
  <Layout class="background-container">
    <div style="margin-top: 30px;">
      <g-image style="object-fit: cover; border-radius: 50%; float: left; margin-top: 1.5em; margin-right: 2em;" src="~/assets/avatar.svg" width="120" />
    </div>
    <h4 id="introduction" class="introduction">Open GQL</h4>
    <p style="margin-top: 0; margin-bottom: min(2.5rem, 16px);" class="font-xl">Open Graph meets GraphQL</p>
    <p id="tagline" class="font-xl" style="line-height: 1.8; margin-bottom: 40px;">
      All you want to know about a link in a single Request and without a backend.
    </p>
    <div class="useCases font-l">
      <div style="line-height: 1.8;">Create preview links like in whatsapp or facebook from your app.</div>
      <div style="line-height: 1.8;">Get relevant infos about a link.</div>
    </div>
    <div id="gettingStarted" class="gettingStarted">
      <h6 class="font-xxl" style="margin-bottom: 30px;">
        Getting Started
      </h6>
      <preview-card style="width: 100%;">
        <template #description>
          <showcase />
        </template>
      </preview-card>
    </div>
    <h6 class="font-xxl" style="margin-bottom: 30px;">
      Why GQL?
    </h6>
    <preview-card id="compTable" style="width: 100%; margin-bottom: 60px;">
      <template #description>
        <compare-table style="margin-bottom: 15px;" />
      </template>
    </preview-card>
    <h6 id="pricing" class="font-xxl" style="margin-bottom: 30px;">
      Pricing
    </h6>

    <div style="display: flex; width: 100%; justify-content: space-between; flex-wrap: wrap; margin-bottom: 60px;">
      <pricing-card id="freePricing" class="pricing-card" plan-name="Starter" price="Free">
        <template #description>
          <free-plan-description style="height: 330px;" />
        </template>
      </pricing-card>

      <pricing-card id="premiumPlan" class="pricing-card" plan-name="Premium" price="4,99$ per month">
        <template #description>
          <premium-plan-description style="height: 330px;" />
        </template>
        <template #select>
          <select-premium />
        </template>
      </pricing-card>

      <pricing-card id="enterprisePlan" class="pricing-card" plan-name="Enterprise" price="">
        <template #description>
          <div style="height: 330px;">
            <enterprise-plan-description />
          </div>
        </template>
        <template #select>
          <select-contact-sales />
        </template>
      </pricing-card>
      <select-contact />
    </div>
  </Layout>
</template>

<script>
import PreviewCard from '~/components/PreviewCard.vue';
import PricingCard from '~/components/PricingCard.vue';
import Showcase from '~/components/Showcase.vue';
import CompareTable from '~/components/CompareTable.vue';
import FreePlanDescription from '~/components/FreePlanDescription.vue';
import PremiumPlanDescription from '~/components/PremiumPlanDescription.vue';
import SelectPremium from '~/components/SelectPremium.vue';
import EnterprisePlanDescription from '~/components/EnterprisePlanDescription.vue';
import SelectContactSales from '~/components/SelectContactSales.vue';

import SelectContact from '~/components/SelectContact.vue';

export default {
  components: {
    PreviewCard,
    PricingCard,
    Showcase,
    CompareTable,
    FreePlanDescription,
    PremiumPlanDescription,
    SelectPremium,
    EnterprisePlanDescription,
    SelectContact,
    SelectContactSales
  },
  metaInfo: {
    title: 'Open Graph meets GraphQL'
  }
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
  margin-bottom: 60px;
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
  margin-bottom: 32px;
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
