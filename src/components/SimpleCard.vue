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
      grid-template-rows: 8px 1em auto 1.5em;
      grid-template-columns: auto 4em;
      width: 800px;
      background-color: white;
  }

  .SimpleCardTitle {
      grid-area: title;
      font-weight: var(--card-title-font-weight);
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
