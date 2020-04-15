<template>
  <div class="chromeExtensionCard">
    <div class="chromeExtensionCardImage">
      <div class="chromeExtensionCardImageContainer">
        <slot name="image"/>
      </div>
      <div class="chromeExtensionCardIconContainer">
        <font-awesome :icon="['fas', 'external-link-alt']" size="1x" @click="open(storeLink)"/>
        <font-awesome :icon="['fab', 'github']" size="1x" @click="open(githubLink)"/>
      </div>
    </div>
    <div class="chromeExtensionCardTitle">
      <slot name="title"/>
    </div>
    <div class="chromeExtensionCardDescription">
      <slot name="description"/>
    </div>
    <div class="chromeExtensionCardTag">
      <slot name="tag"/>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      githubLink: {
        type: String,
        required: true
      },
      storeLink: {
        type: String,
        required: true
      },
    },
    methods: {
      open(link) {
        window.open(link, 'blank');
      }
    },
  }
</script>


<style>
  .chromeExtensionCard {
    display: grid;
    box-shadow: var(--card-shadow);
    grid-template-areas:
            'image image image'
            'title title title'
            'description description description'
            'tag . .';
    grid-template-rows: 128px 2em auto 1.5em;
    width: 350px;
    background-color: white;
  }

  .chromeExtensionCardImage {
    grid-area: image;
    position: relative;
  }

  .chromeExtensionCardImageContainer {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .chromeExtensionCardIconContainer {
    position: absolute;
    height: 100%;
    width: 4rem;
    top: 8px;
    right: 0;

    display: flex;
    justify-content: space-evenly;

    color: black;
  }

  .chromeExtensionCardTitle {
    grid-area: title;
    align-self: center;
    font-weight: var(--card-title-font-weight);
    margin: var(--card-content-margin);
  }

  .chromeExtensionCardDescription {
    grid-area: description;
    margin: var(--card-content-margin);
  }


  .chromeExtensionCardTag {
    grid-area: tag;
    margin: var(--card-content-margin);
    color: var(--card-tag-color);
    font-size: var(--card-tag-font-size);
    font-weight:var(--card-tag-font-weight);
    align-self: center;
  }
</style>
