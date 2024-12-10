<template>
  <div
    class="button-style"
    :class="[{ 'no-hover': isDropdownOpen }, buttonClass]"
    @click="toggleDropdown"
  >
    <label>
      {{ short }}
    </label>
  </div>
</template>
<script>
export default {
  name: "LanguageButton",
  props: {
    short: {
      default: "PT",
      required: true,
      type: String,
    },
    isDropdownOpen: {
      required: true,
      type: Boolean,
    },
    onClick: {
      default: (e) => {
        return e;
      },
      type: Function,
    },
  },
  computed: {
    buttonClass() {
      return {
        "button-clicked": this.isDropdownOpen,
      };
    },
  },
  methods: {
    toggleDropdown() {
      this.onClick();
    },
  },
};
</script>
<style scoped>
.button-style {
  display: inline-flex;
  padding: 12px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0);
}

.button-style:hover {
  cursor: pointer;
  border: 1px solid var(--Silver-300);
  background: var(--Silver-100);
}

.button-clicked,
.button-style.no-hover:hover {
  border: 1px solid var(--Blue-300);
  background: var(--Blue-100);
}

.button-style.no-hover:hover {
  cursor: default;
}

.button-style label {
  cursor: inherit;
  color: var(--Black);
  text-align: center;
  font-family: var(--sds-typography-body-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* Esse valor está estático visto que a letra muda a largura do botão */
  width: 21px;
}
</style>
