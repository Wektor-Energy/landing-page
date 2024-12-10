<template>
  <div :style="cssVars">
    <!-- <video autoplay muted loop>
            <source src="@/assets/videos/section1.png" type="image/jpg">
        </video> -->
    <div class="bg-video">
      <img src="@/assets/videos/section1.png" alt="Futuro Video" />
    </div>
    <!-- <div class="content">
            <h1>OI</h1>
        </div> -->
  </div>
</template>
<script>
import { useScreenSize } from "@/hooks/useScreenSize";
export default {
  name: "AboutUsSection",
  setup() {
    const { threshold } = useScreenSize();
    return {
      threshold,
    };
  },
  computed: {
    cssVars() {
      return {
        "--min-width": `${this.threshold - 5}px`,
      };
    },
  },
};
</script>
<style scoped>
img {
}

.bg-video {
}

.content {
}
</style>
