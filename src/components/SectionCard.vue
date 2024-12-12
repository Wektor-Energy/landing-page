<template>
  <div class="card-container" :style="cssVars">
    <div class="card-header">
      <label>{{ label }}</label>
      <a>{{ title }}</a>
    </div>
    <div class="card-body">
      <a>
        {{ body }}
      </a>
    </div>
    <img alt="Bottom Img" :src="Image" />
  </div>
</template>
<script>
import { useScreenSize } from "@/hooks/useScreenSize";

export default {
  name: "SectionCard",
  setup() {
    const { threshold } = useScreenSize(); // Use the composable
    return {
      threshold,
    };
  },
  props: {
    label: {
      type: String,
      default: "Label",
    },
    title: {
      type: String,
      default: "Title",
    },
    body: {
      type: String,
      default:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt \
        sapiente obcaecati quisquam pariatur corporis, nihil amet unde iusto qui \
        possimus?",
    },
    Image: {
      type: String,
      default: require("@/assets/images/dashboard.png"),
    },
  },
  computed: {
    cssVars() {
      return {
        "--img-w": `${this.threshold / 3}px`,
      };
    },
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--Scale-5);
  gap: var(--Scale-5);
  flex-shrink: 0;

  border-radius: var(--Scale-6);
  background: var(--White);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Scale-3);
  align-self: stretch;
}

.card-header > label {
  color: var(--primary-600);
  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-strong);
  line-height: 150%;
  text-transform: uppercase;
}
.card-header > a {
  color: var(--Black);
  font-family: var(--sds-typography-heading-font-family);
  font-size: var(--sds-typography-heading-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-heading-font-weight);
  line-height: 150%;
  letter-spacing: -0.48px;
  text-align: left;
}

.card-body {
  color: var(--Black, #000);
  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 150%;
  text-align: left;
}

img {
  border-radius: var(--Scale-3);
  min-width: var(--img-w);
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
