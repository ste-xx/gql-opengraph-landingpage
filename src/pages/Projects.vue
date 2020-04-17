<template>
  <Layout class="background-container">
    <h1 style="font-size: 36pt; margin-bottom: 2rem;">Projects</h1>
    <h4 class="projectHeader">Chrome Extensions</h4>

    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <image-card class="gistExplorer">
        <template slot="image">
          <div style=" display: flex; align-items: center; justify-content: center;">
            <g-image src="~/assets/gistexplorerlogo.png" width="80" height="80"/>
          </div>
        </template>
        <template slot="image-icons">
          <font-awesome :icon="['fas', 'external-link-alt']" size="1x" @click="open('https://chrome.google.com/webstore/detail/gist-devtool-explorer/egbmdjmhnblffjpfilldkklinjmflaag')"/>
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/gist-dev-tool-explorer')"/>
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
      </image-card>

      <image-card class="plussub">
        <template slot="image">
          <g-image src="~/assets/plussublogo.png" width="128"/>
        </template>
        <template slot="image-icons">
          <font-awesome :icon="['fas', 'external-link-alt']" size="1x" style="color: white" @click="open('https://chrome.google.com/webstore/detail/%2Bsub/lpobdmdfgjokempajoobgfdnhjbjlnpm')"/>
          <font-awesome :icon="['fab', 'github']" size="1x" style="color: white" @click="open('https://github.com/plussub/plussub')"/>
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
      </image-card>
    </div>

    <h4 class="projectHeader">Self Organization</h4>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <image-card class="rss">
        <template slot="image">
          <div style=" display: flex; align-items: center; justify-content: center;">
            <g-image src="~/assets/rsslogo.png" width="80" height="80"/>
          </div>
        </template>
        <template slot="image-icons">
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/social_channel_notifier')"/>
        </template>
        <template slot="title">
          Custom Rss Feed
        </template>
        <template slot="description">
          Im addicted to dev news, sadly for my preferred channels are no rss feed available... So I build my own custom
          RSS-Feed, which notifies me when new hot shit is available. (look up each hour) Build with firebase and typescript. I tried
          some "classic" OOP stuff with typescript (inheritance, mixins, template methods) ... and now the codebase looks
          like shit.

          <div class="rssEntryGrid">
            <div class="item" style="grid-area: e0;">
              <div class="rssEntryHeader">
                Github-Trending
                <font-awesome :icon="['fas', 'external-link-alt']" size="1x" @click="open('https://github.com/trending')"/>
               </div>
               Notifies if a TypeScript, JavaScript or everything else (no filter applied), raises in the weekly trending.
            </div>
            <div style="grid-area: e0-icon;" class="rssEntryIconContainer item">
                <font-awesome :icon="['fas', 'rss']" size="1x" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/ghTrending_Rss')"/>
            </div>

            <div class="item" style="grid-area: e1;">
              <div class="rssEntryHeader">
                HackerNews
                <font-awesome :icon="['fas', 'external-link-alt']" size="1x" @click="open('https://news.ycombinator.com/')"/>
              </div>
              Notifies, if a post reach 500 points in the current week.
            </div>
            <div style="grid-area: e1-icon;" class="rssEntryIconContainer item">
              <font-awesome :icon="['fas', 'rss']" size="1x" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/hackerNews_Rss')"/>
            </div>

            <div class="item" style="grid-area: e2;">
              <div class="rssEntryHeader">
                r/programming
                <font-awesome :icon="['fas', 'external-link-alt']" size="1x" @click="open('https://www.reddit.com/r/programming/')"/>
              </div>
              Notifies, if a post reach 500 points in the current week.
            </div>
            <div style="grid-area: e2-icon;" class="rssEntryIconContainer item">
              <font-awesome :icon="['fas', 'rss']" size="1x" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/reddit_Rss')"/>
            </div>

            <div class="item" style="grid-area: e3;">
              <div class="rssEntryHeader">
                ProductHunt
                <font-awesome :icon="['fas', 'external-link-alt']" size="1x" @click="open('https://www.producthunt.com/')"/>
              </div>
              Notifies, if a post reach 300 votes week in the current week.
            </div>
            <div style="grid-area: e3-icon;"  class="rssEntryIconContainer item">
              <font-awesome :icon="['fas', 'rss']" size="1x" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/productHunt_Rss')"/>
            </div>
          </div>
        </template>
        <template slot="tag">
            #ts #firebase #rss
        </template>
      </image-card>
    </div>

    <h4 class="projectHeader">Algo Playground</h4>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <simple-card class="hus">
        <template slot="title">
          NEAT Algorithm for Hus [WIP]
        </template>
        <template slot="title-icons">
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/hus')"/>
        </template>
        <template slot="description">
           hus
        </template>
        <template slot="tag">
          #ts #ml #rss
        </template>
      </simple-card>

      <simple-card class="pathfinding">
        <template slot="title">
          Pathfinding algos
        </template>
        <template slot="title-icons">
          <font-awesome :icon="['fas', 'external-link-alt']" size="1x" style="margin-right: 8px" @click="open('https://amazing-wright-416994.netlify.app/')"/>
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/path-algorithm')"/>
        </template>
        <template slot="description">
          path finding
        </template>
        <template slot="tag">
          #dijkstra #ts
        </template>
      </simple-card>

      <simple-card class="stonePuzzle">
        <template slot="title">
          Stone puzzle
        </template>
        <template slot="title-icons">
          <font-awesome :icon="['fas', 'external-link-alt']" size="1x" style="margin-right: 8px" @click="open('https://amazing-wilson-449e80.netlify.app/')"/>
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/stone-color-puzzle')"/>
        </template>
        <template slot="description">
          Stupid stone puzzle from the party
        </template>
        <template slot="tag">
          #backtracking #js
        </template>
      </simple-card>
    </div>
  </Layout>
</template>

<script>
  import ImageCard from '~/components/ImageCard.vue'
  import SimpleCard from '~/components/SimpleCard.vue'

  export default {
    components: {
      ImageCard,
      SimpleCard
    },
    metaInfo: {
      title: 'My Github Projects'
    },
    methods: {
      open(link) {
        window.open(link, 'blank');
      }
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

  .gistExplorer /deep/ .ImageCardImage {
    background-color: greenyellow;
  }

  .plussub /deep/ .ImageCardImage {
    background-color: #5bc0de;
  }

  .gistExplorer, .plussub {
    margin-top: 16px;
  }

  .rss {
    width: 800px
  }

  .rss /deep/ .ImageCardImage {
    background-color: #e0df09;
  }

  .rssEntryGrid {
    display: grid;
    margin-top: 16px;
    grid-row-gap: 8px;
    grid-template-columns: auto 1.5em;
    /*background-color: rgba(224,223,9,0.2);;*/
    grid-template-areas:
      "e0 e0-icon"
      "e1 e1-icon"
      "e2 e2-icon"
      "e3 e3-icon";
  }

  .rssEntryHeader {
    font-weight: 700;
  }

  .rssEntryIconContainer {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .rssEntryGrid .item:nth-child(n+3):nth-child(-n+4) {
    background-color: rgba(224,223,9,0.2);;
  }

  .rssEntryGrid .item:nth-child(n+7):nth-child(-n+8) {
    background-color: rgba(224,223,9,0.2);;
  }

  .hus, .pathfinding, .stonePuzzle {
    width: 350px;
    margin-top: 16px;
  }

</style>

