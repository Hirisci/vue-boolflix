<template>
  <component class="btn" :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AtmButton",
  props: {
    tag: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  height: 2rem;
  aspect-ratio: 1/1;
}
</style>