<template>
  <div id="app">
    <nav>
      <router-link to="/patients">Пациенты</router-link> |
      <router-link to="/patient/create">Создать пациента</router-link> 

    </nav>
    <router-view/>
  </div>
</template>

<style>
@import url("//unpkg.com/element-ui@2.15.13/lib/theme-chalk/index.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
