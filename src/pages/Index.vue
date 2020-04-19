<template>
  <Layout class="background-container">
    <h1 class="introduction">Hi There!</h1>
    <div>
      <g-image style="object-fit: cover; border-radius:50%; float: left; margin-top: 1em; margin-right: 2em; " src="~/assets/avatar.jpg" width="120"/>
    </div>
    <h4 class="introduction_subheader">I’m Stefan and I’m just a guy who loves to code.</h4>
    <p>
      I'm a dev-teamlead at <a href="https://www.tt-s.com/en/">tts</a> and work on <a href="https://www.loop.how/">loop</a>.
      I'm interested in tech-startups and coding in general, but primarily in serverless stuff.
    </p>
    <span>
      Have a look on my private <g-link to="/projects/">side projects</g-link>.
    </span>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Stefan Breitenstein personal site'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.introduction {
  font-size: 36pt;
  margin-bottom: 2rem;
}

.introduction_subheader {
  margin-bottom: 2.5rem;
  font-size: 32pt;
  font-weight: normal;
  color: rgb(112, 112, 112);
}
</style>
