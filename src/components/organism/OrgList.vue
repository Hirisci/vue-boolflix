<template>
  <section>
    <h2>{{ title }}</h2>
    <div class="carousel">
      <MlcCard v-for="film in films" :film="film" :key="film.id" />
    </div>
  </section>
</template>

<script>
import MlcCard from "../molecule/MlcCard.vue";
import array from "../particles/array";
export default {
  components: { MlcCard },
  name: "OrgList",
  props: {
    films: array,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: var(--padding-md);
  h2 {
    padding: var(--padding-sm) 0;
  }
}
.carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column: 32rem;
  gap: 1rem;
}
</style>