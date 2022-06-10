<template>
  <section>
    <h2>{{ title }}</h2>
    <div class="carousel">
      <MlcCard :type="type" v-for="film in films" :film="film" :key="film.id" />
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
    type: String,
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
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 354px);
  grid-column: 32rem;
  gap: 1rem;
}
</style>