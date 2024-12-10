<template>
    <div class="option-style" :class="{ selected: option.selected }" @click="selectOption(option.id)">
        <label>
            {{ option.long }}
        </label>
        <img v-if="option.selected" :src="svgUrl" alt="SVG Check" />
    </div>
</template>
<script>
export default {
    name: "LanguageOption",
    props: {
        option: {
            type: Object,
            required: true
        },
        onClick: {
            type: Function,
            default: (e) => { return e }
        }
    },
    computed: {
        svgUrl() {
            return require('@/assets/icons/check.svg');
        },
    },
    methods: {
        selectOption(id) {
            this.onClick(id)
        }
    }
}
</script>
<style>
.option-style {
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    color: var(--Black);
}

.selected {
    background: var(--Bluebird-100);
    justify-content: space-between;
}

.selected label {
    color: var(--Bluebird-700);
}
</style>