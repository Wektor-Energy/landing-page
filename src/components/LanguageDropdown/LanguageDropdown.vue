<template>
  <div class="dropdown-container">
    <language-button
      :isDropdownOpen="isDropdownOpen"
      :short="selectedOption.short"
      :onClick="toggleDropdown"
    />
    <div v-if="isDropdownOpen" class="dropdown-content" ref="dropdown">
      <ul>
        <language-option
          v-for="option in options"
          :key="option.id"
          :option="option"
          :onClick="selectOption"
          class="option-style"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import LanguageOption from "./LanguageOption.vue";
import LanguageButton from "./LanguageButton.vue";

export default {
  name: "LanguageDropdown",
  props: {
    onClick: {
      type: Function,
      default: (opt) => {
        return opt;
      },
    },
    options: {
      type: Array,
      required: true,
    },
  },
  components: {
    "language-option": LanguageOption,
    "language-button": LanguageButton,
  },
  data() {
    return {
      isDropdownOpen: false, // State for dropdown visibility
    };
  },
  computed: {
    buttonClass() {
      return {
        "button-clicked": this.isDropdownOpen,
      };
    },
    selectedOption() {
      return this.options.find((e) => e.selected);
    },
  },
  methods: {
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(id) {
      this.isDropdownOpen = false;
      this.onClick(id);
    },
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdown;
      if (
        dropdown &&
        !dropdown.contains(event.target) &&
        event.target !== this.$refs.toggleButton
      ) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    // Add event listener to detect clicks outside the dropdown
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    // Remove the event listener when the component is destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.dropdown-container {
  position: relative;
}

.option-style {
  padding: var(--Scale-3) !important;
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  top: 120%;
  right: 0%;
  background: var(--White);
  border: 1px solid var(--Silver-300);
  border-radius: var(--sds-size-radius-200);
  width: 170px;
  z-index: 100;
  overflow: hidden;
}

.dropdown-content ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
