<template>
  <div class="layout background-container">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.background-container {
  padding-bottom: 4rem;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MzcuMyA3MDMuNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2VmZWVmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAwczE0Ny44IDEwMC44IDY3LjUgMzAwLjNTNjIwIDM3Ny41IDYyMCAzNzcuNWwtMjQuMiAxODAuNCA0MC42IDEzMS41IDIwMS02Mi44VjB6IiBjbGFzcz0iYSIvPjxwYXRoIGQ9Ik00MzkuNCAzMTAuOWMtNDUuMS0xLjYtODgtMTYuMS0xMjktMzJzLTgxLjUtMzMuNi0xMjUuNS00MmMtMjguMy01LjQtNjAuNy02LjItODMuNCA5LTIyIDE0LjYtMjkgMzkuNy0zMi45IDYzLjEtMi44IDE3LjYtNC41IDM2LjEgMy4zIDUyLjYgNS41IDExLjQgMTUuMiAyMSAyMS45IDMyIDIzLjMgMzggNi44IDg1LTE4LjUgMTIyLjItMTEuOCAxNy41LTI1LjUgMzQuMS0zNC43IDUyLjdzLTEzLjMgMzkuOC01LjMgNTguOEM0My4yIDY0NiA2MiA2NjAuMiA4Mi41IDY3MGM0MS42IDIwLjEgOTAuNSAyNiAxMzguMyAyOS4yIDEwNS43IDcuMiAyMTIgNCAzMTggMWE5MzQgOTM0IDAgMCAwIDExNy4xLTguNGMyMS40LTMuNCA0My41LTguOCA1OS4xLTIxLjZhNDkuNSA0OS41IDAgMCAwIDExLjQtNjQuN2MtMjIuMi0zNC40LTgzLjUtNDMtOTktODAtOC42LTIwLjMuMi00MyAxMi42LTYxLjkgMjYuNi00MC41IDcxLjItNzYgNzMuNi0xMjIuMyAxLjYtMzEuOC0xOS45LTYzLjYtNTMtNzguNkM2MjUuOCAyNDcgNTc3LjYgMjQ5IDU1MiAyNzVjLTI2LjUgMjYuOC03Mi45IDM3LjItMTEyLjYgMzUuOHoiIGNsYXNzPSJhIi8+PC9zdmc+);
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
}
</style>
