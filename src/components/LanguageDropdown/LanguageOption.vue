<template>
  <div
    class="option-style"
    :class="{ selected: option.selected }"
    @click="selectOption(option.id)"
  >
    <label>
      {{ option.long }}
    </label>
    <img v-if="option.selected" :src="svgUrl" alt="SVG Check" />
  </div>
</template>
<script>
export default {
  name: "LanguageOption",
  props: {
    option: {
      type: Object,
      required: true,
    },
    onClick: {
      type: Function,
      default: (e) => {
        return e;
      },
    },
  },
  computed: {
    svgUrl() {
      return require("@/assets/icons/check.svg");
    },
  },
  methods: {
    selectOption(id) {
      this.onClick(id);
    },
  },
};
</script>
<style scoped>
.option-style {
  display: flex;
  padding: 12px 0px;
  justify-content: space-between;
  align-items: center;
  color: var(--Black);
}

.option-style label {
  cursor: inherit;
  color: var(--Black);
  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 150%;
}

.selected {
  background: var(--primary-100);
  justify-content: space-between;
}

.selected label {
  color: var(--primary-700);
}
</style>
