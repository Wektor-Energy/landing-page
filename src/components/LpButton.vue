<template>
    <button class="button-style" :class="buttonClass">
        <label>
            <slot></slot>
        </label>
    </button>
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
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isDisabled() {
            return this.disabled;
        },
        buttonClass() {
            return {
                'button-primary': this.variant === 'primary' && !this.isDisabled,
                'button-secondary': this.variant === 'secondary' && !this.isDisabled,
                'button-disabled': this.isDisabled,
            };
        },
    },
    methods: {
        handleClick(event) {
            if (this.isDisabled) return;
            this.onClick(event); // Call the provided onClick handler
        },
    },
}
</script>
<style scoped>
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

.button-primary {
    background: var(--primary-600);
}

.button-primary:hover {
    background: var(--primary-700);
    cursor: pointer;
}

.button-secondary {
    background: var(--secondary-600);
}

.button-secondary:hover {
    background: var(--secondary-700);
    cursor: pointer;
}

.button-disabled {
    background: var(--Silver-600);
    cursor: not-allowed;
}

label {
    cursor: inherit;
    color: var(--White);
    font-family: var(--sds-typography-body-font-family);
    font-size: var(--sds-typography-body-size-medium);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}
</style>