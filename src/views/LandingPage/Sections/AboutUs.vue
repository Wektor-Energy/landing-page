<template>
  <div>
    <!-- <video autoplay muted loop>
      <source src="@/assets/videos/section1.png" type="image/jpg" />
    </video> -->
    <div class="main-container">
      <div class="bg-image"></div>
      <div class="presentation-section">
        <div class="main-text">
          <h1>
            AI solutions<br />
            for green energy<label>.</label>
          </h1>
        </div>
        <lp-button
          variant="secondary"
          :style="{ alignSelf: isSmallScreen ? 'stretch' : 'auto' }"
        >
          Fale com um especialista
        </lp-button>
      </div>
      <div class="about-section">
        <div class="about-text">
          <a>
            Somos uma plataforma inovadora que aplica
            <b>inteligência artificial</b> na gestão de
            <b>ativos de energia</b>.
          </a>
        </div>
        <img
          alt="Wektor Solution Example"
          src="@/assets/images/wektor_ex.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { useScreenSize } from "@/hooks/useScreenSize";
import LpButton from "@/components/LpButton.vue";

export default {
  name: "AboutUsSection",
  components: {
    "lp-button": LpButton,
  },
  setup() {
    const { isSmallScreen, threshold } = useScreenSize();
    return {
      isSmallScreen,
      threshold,
    };
  },
};
</script>
<style scoped>
h1 label,
h1 {
  color: var(--White);
  font-family: var(--sds-typography-title-page-font-family);
  font-size: var(--sds-typography-title-page-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 140%; /* 67.2px */
  letter-spacing: -0.96px;
}

h1 label {
  color: var(--secondary-600) !important;
}

img {
  min-width: 0px;
  flex-shrink: 0;
  object-fit: cover;
}

.about-section {
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--Scale-8);
  padding: var(--Scale-8) 46px;
  border-radius: 64px;
  background: var(--primary-600);
}

.about-section > * {
  flex: 1 1 47%;
}

.about-text {
  text-align: left;
  color: var(--White);
  font-family: var(--sds-typography-subtitle-font-family);
  font-size: var(--sds-typography-subtitle-size-base);
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.main-text {
  text-align: left;
}

.bg-image {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75%;
  background: url("@/assets/videos/section1.png") center center no-repeat;
  background-size: cover;
  object-fit: contain;
}

.main-container {
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.presentation-section {
  display: flex;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 40px;
  padding: 0px 46px;
}
</style>
