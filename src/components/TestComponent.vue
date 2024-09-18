<template>
  <div id="testDiv">
    <router-link to="/">Home</router-link>
    <router-view></router-view>

    <p id="testParagraph">Test Paragraph</p>
    
    <FunctionalComponent />
  </div>
</template>

<script>
import FunctionalComponent from "./FunctionalComponent.vue";

export default {
    name: 'TestComponent',
    components: { 
      FunctionalComponent
    },
}
</script>

<style scoped>
</style>