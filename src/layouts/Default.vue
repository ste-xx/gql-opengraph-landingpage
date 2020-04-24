<template>
  <div class="layout background-container">
    <header class="header">
      <div style="display: grid; grid-template-rows: auto; grid-template-columns: auto auto; width: 100%; justify-content: space-between; margin: 8px 24px;">
        <div style="display: grid; grid-template-rows: repeat(2, 1.5em); grid-row-gap: 4px">
          <strong style="">
            <g-link to="/">Stefan Breitenstein</g-link>
          </strong>
          <div style="display: grid; grid-template-rows: 1em; grid-template-columns: repeat(5, 2em)">
            <font-awesome :icon="['fab', 'github']" size="1x" @click="open('https://github.com/ste-xx')"/>
            <font-awesome :icon="['fab', 'twitter']" size="1x"  @click="open('https://twitter.com/_____ste_____')"/>
<!--            <font-awesome :icon="['fab', 'y-combinator']" size="1x"  @click="open('https://news.ycombinator.com/user?id=stexx')"/>-->
<!--            <font-awesome :icon="['fab', 'reddit-square']" size="1x" @click="open('https://www.reddit.com/user/ste_xx')"/>-->
            <font-awesome :icon="['fab', 'linkedin']" size="1x" @click="open('https://www.linkedin.com/in/stefan-breitenstein-10337a173/')"/>
          </div>
        </div>
        <nav class="nav">
          <g-link class="nav__link" to="/projects/">side projects</g-link>
        </nav>
      </div>
    </header>
    <div class="header-spacer">&nbsp;</div>
    <slot/>
  </div>
</template>
<script>
  export default {
    methods: {
      open(link) {
        window.open(link, 'blank');
      }
    }
  }
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  /*font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;*/
  margin:0;
  padding:0;
  line-height: 1.5;
  font-family: Montserrat;
}

:root {
  --card-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  --card-content-margin: 0 8px;
  --card-title-font-weight: 700;
  --card-tag-color: blue;
  --card-tag-font-size: 0.7em;
  --card-tag-font-weight: 700;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header-spacer {
  height: 40px;
}
.header {
  position: fixed;
  width: 100vw;
  color: #aeb9bb;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 60px;
  z-index: 100;
  left: 0;
}
.header a:visited{
  color: #aeb9bb;
}

.header a{
  color: #aeb9bb;
}

.nav__link {
  margin-left: 20px;
}

.background-container {
  padding-bottom: 4rem;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjM3NSIgaGVpZ2h0PSI4MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8IS0tIENyZWF0ZWQgd2l0aCBTVkctZWRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9TVkctRWRpdC9zdmdlZGl0LS0+CiA8ZyBjbGFzcz0ibGF5ZXIiPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBkPSJtMi4wOTk2ODEsNy4wMzA5NDVsMzcwLjY4ODYxNSwtNS4yOTY3NTlsMC4zMTE3MTQsMjA4LjExNjY4MWMtMjM1LjQ0NzU1NCw4LjUyOTk5MiAtMTM4LjY0MDE4LDExNy42MTYyODkgLTM3MS4xMTE4ODgsMTIyLjUwNjUwNiIgZmlsbD0iI2VmZWVmZiIgaWQ9InN2Z183IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIvPgogPC9nPgo8L3N2Zz4=);
  background-size: 100% 100vh;
  background-position: right top;
  background-repeat: no-repeat;
}
</style>
