<template>
    <div class="side-container">
        <div class="button-style" @click="toggleDropdown">
            <img :src="isOpen ? crossUrl : menuUrl" />
        </div>
    </div>
</template>
<script>
export default {
    name: "LpButton",
    props: {
        onClick: {
            type: Function,
            default: () => { },
        },
        variant: {
            type: String,
            default: 'primary', // primary, secondary
            validator(value) {
                return value === 'primary' || value === 'secondary';
            }
        },
    },
    data() {
        return {
            sidebarOpened: false, // State for dropdown visibility
        };
    },
    computed: {
        isOpen() {
            return this.sidebarOpened;
        },
        menuUrl() {
            return require('@/assets/icons/menu.svg');
        },
        crossUrl() {
            return require('@/assets/icons/cross.svg');
        },
    },
    methods: {
        toggleDropdown() {
            this.sidebarOpened = !this.sidebarOpened;
        },
    },
}
</script>
<style scoped>
.side-container {
    position: sticky;
}

.button-style {
    size: medium;
    display: inline-flex;
    padding: var(--sds-size-space-300) var(--sds-size-space-400);
    justify-content: center;
    align-items: center;
    gap: var(--sds-size-space-200);
    border: none;

    border-radius: var(--sds-size-radius-200);
}

.button-style svg {
    display: flex;
    align-items: center;
    gap: 16px;
}
</style>