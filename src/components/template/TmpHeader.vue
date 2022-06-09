<template>
  <header>
    <ALogo />
    <AHiddenSearchBar />
  </header>
</template>

<script>
import AHiddenSearchBar from "../atom/AHiddenSearchBar.vue";
import ALogo from "../atom/ALogo.vue";
export default {
  components: { ALogo, AHiddenSearchBar },
  name: "TmpHeader",
};
</script>

<style lang="scss" scoped>
header {
  padding: var(--padding-xxs) var(--padding-lg);
  height: var(--hgt-header);
  background-color: var(--clr-bg-0);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>