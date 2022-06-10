<template>
  <main>
    <OrgList type="film" title="Film per te" :films="array.film" />
    <OrgList type="series" title="Serie per te" :films="array.series" />
  </main>
</template>

<script>
import array from "../particles/array";
import OrgList from "../organism/OrgList.vue";
export default {
  components: { OrgList },
  name: "TmpMain",
  data() {
    return {
      array,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - var(--hgt-header));
  background-color: var(--clr-bg-1);
}
</style>