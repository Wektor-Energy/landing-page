<template>
  <div class="section-container">
    <div class="video-container">
      <video loop muted autoplay>
        <source src="@/assets/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
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
          <b>inteligência artificial</b> na gestão de <b>ativos de energia</b>.
        </a>
      </div>
      <img alt="Wektor Solution Example" src="@/assets/images/wektor_ex.png" />
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
  line-height: 140%;
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

.video-container {
  position: absolute;
  overflow: hidden;
  z-index: -1;
  width: 100%;
  height: 75%;
}

video {
  top: 0;
  left: 0;
  width: max(100%, 1440px);
  object-fit: cover;
}

.section-container {
  z-index: 1;
  position: relative;
  overflow: hidden;
  background-color: var(--White);
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
