<template>
  <main>
    <OrgList />
  </main>
</template>

<script>
import OrgList from "../organism/OrgList.vue";
export default {
  components: { OrgList },
  name: "TmpMain",
};
</script>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - var(--hgt-header));
  background-color: var(--clr-bg-1);
}
</style>