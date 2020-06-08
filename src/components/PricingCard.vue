<template>
  <div class="pricing-card">
    <div class="pricing-card--plan-name">
      {{ planName }}
    </div>
    <div class="pricing-card--price">
        {{ price }}
    </div>
    <div class="pricing-card--description">
      <slot name="description" />
    </div>
    <div class="pricing-card--select">
      <slot name="select" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planName: {
      type: String,
      default: 0
    },
    price: {
      type: String,
      default: 0
    }
  }
};
</script>

<style>
.pricing-card {
  display: grid;
  box-shadow: var(--card-shadow);
  grid-template-areas:
    '.'
    'planName'
    '.'
    'price'
    '.'
    'description'
    '.'
    'select'
    '.';
  grid-template-rows: 32px var(--font-l) 24px var(--font-xxl) 24px auto 24px auto 32px;
  grid-template-columns: auto;
  width: 800px;
  background-color: white;
}

.pricing-card--plan-name {
  grid-area: planName;
  color: var(--card-title-color);
  font-size: var(--font-l);
  font-family: var(--card-title-font-family);
  font-weight: var(--card-title-font-weight);
  line-height: var(--card-title-line-height);
  margin: var(--card-content-margin);
  justify-self: center;
}

.pricing-card--price {
  grid-area: price;
  font-size: var(--font-xl);
  color: black;
  margin: var(--card-content-margin);
  justify-self: center;
}

.pricing-card--description {
  grid-area: description;
  margin: var(--card-content-margin);
}

.pricing-card--select {
  grid-area: select;
  margin: var(--card-content-margin);
  justify-self: center;
}
</style>
