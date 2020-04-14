<template>
    <Layout class="background-container">
        <h1 style="font-size: 36pt; margin-bottom: 2rem;">Projects</h1>

        <h4 class="projectHeader">Chrome Extensions</h4>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
            <div class="chromeExtensionCard">
                <div style="grid-area: image; display: flex; justify-content: center; background-color: greenyellow;">
                    <div>
                        <g-image src="~/assets/gistexplorerlogo.png" width="80" height="80" style="height: 80px; padding-top: 28px;"/>
                    </div>
                </div>
                <div class="chromeExtensionCardTitle">
                    Gist Explorer
                </div>
                <div style="grid-area: description">
                    An additional DevTool panel for your gists.
                </div>
                <div style="grid-area: tag">
                    #devtool
                </div>
            </div>

            <div class="cardContainer chromeExtensionCard">
                <div style="grid-area: image; display: flex; justify-content: center; background-color:#5bc0de;">
                    <g-image src="~/assets/plussublogo.png" width="128"/>
                </div>
                <div class="chromeExtensionCardTitle">
                    +Sub
                </div>
                <div style="grid-area: description">
                    An extension which adds subtitle to HTML video tags via file or subtitle search powered by tmbd & opensubtitles.org.
                </div>
                <div style="grid-area: tag">
                    #subtitle
                </div>
            </div>
        </div>

        <h4 class="projectHeader">Wannalytics</h4>
        <div>Social Channel Notifier</div>

        <h4 class="projectHeader">Wannarithm</h4>
        <div>hus #ml </div>
        <div>path finding</div>
        <div>stupid stone puzzle from the party </div>
    </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'My Github Projects'
    }
  }
</script>

<style>
.chromeExtensionCardTitle {
    grid-area: title;
    font-weight: 700;
}

.projectHeader {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: rgb(112, 112, 112);
}

.chromeExtensionCard {
  display: grid;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  grid-template-areas:
    "image image image"
    "title title title"
    "description description description"
    "tag . .";
  width: 250px;
  background-color:white;
}

</style>
