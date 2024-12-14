<template>
  <div class="card-container">
    <img :src="icon" alt="SVG Item" />
    <a>{{ text }}</a>
  </div>
</template>
<script>
export default {
  name: "AdvantageCard",
  props: {
    icon: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 254px;
  padding: 20px 12px;
  gap: var(--Scale-5);
}

a {
  align-self: stretch;
  color: var(--Black);
  text-align: center;
  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 150%;
}
</style>
