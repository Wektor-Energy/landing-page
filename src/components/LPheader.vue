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
      <template v-if="!isSmallScreen">
        <language-dropdown :options="languages" :onClick="updateOptions" />
        <lp-button>Área do Cliente</lp-button>
      </template>
      <!-- Mobile abaixo -->
      <template v-if="isSmallScreen">
        <language-button :onClick="toggleLanOptions" :isDropdownOpen="false" :short="selectedLanguage.short" />
        <side-button :onClick="toggleSidebar" :sidebarOpened="sidebarIsOpen" />
      </template>
    </div>
    <div class="options-container" v-if="sidebarIsOpen && isSmallScreen">
      <template v-if="sidebarOptionsOpen">
        <lp-button class="sidebar-button">Área do Cliente</lp-button>
        <div v-for="(opt, index) in navOptions" :key="index">
          <h4>{{ opt }}</h4>
        </div>
      </template>
      <template v-if="sidebarLanOpen">
        <language-option v-for="option in languages" :key="option.id" :option="option" :onClick="updateOptions"
          class="sidebar-button" />
      </template>
    </div>
  </header>
</template>

<script>
import { useScreenSize } from '@/hooks/useScreenSize';
import LanguageButton from './LanguageDropdown/LanguageButton.vue';
import LanguageOption from './LanguageDropdown/LanguageOption.vue';
import LanguageDropdown from './LanguageDropdown/LanguageDropdown.vue';
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
    "language-button": LanguageButton,
    "language-option": LanguageOption,
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
      languages: [
        { id: 1, long: 'Português', short: 'PT', selected: true },
        { id: 2, long: 'English', short: 'EN', selected: false },
        // { id: 3, long: 'Option 3', short: 'O3', selected: false },
      ],
      sidebarOptionsOpen: false,
      sidebarLanOpen: false,
    };
  },
  computed: {
    cssVars() {
      return {
        '--header-heigth': "80px",
      };
    },
    selectedLanguage() {
      return this.languages.find(e => e.selected)
    },
    sidebarIsOpen() {
      return this.sidebarLanOpen || this.sidebarOptionsOpen
    },
  },
  methods: {
    updateOptions(id) {
      this.languages.forEach(e => e.selected = e.id == id);
    },
    toggleSidebar() {
      if (this.sidebarIsOpen) {
        this.sidebarOptionsOpen = false
        this.sidebarLanOpen = false
      }
      else {
        this.sidebarOptionsOpen = true
      }
    },
    toggleLanOptions() {
      if (this.sidebarLanOpen) {
        this.sidebarLanOpen = false
      }
      else {
        this.sidebarOptionsOpen = false
        this.sidebarLanOpen = true
      }
    }
  },
}
</script>

<style scoped>
h4 {
  cursor: pointer;
}

img {
  width: 120px;
  height: 48px;
  flex-shrink: 0;
}

.sidebar-button {
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