<template>
  <button
    class="button-style"
    :class="buttonClass"
    @click="onClick"
    @mousedown="isClicked = true"
    @mouseup="isClicked = false"
    @mouseleave="isClicked = false"
  >
    <img :src="buttonIcon" :class="imgClass" alt="Social Icon" />
  </button>
</template>
<script>
export default {
  name: "SocialButton",
  data() {
    return {
      isClicked: false, // Tracks the toggle state
    };
  },
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
    variant: {
      type: String,
      default: "primary", // primary, ghost
      validator(value) {
        return value === "primary" || value === "ghost";
      },
    },
    icon: {
      type: String,
      default: "linkedin", // linkedin, whatsapp
      validator(value) {
        return value === "linkedin" || value === "whatsapp";
      },
    },
    size: {
      type: String,
      default: "sm", // sm, md
      validator(value) {
        return value === "sm" || value === "md";
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        "button-primary": this.variant === "primary",
        "button-ghost": this.variant === "ghost",
        active: this.isClicked,
      };
    },
    buttonIcon() {
      return this.icon == "linkedin"
        ? require("@/assets/icons/linkedin.svg")
        : require("@/assets/icons/whatsapp.svg");
    },
    imgClass() {
      return {
        sm: this.size === "sm",
        md: this.size === "md",
      };
    },
  },
  methods: {
    handleClick(event) {
      this.onClick(event); // Call the provided onClick handler
    },
  },
};
</script>
<style scoped>
.button-style {
  border: none;
  border-radius: 8px;
  display: inline-flex;
  padding: var(--sds-size-space-300);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
}

.md {
  width: var(--Scale-5);
  height: var(--Scale-5);
  border-radius: 5px;
}
.sm {
  width: var(--Scale-3);
  height: var(--Scale-3);
  border-radius: 3px;
}

.button-primary {
  background: var(--secondary-600);
}

.button-primary:hover {
  background: var(--secondary-700);
  cursor: pointer;
}

.button-ghost {
  background: var(--primary-100);
}

.button-ghost:hover {
  border: 1px solid var(--Silver-300);
  cursor: pointer;
}

.button-ghost.active {
  border: 1px solid var(--primary-300);
}
</style>
