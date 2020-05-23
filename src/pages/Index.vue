<template>
  <Layout class="background-container">
    <h1 class="introduction"></h1>
    <div>
      <g-image style="object-fit: cover; border-radius:50%; float: left; margin-top: 1.5em; margin-right: 2em; " src="~/assets/avatar.jpg" width="120"/>
    </div>
    <h4 class="introduction_subheader">Hi, I’m Stefan and just a guy who loves to code...</h4>
    <p style="font-size: 1.3em;">
      ...but I'm also interested in entrepreneurship, tech-startups and dev-news.
      I love coding in general, but I'm primarily interested in serverless stuff.
    </p>
    <p style="font-size: 1.3em;">
      I'm a dev-teamlead at <a href="https://www.tt-s.com/en/">tts</a> and work on <a href="https://www.loop.how/">loop</a>.
    </p>
    <span style="font-size: 1.3em;">
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
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 32pt;
  color: rgb(112, 112, 112);
  margin-bottom: min(2.5rem, 16px);
}
</style>
