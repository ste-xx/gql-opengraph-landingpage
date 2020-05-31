<template>
<div class="preview-card">
  <div class="preview-card--title">
    <slot name="title"/>
  </div>
  <div class="preview-card--description">
    <slot name="description"/>
  </div>
</div>
</template>

<style>
  .preview-card {
      display: grid;
      box-shadow: var(--card-shadow);
      grid-template-areas:
        '.'
        'title'
        'description';
      grid-template-rows: min(2rem, 16px) auto auto;
      grid-template-columns: auto;
      width: 800px;
      background-color: white;
  }

  .preview-card--title {
      grid-area: title;
      color: var(--card-title-color);
      font-size: var(--card-title-font-size);
      font-family: var(--card-title-font-family);
      font-weight: var(--card-title-font-weight);
      line-height: var(--card-title-line-height);
      margin: var(--card-content-margin);
  }

  .preview-card--description {
      grid-area: description;
      margin: var(--card-content-margin);
  }
</style>
