<template>
<div class="SimpleCard">
  <div class="SimpleCardTitle">
    <slot name="title"/>
  </div>
  <div class="SimpleCardTitleIcons">
    <slot name="title-icons"/>
  </div>
  <div class="SimpleCardDescription">
    <slot name="description"/>
  </div>
  <div class="SimpleCardTag">
    <slot name="tag"/>
  </div>
</div>
</template>

<style>
  .SimpleCard {
      display: grid;
      box-shadow: var(--card-shadow);
      grid-template-areas:
        '. .'
        'title title-icons'
        'description description'
        'tag .';
      grid-template-rows: min(2rem, 16px) auto auto 1.5em;
      grid-template-columns: auto 8em;
      width: 800px;
      background-color: white;
  }

  .SimpleCardTitle {
      grid-area: title;
      color: var(--card-title-color);
      font-size: var(--card-title-font-size);
      font-family: var(--card-title-font-family);
      font-weight: var(--card-title-font-weight);
      line-height: var(--card-title-line-height);
      margin: var(--card-content-margin);
  }
  .SimpleCardTitleIcons {
     grid-area: title-icons;
     justify-self: end;
     margin: var(--card-content-margin);
  }

  .SimpleCardDescription {
      grid-area: description;
      margin: var(--card-content-margin);
  }

  .SimpleCardTag {
      grid-area: tag;
      margin: var(--card-content-margin);
      color: var(--card-tag-color);
      font-size: var(--card-tag-font-size);
      font-weight: var(--card-tag-font-weight);
  }
</style>
