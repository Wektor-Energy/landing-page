<template>
    <div class="button-style" :class="[{ 'no-hover': isDropdownOpen }, buttonClass]" @click="toggleDropdown">
        <label>
            {{ selectedOption.short }}
        </label>
        <!-- Dropdown content -->
        <div v-if="isDropdownOpen" class="dropdown-content" ref="dropdown">
            <ul>
                <language-option v-for="option in options" :key="option.id" :option="option" :onClick="selectOption" />
            </ul>
        </div>
    </div>
</template>

<script>
import LanguageOption from './LanguageOption.vue';

export default {
    name: "LanguageDropdown",
    props: {
        onClick: {
            type: Function,
            default: (opt) => { return opt },
        },
        options: {
            type: Array,
            required: true,
        },
    },
    components: {
        "language-option": LanguageOption
    },
    data() {
        return {
            isDropdownOpen: false, // State for dropdown visibility
        };
    },
    computed: {
        buttonClass() {
            return {
                'button-clicked': this.isDropdownOpen,
            };
        },
        selectedOption() {
            return this.options.find(e => e.selected)
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
            if (dropdown && !dropdown.contains(event.target) && event.target !== this.$refs.toggleButton) {
                this.isDropdownOpen = false;
            }
        },
    },
    mounted() {
        // Add event listener to detect clicks outside the dropdown
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        // Remove the event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    },
}
</script>

<style scoped>
.button-style {
    display: inline-flex;
    padding: 12px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0);
    position: relative;
}

.button-style:hover {
    cursor: pointer;
    border: 1px solid var(--Silver-300);
    background: var(--Silver-100);
}

.button-clicked,
.button-style.no-hover:hover {
    border: 1px solid var(--Blue-300);
    background: var(--Blue-100);
}

.button-style.no-hover:hover {
    cursor: default;
}

.button-style label {
    cursor: inherit;
    color: var(--Black);
    text-align: center;
    font-family: var(--sds-typography-body-font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* Esse valor está estático visto que a letra muda a largura do botão */
    width: 21px;
}

.dropdown-content {
    position: absolute;
    top: 130%;
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
