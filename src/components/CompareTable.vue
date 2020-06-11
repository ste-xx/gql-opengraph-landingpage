<template>
  <div class="compareContainer">
    <div style="font-size: var(--font-l); grid-area: argHeader"></div>
    <div style="font-size: var(--font-l); grid-area: restHeader"><div class="center">REST</div></div>
    <div style="font-size: var(--font-l); grid-area: gqlHeader"><div class="center">GQL</div></div>

    <div style="grid-area: arg0">
      Integrate seamless in your existing api landscape
    </div>
    <div style="grid-area: rest0">
      <div class="center">
        <font-awesome :icon="['fas', 'times']" size="lg"/>
      </div>
    </div>
    <div style="grid-area: gql0">
      <div class="center">
        <font-awesome :icon="['fas', 'check']" size="lg"/>
      </div>
    </div>

    <div style="grid-area: filler1" class="tbl-contrast"></div>
    <div style="grid-area: arg1" class="tbl-contrast">
      Decide which fields are relevant and fetch only required data to minimize Response size
    </div>
    <div style="grid-area: rest1" class="tbl-contrast">
      <div class="center">
        <font-awesome :icon="['fas', 'times']" size="lg"/>
      </div>
    </div>
    <div style="grid-area: gql1" class="tbl-contrast">
      <div class="center">
        <font-awesome :icon="['fas', 'check']" size="lg"/>
      </div>
    </div>

    <div style="grid-area: arg2">
      Fetch multiple Urls with a single Request
    </div>
    <div style="grid-area: rest2">
      <div class="center">
        <font-awesome :icon="['fas', 'times']" size="lg"/>
      </div>
    </div>
    <div style="grid-area: gql2">
      <div class="center">
        <font-awesome :icon="['fas', 'check']" size="lg"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .compareContainer {
    width: 100%;
    display: grid;
    line-height: 1.8;
    font-size: var(--font-m);
    grid-template-areas:
     'fillerHeader argHeader restHeader gqlHeader'
     'filler0 arg0 rest0 gql0'
     'filler1 arg1 rest1 gql1'
     'filler2 arg2 rest2 gql2';
    grid-template-columns: 8px 1fr 1fr 1fr;
    grid-row-gap: 8px;
  }

  .tbl-contrast {
    background-color: var(--primary-color-light)
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>

