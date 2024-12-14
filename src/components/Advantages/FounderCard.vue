<template>
  <div class="founder-container">
    <img :src="Image" alt="Founder Image" />
    <div class="description-container">
      <div class="title-container">
        <a>{{ name }}</a>
        <social-button
          icon="linkedin"
          size="sm"
          variant="ghost"
          :onClick="openLinkedIn"
        />
      </div>
      <div class="description">
        <a>
          {{ description }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import SocialButton from "../SocialButton.vue";
export default {
  name: "FounderCard",
  props: {
    name: {
      required: true,
      default: "Name",
    },
    Image: {
      type: String,
      default: require("@/assets/images/logo1.png"),
    },
    description: {
      required: true,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, temporibus?",
    },
    linkedinUrl: {
      type: String,
      default: "https://www.linkedin.com/company/wektorenergy/",
    },
  },
  components: {
    "social-button": SocialButton,
  },
  methods: {
    openLinkedIn() {
      window.open(this.linkedinUrl, "_blank");
    },
  },
};
</script>
<style scoped>
.founder-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap */
  justify-content: center; /* Space between items */
  align-items: center;
  gap: var(--Scale-5);
  width: 100%;
  padding: var(--Scale-4) var(--Scale-5);
  border-radius: var(--Scale-6);
  background: var(--primary-100);
}

.title-container > a {
  color: var(--primary-1000);
  font-family: var(--sds-typography-heading-font-family);
  font-size: var(--sds-typography-heading-size-base);
  font-weight: var(--sds-typography-heading-font-weight);
  line-height: 140%;
  letter-spacing: -0.48px;
}

.description {
  align-self: stretch;
  color: var(--Black);
  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 150%;
  text-align: left;
}

.description-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  height: 100%;
  gap: var(--Scale-3);
  min-width: 200px; /* Ensure it wraps below image if necessary */
}

.title-container {
  display: flex;
  align-items: start;
  gap: 10px;
}

img {
  flex: 1 1 20%;
  height: auto;
  max-height: 326px;
  min-width: 184px;
  border-radius: inherit;
  object-fit: cover;
}
</style>
