<template>
  <div id="app">
    <TmpHeader />
    <TmpMain />
  </div>
</template>

<script>
import TmpHeader from "./components/template/TmpHeader.vue";
import TmpMain from "./components/template/TmpMain.vue";
export default {
  name: "App",
  components: { TmpMain, TmpHeader },
};
</script>

<style lang="scss">
@import "./assets/style/style.scss";
#app {
  color: var(--clr-txt-1);
}

.invisible {
  display: none;
}
</style>