<template>
  <Layout class="background-container">
    <h1 class="introduction">Hi There!</h1>

    <h4 class="introduction_subheader">I’m Stefan (ste-xx) and I’m just a guy who loves to code and a wannapreneur</h4>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Ste-XX personal site'
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
