<template>
  <Layout class="background-container">
    <h1 style="font-size: 36pt; margin-bottom: 2rem;">Projects</h1>
    <h4 class="projectHeader">Chrome Extensions</h4>

    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <chrome-extension-card
              class="gistExplorer"
              store-link="https://chrome.google.com/webstore/detail/gist-devtool-explorer/egbmdjmhnblffjpfilldkklinjmflaag"
              github-link="https://github.com/ste-xx/gist-dev-tool-explorer">
        <template slot="image">
          <div style=" display: flex; align-items: center; justify-content: center;">
            <g-image src="~/assets/gistexplorerlogo.png" width="80" height="80"/>
          </div>
        </template>
        <template slot="title">
          Gist Explorer
        </template>
        <template slot="description">
          I hate searching for my gists on github to run them on the current page...So I build an additional
          DevTool panel for my (and your) Gists.
        </template>
        <template slot="tag">
          #devtool #js #vue
        </template>
      </chrome-extension-card>

      <chrome-extension-card
              class="plussub"
              store-link="https://chrome.google.com/webstore/detail/%2Bsub/lpobdmdfgjokempajoobgfdnhjbjlnpm"
              github-link="https://github.com/plussub/plussub">
        <template slot="image">
          <g-image src="~/assets/plussublogo.png" width="128"/>
        </template>
        <template slot="title">
          +Sub
        </template>
        <template slot="description">
          I need subtitle for my favorite series/movies and i don't care which movie provider, which MAY
          provide some subtitles... So I build an extension which can inject subtitles to HTML5 videos.
        </template>
        <template slot="tag">
          #subtitle #js #redux
        </template>
      </chrome-extension-card>
    </div>

    <h4 class="projectHeader">self-organization</h4>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <div class="rssCard">
        <div style="grid-area: title; font-weight: var(--card-title-font-weight); margin:var(--card-content-margin);">
          Custom Rss Feed
        </div>
        <div style="grid-area: description; margin:var(--card-content-margin);">
          Im addicted to dev news, sadly for my preferred channels are no rss feed available... So I build my own custom
          RSS-Feed, which notifies me when new hot shit is available. (look up each hour) Build with firebase and typescript. I tried
          some "classic" OOP stuff with typescript (inheritance, mixins, template methods) ... and now the codebase looks
          like shit. Ea
        </div>
        <div style="grid-area: e0; margin:var(--card-content-margin);">
          Github-Trending (ts, js, everthing(all-topics)) weekly
        </div>
        <div style="grid-area: e1; margin:var(--card-content-margin);">
          HN (>500)weekly
        </div>
        <div style="grid-area: e2; margin:var(--card-content-margin);">
          r/programming (500 points) weekly
        </div>
        <div style="grid-area: e3; margin:var(--card-content-margin);">
          ProductHunt (300 votes) weekly
        </div>
        <div class="rssCardTag">
          #ts #firebase #rss
        </div>
      </div>
    </div>

    <h4 class="projectHeader">Wannarithm</h4>
    <div>hus #ml</div>
    <div>path finding</div>
    <div>stupid stone puzzle from the party</div>
  </Layout>
</template>

<script>
  import ChromeExtensionCard from '~/components/ChromeExtensionCard.vue'

  export default {
    components: {
      ChromeExtensionCard
    },
    metaInfo: {
      title: 'My Github Projects'
    }
  }
</script>

<style scoped>
  .projectHeader {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: rgb(112, 112, 112);
  }

  .gistExplorer /deep/ .chromeExtensionCardImage {
    background-color: greenyellow;
  }
  .gistExplorer /deep/ .chromeExtensionCardIconContainer {
    color: black;
  }

  .plussub /deep/ .chromeExtensionCardImage {
    background-color: #5bc0de;
  }
  .plussub /deep/ .chromeExtensionCardIconContainer {
    color: white;
  }

  .gistExplorer, .plussub {
    margin-top: 16px;
  }

  .rssCard {
    display: grid;
    box-shadow: var(--card-shadow);
    grid-template-areas:
      '.'
      'title'
      'description'
      '.'
      'e0'
      'e1'
      'e2'
      'e3'
      'tag';
    grid-template-rows: 8px 2em auto 16px 1.5em 1.5em 1.5em 1.5em 1.5em;
    width: 800px;
    background-color: white;
  }

  @media (min-width:960px) {
    .rssCard {
      width: 800px
    }
  }

                                                                                 .rssCardTag {
    grid-area: tag;
    margin: var(--card-content-margin);
    color: var(--card-tag-color);
    font-size: var(--card-tag-font-size);
    font-weight: var(--card-tag-font-weight);
  }
</style>

