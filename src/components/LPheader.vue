<template>
  <header :class="['header-container', { 'phone-padding': isSmallScreen }]" :style="cssVars">
    <div class="header-content">
      <img alt="Wektor logo" src="@/assets/images/logo1.png">
      <div v-if="!isSmallScreen">
        <div v-for="(opt, index) in navOptions" :key="index">
          <h4>{{ opt }}</h4>
        </div>
      </div>
    </div>
    <div class="header-options">
      <language-dropdown :options="options" :onClick="updateOptions" />
      <lp-button v-if="!isSmallScreen">Área do Cliente</lp-button>
      <side-button v-if="isSmallScreen" />
    </div>
    <div class="options-container">
      <lp-button class="client-button">Área do Cliente</lp-button>
      <div v-for="(opt, index) in navOptions" :key="index">
        <h4>{{ opt }}</h4>
      </div>
    </div>
  </header>
</template>

<script>
import { useScreenSize } from '@/hooks/useScreenSize';
import LanguageDropdown from './LanguageDropdown.vue';
import LpButton from './LpButton.vue';
import SideButton from './SideButton.vue';

export default {
  name: "LpHeader",
  setup() {
    const { isSmallScreen } = useScreenSize(); // Use the composable

    return {
      isSmallScreen,
    };
  },
  components: {
    "lp-button": LpButton,
    "side-button": SideButton,
    "language-dropdown": LanguageDropdown,
  },
  props: {
    navOptions: {
      type: Array,
      required: false,
    }
  },
  data() {
    return {
      options: [
        { id: 1, long: 'Português', short: 'PT', selected: true },
        { id: 2, long: 'English', short: 'EN', selected: false },
        // { id: 3, long: 'Option 3', short: 'O3', selected: false },
      ],
    };
  },
  methods: {
    updateOptions(id) {
      this.options.forEach(e => e.selected = e.id == id);
    },
  },
  computed: {
    cssVars() {
      return {
        '--header-heigth': "80px",
      };
    },
  },
}
</script>

<style scoped>
img {
  width: 120px;
  height: 48px;
  flex-shrink: 0;
}

.client-button {
  width: 100%;
}

.phone-padding {
  padding: 8px 20px !important;
}

.header-container {
  display: flex;
  height: var(--header-heigth);
  padding: 8px 46px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: var(--White);
}

.options-container {
  position: absolute;
  left: 0%;
  top: calc(0% + var(--header-heigth));
  width: 100vw;

  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: var(--Bluebird-100);
}

.header-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4vw;
}


.header-content>div {
  flex: 1;
  display: flex;
  gap: 2.5vw;
}


.header-options {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>