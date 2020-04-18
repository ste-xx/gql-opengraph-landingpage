<template>
  <Layout class="background-container">
    <h1 class="introduction">Hi There!</h1>

    <h4 class="introduction_subheader">I’m Stefan (ste-xx) and I’m just a guy who loves to code and a wannapreneur</h4>

    <g-link class="nav__link" to="/projects/">side projects</g-link>

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
