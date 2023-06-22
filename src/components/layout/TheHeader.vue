<template>
  <img alt="Vue logo" class="logo" src="@/assets/sky-stars-light-dark-logo.png" width="50" height="50" />
  <nav>
    <RouterLink to="/">Container Home</RouterLink>
    <RouterLink to="/about">Container About</RouterLink>
    <RouterLink to="/repository">Repository</RouterLink>
    <RouterLink to="/repository/repositories">Repo Repository</RouterLink>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
