<template>
  <Layout class="background-container">
    <h1 style="font-size: 36pt; margin-bottom: 2rem;">Side Projects</h1>
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
          I need subtitle for my favorite series/movies and I don't count on the movie provider, which MAY
          provide some subtitles... So I build an extension which can inject subtitles to HTML5 videos.
          Either with a build in integration to <a href="https://opensubtitles.org" target="_blank">opensubtitles.org</a> or with
          a file selection.
        </template>
        <template slot="tag">
          #subtitle #js #vue
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
          Custom RSS-Feed
        </template>
        <template slot="description">
          Im addicted to dev news. Sadly, for my preferred channels are no RSS-Feed available... So I build my own custom
          RSS-Feed, which notifies me when new hot shit is available. I build it with firebase and TypeScript and I tried
          some "classic" OOP stuff with TypeScript (inheritance, mixins, template methods) ... and now I hate code base. ¯\_(ツ)_/¯
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

    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <simple-card class="gist">
        <template slot="title">
          Gists for the daily browsing
        </template>
        <template slot="description">
          Optimized for the Chrome Dev Console.
          <div class="rssEntryGrid">
            <div class="item" style="grid-area: e0;">
              Search Github links in raw readme.md and generates repo fields for Githubs GQL-Endpoint
            </div>
            <div style="grid-area: e0-icon;" class="rssEntryIconContainer item">
              <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://gist.github.com/ste-xx/a1af44103d81c694c48ed7f829799920')"/>
            </div>
          </div>
        </template>
        <template slot="tag">
          #gists #gist-explorer
        </template>
      </simple-card>
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
          I like the game <a href="https://en.wikipedia.org/wiki/%C7%81Hus" target="_blank">Hus</a> and I lose to my wife every time.
          Perfect time to learn machine learning, I thought.
          So I tried to implement the  <a href="https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies" target="_blank">NEAT algorithm</a>.
          We'll see where it goes...
        </template>
        <template slot="tag">
          #ts #ml #neat
        </template>
      </simple-card>

      <simple-card class="pathfinding">
        <template slot="title">
          Pathfinding Algorithms
        </template>
        <template slot="title-icons">
          <font-awesome :icon="['fas', 'external-link-alt']" size="1x" style="margin-right: 8px" @click="open('https://amazing-wright-416994.netlify.app/')"/>
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/path-algorithm')"/>
        </template>
        <template slot="description">
          I was interested in Kotlin, especially in the JavaScript transpiler. So instead of "Hello World", I implement some
          pathfinding algorithm with visualization.
          <div> A like Kotlin a lot, but Typescript with the types project, is simply not beatable. I don't want mai#</div>
        </template>
        <template slot="tag">
          #dijkstra #kotlin
        </template>
      </simple-card>

      <simple-card class="stonePuzzle">
        <template slot="title">
          Stone Color Puzzle
        </template>
        <template slot="title-icons">
          <font-awesome :icon="['fas', 'external-link-alt']" size="1x" style="margin-right: 8px" @click="open('https://amazing-wilson-449e80.netlify.app/')"/>
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/stone-color-puzzle')"/>
        </template>
        <template slot="description">
          <div style="margin-top: 1em">
          I was on this party and there was this puzzle lying around...
          </div>
          <div style="margin-top: 1em">
            <ul>
              <li> You have a 4x4 Field.</li>
              <li> Each field contains a stone </li>
              <li> Each stone is a square </li>
              <li> A stone has a color on each side</li>
              <li> You can take the stone out and place it wherever you want</li>
              <li> Place each stone so that the places where the stones touch each other are always the same color</li>
            </ul>
          </div>
          <div style="margin-top: 1em">
          I haven't managed to solve it all evening... which was so ridiculous.
          On the next morning I wrote a small script which solves it via backtracking.
          Meh... stupid puzzle...
          </div>
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

  .gist {
    width: 350px;
    margin-top: 16px;
  }

  .gistEntryGrid {
    display: grid;
    margin-top: 16px;
    grid-row-gap: 8px;
    grid-template-columns: auto 1.5em;
    grid-template-areas: "e0 e0-icon";
  }

  .gistEntryHeader {
    font-weight: 700;
  }

  .gistEntryIconContainer {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .hus, .pathfinding, .stonePuzzle {
    width: 350px;
    margin-top: 16px;
  }

</style>

