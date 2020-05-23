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
    <svg class="bgPosSquare" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill-opacity="var(--background-wave-opacity)" fill="var(--background-wave-color)"/>
    </svg>
    <svg class="bgPosWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--background-wave-color)" fill-opacity="var(--background-wave-opacity)" d="M0,224L60,202.7C120,181,240,139,360,133.3C480,128,600,160,720,165.3C840,171,960,149,1080,122.7C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <particles
            style="position: absolute; top: 0; left: 0; z-index: -1; height: 200px; width: 100vw;"
            id="tsparticles"
            color="#000000"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
    >
    </particles>
  </div>
</template>
<script>
    import Particles from 'particles.vue';

  export default {
     components: {
        Particles
    },
    data() {
      return {
        startWave: 50
       }
    },
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
  --card-title-font-weight: 800;
  --card-title-font-family: 'Raleway', sans-serif;
  --card-tag-color: blue;
  --card-tag-font-size: 0.7em;
  --card-tag-font-weight: 700;

  /*efeeff*/
  --background-wave-color: #a2d9ff;
  --background-wave-opacity: 0.5;
  --background-wave-start-wave: 20vh
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
  background-size: 100% 100vh;
  background-position: right top;
  background-repeat: no-repeat;
}

.bgPosSquare {
  position: absolute;
  height: var(--background-wave-start-wave);
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
}
.bgPosWave {
  position: absolute;
  top: var(--background-wave-start-wave);
  left: 0;
  z-index: -1;
  width: 100vw;
}
</style>
