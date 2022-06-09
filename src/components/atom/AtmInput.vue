<template>
  <input
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "AtmInput",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: String,
  },
};
</script>

