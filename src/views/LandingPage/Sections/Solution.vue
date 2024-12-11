<template>
  <div class="section-container">
    <div class="section-1">
      <div class="section-title">
        <a>Tudo integrado em uma única plataforma<label>.</label></a>
      </div>
      <div class="section-title">
        <a>Tudo integrado em uma única plataforma<label>.</label></a>
      </div>
      <!-- <img
        class="worker-image"
        alt="Wektor Solution Example"
        src="@/assets/images/worker.jpg"
      /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SolutionSection",
};
</script>
<style scoped>
.section-title {
  font-family: var(--sds-typography-title-page-font-family);
  font-size: var(--sds-typography-title-page-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 140%;
  letter-spacing: -0.96px;
  text-align: left;
}

.section-title > a > label {
  color: var(--secondary-600) !important;
}

.worker-image {
  width: 684px;
  height: 457px;
  flex-shrink: 0;
}

.section-container {
  margin: -80px 0px;
  padding: 128px 46px;
  align-items: center;
  background-color: var(--primary-100);
}

.section-container > div > * {
  flex: 1 1 47%;
}

.section-container > div {
  display: flex;
  flex-wrap: wrap;
}
</style>
