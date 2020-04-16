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

    <h4 class="projectHeader">self-organization</h4>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <simple-card>
        <template slot="title">
          Custom Rss Feed
        </template>
        <template slot="title-icons">
          <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx/social_channel_notifier')"/>
        </template>
        <template slot="description">
        Im addicted to dev news, sadly for my preferred channels are no rss feed available... So I build my own custom
        RSS-Feed, which notifies me when new hot shit is available. (look up each hour) Build with firebase and typescript. I tried
        some "classic" OOP stuff with typescript (inheritance, mixins, template methods) ... and now the codebase looks
        like shit.

<!--          <div style="grid-area: e0; margin:var(&#45;&#45;card-content-margin);">-->
<!--            Github-Trending (ts, js, everthing(all-topics)) weekly-->
<!--          </div>-->
<!--          <div style="grid-area: e1; margin:var(&#45;&#45;card-content-margin);">-->
<!--            HN (>500)weekly-->
<!--          </div>-->
<!--          <div style="grid-area: e2; margin:var(&#45;&#45;card-content-margin);">-->
<!--            r/programming (500 points) weekly-->
<!--          </div>-->
<!--          <div style="grid-area: e3; margin:var(&#45;&#45;card-content-margin);">-->
<!--            ProductHunt (300 votes) weekly-->
<!--          </div>-->
        </template>
        <template slot="tag">
          #ts #firebase #rss
        </template>
      </simple-card>
    </div>

    <h4 class="projectHeader">Wannarithm</h4>
    <div>hus #ml</div>
    <div>path finding</div>
    <div>stupid stone puzzle from the party</div>
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

</style>

