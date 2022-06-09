<template>
  <div class="search-bar">
    <font-awesome-icon
      class="search-bar_icon"
      icon="fa-solid fa-magnifying-glass"
    />
    <input v-model="filter" placeholder="search" />
  </div>
</template>

<script>
export default {
  components: {},
  name: "AHiddenSearchBar",
  data() {
    return {
      filter: "",
    };
  },
};
</script>


<style lang="scss" scoped>
.search-bar {
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>