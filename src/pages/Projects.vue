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
          #devtool
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
          #subtitle
        </template>
      </chrome-extension-card>
    </div>

    <h4 class="projectHeader">Wannalytics</h4>
    <div>Social Channel Notifier</div>

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

  .plussub /deep/ .chromeExtensionCardImage {
    background-color: #5bc0de;
  }
</style>

