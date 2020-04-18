<template>
  <div class="ImageCard">
    <div class="ImageCardImage">
      <div class="ImageCardImageContainer">
        <slot name="image"/>
      </div>
      <div class="ImageCardIconContainer">
        <slot name="image-icons"/>
      </div>
    </div>
    <div class="ImageCardTitle">
      <slot name="title"/>
    </div>
    <div class="ImageCardDescription">
      <slot name="description"/>
    </div>
    <div class="ImageCardTag">
      <slot name="tag"/>
    </div>
  </div>
</template>


<style>
  .ImageCard {
    display: grid;
    box-shadow: var(--card-shadow);
    grid-template-areas:
            'image image image'
            '. . .'
            'title title title'
            'description description description'
            'tag . .';
    grid-template-rows: 128px 0.5em 1em auto 1.5em;
    width: 350px;
    background-color: white;
  }

  .ImageCardImage {
    grid-area: image;
    position: relative;
  }

  .ImageCardImageContainer {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .ImageCardIconContainer {
    position: absolute;
    height: 100%;
    width: 4rem;
    top: 8px;
    right: 0;

    display: flex;
    justify-content: space-evenly;

    color: black;
  }

  .ImageCardTitle {
    grid-area: title;
    align-self: center;
    font-weight: var(--card-title-font-weight);
    margin: var(--card-content-margin);
  }

  .ImageCardDescription {
    grid-area: description;
    margin: var(--card-content-margin);
  }


  .ImageCardTag {
    grid-area: tag;
    margin: var(--card-content-margin);
    color: var(--card-tag-color);
    font-size: var(--card-tag-font-size);
    font-weight:var(--card-tag-font-weight);
    align-self: center;
  }
</style>
