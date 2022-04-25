<template>
  <div>
    <TheHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav
      v-bind:show="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from "../components/Navigation/TheHeader";
import TheSidenav from "../components/Navigation/TheSidenav";

export default {
  name: "default",
  components: {
    TheHeader, TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>
html {
  font-family: 'Roboto Mono', monospace;
  /*font-family: 'Square Peg', cursive;*/
}

body {
  margin: 0;
}
</style>
