<template>
  <div id="app">
    <h1>Home</h1>

    <router-link to="/test">Go to Test Component</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 40px;
}
</style>
