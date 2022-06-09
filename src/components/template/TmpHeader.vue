<template>
  <header>
    <AtmLogo />
    <MlcSearchBar />
  </header>
</template>

<script>
import AtmLogo from "../atom/AtmLogo.vue";
import MlcSearchBar from "../molecule/MlcSearchBar.vue";
export default {
  components: { AtmLogo, MlcSearchBar },
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